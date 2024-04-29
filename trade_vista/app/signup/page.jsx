"use client";

import { useRouter } from "next/navigation";
import { stockInstance, userInstance, getAcDetails } from "../../lib/apg";
import { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();

  const [userContract, setUserContract] = useState();
  const [stockContract, setStockContract] = useState();
  
  const [balance, setBalance] = useState();
  const [accounts, setAccounts] = useState([]);

  useEffect(()=>{
    
    stockInstance().then((contract)=>{
      setStockContract(contract)
    })

    userInstance().then((contract)=>{
      setUserContract(contract);
    })

    getAcDetails().then(( props ) => {
      setBalance(props.props.balance)
      setAccounts(props.props.accounts)
      // console.log(props.props.balance)
    })
  
  }, [])

  function handleLogin(e) {
    e.preventDefault();
    // perform checks on the email and password
    let email = document.querySelector('input[type="email"]').value;
    let name = document.querySelector('input[type="text"]').value;

    userContract.methods.createUser(name,email).send({from: accounts[0], gas: '6721975'})

    console.log("Account Created Successfully",email, name);

    // router.push("/home");  
  }

  function handleClick(e) {
    e.preventDefault();

    router.push("/");
  }
  return (
    <>
      <div className=" p-10">
        <div className="flex flex-col items-center justify-center">
          <p>Create an account  </p>
          <div>
            <form className="flex flex-col justify-center items-centter">
              <div>
                <input
                  type="email"
                  className="m-5 p-2 text-black rounded-lg w-100 h-10"
                  placeholder="Enter Email Here"
                />
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  className="m-5 p-2 text-black rounded-lg w-100 h-10"
                  placeholder="Enter Name Here"
                />
              </div>
              <div>
                {" "}
                <input
                  type="password"
                  className="m-5 p-2 text-black rounded-lg w-100 h-10"
                  placeholder="Enter Password Here"
                />
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="m-3 rounded-md p-2 bg-gray-200 border border-white"
              >
               Sign in 
              </button>
            </form>
          </div>
          <button onClick={handleClick}>Log in instead </button>
        </div>
      </div>
    </>
  );
};

export default Login;
