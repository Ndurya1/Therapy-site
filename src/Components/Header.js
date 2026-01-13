import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contacts from './Contacts';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     
      <div className="relative">
        <header className="flex justify-between items-center pl-2 pr-2 top-0 bg-gray-800 p-3 border-lg text-white relative z-20">
          <div className="text-white font-pacifico">
            <h1>Sparkle Dry Cleaners</h1>
          </div>
          
         
          <ul className="hidden md:flex gap-10">
            <li className="flex justify-center items-center hover:bg-blue-700 px-6 rounded-lg shadow-lg hover:duration-1000 hover:shadow-blue-500 py-4">
              <Link to="/">Home</Link>
            </li>
            <li className="flex justify-center items-center  hover:bg-blue-700 px-6 rounded-lg shadow-lg hover:duration-1000 hover:shadow-blue-500 py-4">
              <a href="#about">About</a>
            </li>
            <li className="flex justify-center items-cente  hover:bg-blue-700 px-6 rounded-lg shadow-lg hover:duration-1000 hover:shadow-blue-500 py-4">
              <a href="#services">Services</a>
            </li>
            <li className="flex justify-center items-center  hover:bg-blue-700 px-6 rounded-lg shadow-lg hover:duration-1000 hover:shadow-blue-500 py-4">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="flex justify-center items-center  hover:bg-blue-700 px-6 rounded-lg shadow-lg hover:duration-1000 hover:shadow-blue-500 py-4">
              <a href="#gallery">Gallery</a>
            </li>
            <li className=" pl-4 pr-4 p-2  border border-gray-300  bg-blue-700 px-6 rounded-lg shadow-lg duration-1000 hover:shadow-blue-500 py-4">
              <a href="#contacts">Contacts</a>
            </li>
          </ul>

        
          <div
            className="flex md:hidden justify-center items-center cursor-pointer border rounded-sm border-gray-400/50 px-2 py-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>
        </header>

      
        <ul
          className={`
            md:hidden 
            flex flex-col 
            items-center 
            text-center
            absolute 
            top-full 
            left-0 
            w-full 
            bg-slate-800 
            text-white 
            p-4 
            gap-3 
            transition-all duration-300 ease-in-out
            z-10
            ${menuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-5 pointer-events-none"}
          `}
        >
          <Link
            to="/"
            className="hover:bg-gray-700 w-full py-2 rounded-lg shadow-md hover:shadow-blue-400"
            onClick={() => setMenuOpen(false)} 
          >
            Home
          </Link>

          <a
            className="hover:bg-gray-700 w-full py-2 rounded-lg shadow-md hover:shadow-blue-400"
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            className="hover:bg-gray-700 w-full py-2 rounded-lg shadow-md hover:shadow-blue-400"
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            className="hover:bg-gray-700 w-full py-2 rounded-lg shadow-md hover:shadow-blue-400"
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            className="hover:bg-gray-700 w-full py-2 rounded-lg shadow-md hover:shadow-blue-400"
            href="#gallery"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            className="hover:bg-gray-700 w-full py-2 rounded-lg shadow-md hover:shadow-blue-400"
            href="#contacts"
            onClick={() => setMenuOpen(false)}
          >
            Contacts
          </a>
        </ul>
      </div>
    </>
  );
}