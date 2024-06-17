import React, { useState } from "react";
import MySVG from "../images/zee5-seeklogo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCrown, faSearch, faUser, faBars, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="navbar fixed top-0 left-0 right-0 bg-black p-3 flex justify-between z-10">
            <div className="flex flex-wrap items-center ">
                <div>
                    <img className="w-1/2 h-auto" src={MySVG} alt="logo" />
                </div>
                
                <div className="text-white flex items-center">
                    <ul className="flex items-center gap-4">
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li><FontAwesomeIcon icon={faEllipsisV} className="text-white cursor-pointer" /></li>
                    </ul>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative text-gray-600 flex items-center">
                    <FontAwesomeIcon icon={faSearch} className="absolute left-3 text-gray-500" />
                    <input 
                        type="text" 
                        className="w-48 md:w-64 pl-10 pr-4 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        placeholder="Type to search" 
                    />
                </div>
                <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                <button className="hidden md:block px-4 py-2 text-white bg-[#8230C6] border-2 border-[#8230C6] rounded-md hover:bg-red-700 focus:outline-none flex items-center">
                    <FontAwesomeIcon icon={faCrown} className="mr-2" /> BUY PLAN
                </button>
                <div className="relative">
                    <FontAwesomeIcon icon={faBars} className="text-gray-500 cursor-pointer" onClick={toggleDropdown} />
                    {dropdownOpen && (
                        <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
