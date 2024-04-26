"use client";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();
    // perform checks on the email and password
    router.push("/home");
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
                />
              </div>
              <div>
                {" "}
                <input
                  type="password"
                  className="m-5 p-2 text-black rounded-lg w-100 h-10"
                />
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="m-3 rounded-md p-2 bg-gray-200 "
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
