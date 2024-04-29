// pages/index.js
import web3 from './web3';
import StocksContract from '../contracts/StocksContract.json'
import UsersContract from '../contracts/UsersContract.json'

export async function getAcDetails() {
 const accounts = await web3.eth.getAccounts();
 const balance = await web3.eth.getBalance(accounts[0]);
 return {
    props: {
      balance: web3.utils.fromWei(balance, 'ether'),
      accounts: accounts
    }
 };
}

export async function stockDeployedNetwork() {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = StocksContract.networks[networkId];
  return deployedNetwork;
}

export async function userDeployedNetwork() {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = UsersContract.networks[networkId];
  return deployedNetwork;
}

export async function stockInstance(){
  const deployedNetwork = await stockDeployedNetwork();
  const contract = new web3.eth.Contract(StocksContract.abi,deployedNetwork.address)
  return contract;
}

export async function userInstance(){
  const deployedNetwork = await userDeployedNetwork();
  const contract = new web3.eth.Contract(UsersContract.abi,deployedNetwork.address)
  return contract;
}

export default function Home({ balance, accounts }) {
  return (
     <div>
       <h1>Balance: {balance} ETH</h1>
       {
         accounts.map((ac, index) => (
           <div key={index}>
             Account Address: {ac}<br />
           </div>
         ))
       }
     </div>
  );
 }
