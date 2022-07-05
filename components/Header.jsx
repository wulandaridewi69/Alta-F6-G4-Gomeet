import React, { useState } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import mentee from "../assets/mentee.png";

export default function Header() {
  const [token, setToken] = useState(true);

  return (
    <nav className="sticky top-0 w-full px-2 py-2.5 bg-black flex justify-between drop-shadow-2xl">
      <div className="flex items-center font-bold text-2xl text-white">
        <Link id="to-homepage" href="/">
          GOMEET
        </Link>
      </div>
      {!token && (
        <div className="flex">
          <button className="bg-white text-pink-700 mr-2 py-1 px-3">
            Login
          </button>
          <button className="bg-white text-pink-700 mr-2 py-1 px-3">
            Register
          </button>
        </div>
      )}
      {token && (
        <div className="flex flex-row items-center justify-center ">
          <div className="text-white mr-3">
            <FaPlus />
          </div>
          <div className="mr-3">
            <Image
              src={mentee}
              alt="Picture of the author"
              width={30}
              height={30}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
