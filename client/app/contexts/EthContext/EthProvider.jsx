import React, { useReducer, useCallback, useEffect } from "react";
import Web3 from "web3";
import EthContext from "./EthContext";
import { reducer, actions, initialState } from "./state";
import UsersContractABI from "../../contracts/UsersContract.json";

function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const init = useCallback(
    async artifact => {
      if (artifact) {
        const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
        const accounts = await web3.eth.requestAccounts();
        const networkID = await web3.eth.net.getId();
        const { abi } = artifact;
        let address, contract;
        try {
          address = artifact.networks[networkID].address;
          contract = new web3.eth.Contract(abi, address);
        } catch (err) {
          console.error(err);
        }
        dispatch({
          type: actions.init,
          data: { artifact, web3, accounts, networkID, contract }
        });
      }
    }, []);

  useEffect(() => {
    const tryInit = async () => {
      try {
        init(UsersContractABI);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifact);
    };

    events.forEach(e => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach(e => window.ethereum.removeListener(e, handleChange));
    };
  }, [init, state.artifact]);

  // Function to create a new user
  const createUser = async (name, email) => {
    try {
      const { contract, accounts } = state;
      if (contract && accounts && accounts.length > 0) {
        await contract.methods.createUser(name, email).send({ from: accounts[0] });
        console.log("User created successfully.");
      } else {
        console.error("Contract or accounts not initialized.");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // Function to update user details
  const updateUser = async (userId, name, email) => {
    try {
      const { contract, accounts } = state;
      if (contract && accounts && accounts.length > 0) {
        await contract.methods.updateUser(userId, name, email).send({ from: accounts[0] });
        console.log("User details updated successfully.");
      } else {
        console.error("Contract or accounts not initialized.");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  // Function to delete a user
  const deleteUser = async (userId) => {
    try {
      const { contract, accounts } = state;
      if (contract && accounts && accounts.length > 0) {
        await contract.methods.deleteUser(userId).send({ from: accounts[0] });
        console.log("User deleted successfully.");
      } else {
        console.error("Contract or accounts not initialized.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Function to get user details
  const getUser = async (userId) => {
    try {
      const { contract } = state;
      if (contract) {
        const result = await contract.methods.getUser(userId).call();
        console.log("User details:", result);
        return result;
      } else {
        console.error("Contract not initialized.");
        return null;
      }
    } catch (error) {
      console.error("Error getting user details:", error);
      return null;
    }
  };

  // Function to add a stock to a user
  const addStockToUser = async (userId, stockId) => {
    try {
      const { contract, accounts } = state;
      if (contract && accounts && accounts.length > 0) {
        await contract.methods.addStockToUser(userId, stockId).send({ from: accounts[0] });
        console.log("Stock added to user successfully.");
      } else {
        console.error("Contract or accounts not initialized.");
      }
    } catch (error) {
      console.error("Error adding stock to user:", error);
    }
  };

  // Function to get user's owned stocks
  const getUserOwnedStocks = async (userId) => {
    try {
      const { contract } = state;
      if (contract) {
        const result = await contract.methods.getUserOwnedStocks(userId).call();
        console.log("User's owned stocks:", result);
        return result;
      } else {
        console.error("Contract not initialized.");
        return [];
      }
    } catch (error) {
      console.error("Error getting user's owned stocks:", error);
      return [];
    }
  };

  return (
    <EthContext.Provider value={{
      state,
      dispatch,
      createUser,
      updateUser,
      deleteUser,
      getUser,
      addStockToUser,
      getUserOwnedStocks
    }}>
      {children}
    </EthContext.Provider>
  );
}

export default EthProvider;


// import React, { useReducer, useCallback, useEffect } from "react";
// import Web3 from "web3";
// import EthContext from "./EthContext";
// import { reducer, actions, initialState } from "./state";

// function EthProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const init = useCallback(
//     async artifact => {
//       if (artifact) {
//         const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
//         const accounts = await web3.eth.requestAccounts();
//         const networkID = await web3.eth.net.getId();
//         const { abi } = artifact;
//         let address, contract;
//         try {
//           address = artifact.networks[networkID].address;
//           contract = new web3.eth.Contract(abi, address);
//         } catch (err) {
//           console.error(err);
//         }
//         dispatch({
//           type: actions.init,
//           data: { artifact, web3, accounts, networkID, contract }
//         });
//       }
//     }, []);

//   useEffect(() => {
//     const tryInit = async () => {
//       try {
//         const artifact = require("../../contracts/SimpleStorage.json");
//         init(artifact);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     tryInit();
//   }, [init]);

//   useEffect(() => {
//     const events = ["chainChanged", "accountsChanged"];
//     const handleChange = () => {
//       init(state.artifact);
//     };

//     events.forEach(e => window.ethereum.on(e, handleChange));
//     return () => {
//       events.forEach(e => window.ethereum.removeListener(e, handleChange));
//     };
//   }, [init, state.artifact]);

//   return (
//     <EthContext.Provider value={{
//       state,
//       dispatch
//     }}>
//       {children}
//     </EthContext.Provider>
//   );
// }

// export default EthProvider;
