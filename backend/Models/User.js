import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    block: {
        type: String              //User Hash on Blockchain
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    activeStocksName: {
        type: [{
            name: {
                type: String,         //Name of the Stock
            },
            date: {
                type: Date,           //Date Of Purchase
            },
            priceBought: {
                type: Number,         //Price When Bought
            },
            quantity: {
                type: Number           
            }
        }],
        default: []
    },
    savedStocksName: {
        type: [String],       //Name of the Saved Stock 
        default: []
    },
    pastStocks: {
        type: [{
            name:{
                type: String
            },
            dateBought: {
                type: Date
            },
            dateSold: {
                type: Date
            },
            profitMade: {
                type: Number
            },
            quantity: {
                type: Number
            }
        }],
        default: []
    },
    virtualMoney: {
        type: Number,
        default: 100
    },
    
},
{
    timestamps: true
})

export default mongoose.model("User", UserSchema);