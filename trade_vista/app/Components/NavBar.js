import React from "react";
import SearchBar from "./SearchBar";
function NavBar() {
    return (
        <nav className="flex justify-between items-center p-5 pt-0 h-[5vw]">
            <div className="text-[2vw]">TradeVista</div>
            <SearchBar/>
        </nav>
    );
}

export default NavBar;
