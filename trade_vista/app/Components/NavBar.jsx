import React from "react";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();

    router.push("/ml");
  }
  return (
    <>
      <nav className="flex justify-between items-center p-5 pt-0 ">
        <div className="text-[2vw]">TradeVista</div>
        <SearchBar />
        <button onClick={handleClick}>Click to use our ml model</button>
      </nav>
    </>
  );
}

export default NavBar;
