import User from "../Models/User.js";
import genError from "../error.js";

export const udpateUser = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true }); // return the updated document
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(genError(400, "Unable to update user"));
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(genError(400, "Unable to delete user"));
  }
};

export const addVirtualMoney = async (req, res, next) => {
  try {
    const moneyToAdd = req.body.money;
    const userId = req.user.id;

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $inc: {
          virtualMoney: moneyToAdd,
        },
      },
      { new: true }
    ); // return

    res.status(200).json({
      user,
      message: "Updated Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const buyStockVirtual = async (req, res, next) => {
  const stockName = req.body.name;
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    const userCredits = user.virtualMoney;

    const quantity = req.body.quantity;
    const priceOfOne = req.body.price;
    // Check if user has enough credits to buy stock
    if (userCredits < priceOfOne * quantity) {
      return res.status(400).json({
        message: "Insufficient credits to buy stock",
      });
    }
    const userUpdated = await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          activeStocksName: {
            name: stockName,
            date: Date.now(),
            priceBought: req.body.price, // Price when bought
            quantity: req.body.quantity,
          },
        },
        $dec: {
          virtualMoney: req.body.price,
        },
      },
      { new: true }
    );
    res.status(200).json({
      userUpdated,
      message: `Bought ${stockName} stock for ${req.params.price}`,
    });
  } catch (error) {
    console.log("Error in buying a stock virtually:", error);
  }
};

export const sellStockVirtual = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const stockName = req.body.name;
    const quantity = req.body.quantity;

    const user = await User.findById(userId);

    const stockToSell = user.activeStocksName.find(
      (stock) => stock.name === stockName
    );

    if (!stockToSell) {
      return res.status(400).json({
        message: "Stock not found in portfolio",
      });
    }

    if (stockToSell.quantity < quantity) {
      return res.status(400).json({
        message: "Not enough quantity of stock to sell",
      });
    }

    let q_zero = stockToSell.quantity - quantity;

    const currentPrice = req.body.currentPrice;
    const amountEarned = quantity * currentPrice;

    if(q_zero == 0){
        await User.findByIdAndUpdate(
          userId,
          {
            $inc: {
              virtualMoney: amountEarned,
            },
            $pull: {
              activeStocksName: {
                name: stockToSell.name,
              },
            },
            $push: {
                pastStocks: {
                    name: stockToSell.name,
                    dateBought: stockToSell.date,
                    dateSold: Date.now(),
                    profitMade: Number(amountEarned - (stockToSell.priceBought * quantity)),
                    quantity: quantity,
                }
            }
          },
          { new: true }
        );
    } else {
        await User.findByIdAndUpdate(
          userId,
          {
            $inc: {
              virtualMoney: amountEarned,
            },
            $set: {
              "activeStocksName.$.quantity": q_zero
            },
            $push: {
                pastStocks: {
                    name: stockToSell.name,
                    dateBought: stockToSell.date,
                    dateSold: Date.now(),
                    profitMade: Number(amountEarned - (stockToSell.priceBought * quantity)),
                    quantity: quantity,
                }
            }
          },
          { new: true }
        );
    }


    res.status(200).json({
      message: `Sold ${quantity} shares of ${stockName}`,
    });
  } catch (error) {
    next(error);
  }
};

export const saveStock = async (req, res, next) => {
    try {
    const userId = req.user.id;
    const stockName = req.body.name;

    await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          savedStocksName: stockName
        }
      },
      { new: true }
    );

    res.status(200).json({
      message: `Saved ${stockName} to watchlist`
    });

  } catch (error) {
    next(error);
  }
};

export const removeStock = async (req, res, next) => {
    try {
    const userId = req.user.id;
    const stockName = req.body.name;

    await User.findByIdAndUpdate(
      userId,
      {
        $pull: {
          savedStocksName: stockName
        }
      },
      { new: true }
    );

    res.status(200).json({
      message: `Removed ${stockName} from watchlist`
    });

  } catch (error) {
    next(error);
  }
};

export const getSavedStocks = async (req, res, next) => {
    try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    res.status(200).json({
      savedStocks: user.savedStocksName
    });

  } catch (error) {
    next(error);
  }
};
