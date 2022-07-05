import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { reduxAction } from "../redux/actions/action";
// import Link from "next/link";

import { CardEvenList } from '../components/cards';
import Poster from '../assets/poster.png'
import Input from '../components/input';

export default function Home() {
  return (
    <div>
      <Head>
        <p>ini head</p>
      </Head>
      <main>
        <CardEvenList/>
        <Input/>
        <h1>
          Hello World
        </h1>
      </main>
    </div>
  );
}
