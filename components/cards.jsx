import React, { Component } from "react";
import Poster from "../assets/poster.png";
import Image from "next/image";
// import Date from '../components/date'

export const CardEvenList = (props) => {
  return (
    <div>
      <div className="max-w-sm border-gray-200 p-11">
        <div
          className="h-64 flex justify-center cursor-pointer"
          onClick={() => props.goToDetail()}
        >
          <Image src={Poster} className="h-full" alt="" />
        </div>
        <div className="flex justify-center">
          <div className="p-2 pb-0">
            <div className="font-bold">{props.title} Event Web Progamming</div>
            <div className="flex">
              <div className="text-slate-500 mb-2 mr-3">
                {props.Date} 21 MEI 2020
              </div>
              <div className="text-slate-500 mb-2">{props.location} Jogja</div>
            </div>
            <div className="font-bold flex justify-between">
              Price {`$ ${parseInt(props.payment).toLocaleString()}`} 100000
            </div>
            <div className="font-bold flex justify-between">
              Quota {props.quota} 100
            </div>
            <div className="text-slate-500 mb-2">
              Offline {props.statusEvent}{" "}
            </div>
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
