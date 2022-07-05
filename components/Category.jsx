import React from "react";

export default function Category() {
  return (
    <div className="flex justify-evenly text-white mt-5">
      <button className="bg-orange-500 rounded-lg w-24">All</button>
      <button className="bg-orange-500 rounded-lg w-24">Music</button>
      <button className="bg-orange-500 rounded-lg w-24">Education</button>
      <button className="bg-orange-500 rounded-lg w-24">IT</button>
    </div>
  );
}
