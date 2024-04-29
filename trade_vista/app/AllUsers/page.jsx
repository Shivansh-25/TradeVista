"use client";
import React from 'react'
import { userInstance, getAcDetails } from "../../lib/apg";
import { useEffect, useState } from "react";

const page = () => {

  const [userContract, setUserContract] = useState();
  const [userData, setUserData] = useState();
  const [balance, setBalance] = useState();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user instance and set contract
        const contract = await userInstance();
        setUserContract(contract);

        // Fetch account details
        const props = await getAcDetails();
        setBalance(props.props.balance);
        setAccounts(props.props.accounts);

        // Fetch all users
        const users = await getAllUsers(contract);
        setAllUsers(users);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData()
  }, []);

  async function readData(id){
    const user = await userContract.methods.getUser(id).call();
    setUserData(user)
    return user;
  }

  function handleSubmit(e){
    e.preventDefault();
    const userId = parseInt(document.getElementById('id').value)
    readData(userId).then((user) => {
      console.log('User Data:', user);
      // Perform any additional actions with the user data
    })

  }

  return (
    <div>
        <div><input type="number" name="" id="id" className='text-black' placeholder='Enter Id' /></div>
        <button onClick={handleSubmit}>submit</button>

        {
            userData && (
            <div>
                <h2>User Data</h2>
                <p>Name: {userData[1]}</p>
                <p>Email: {userData[2]}</p>
            </div>
        )
      }

    </div>
  )
}

export default page