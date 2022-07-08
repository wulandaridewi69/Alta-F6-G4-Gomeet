import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CardEvenList = (props) => {
  return (
    <div>
      <div className="max-w-sm border-gray-200 p-12">
        <div className="h-64 flex justify-center cursor-pointer">
          <Link href={`/${props.id}`}>
            <Image 
              src={props.image}
              className="h-full"
              alt=""
              width="150%"
              height="50%"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="p-2 pb-0">
            <div className="font-bold text-white/95">{props.title}</div>
            <div className="text-white/95">{props.Date}</div>
            <div className="text-white/95">{props.location}</div>
            <div className="font-bold flex justify-between text-white/95">
              Rp {props.price}
            </div>
            <div className="font-bold flex justify-between text-white/95">
              {props.quota}
            </div>
            <div className="text-white/95 mb-2">{props.statusEvent}</div>
          </div>
        </div>
      </div>

      <div>
        {props.edit && (
          <div className="flex my-2 px-2">
            <button
              className="w-full bg-teal-600  px-4 text-white font-bold rounded"
              onClick={props.edit}
            >
              Edit
            </button>
          </div>
        )}
        {props.delete && (
          <div className="flex px-2">
            <button
              className="w-full bg-red-800  px-4 text-white font-bold rounded"
              onClick={props.delete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
