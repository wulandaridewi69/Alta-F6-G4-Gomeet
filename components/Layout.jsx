import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
// import Link from "next/link";

export default function Layout(props) {
  return (
    <>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    </Head>
    <div className="w-full h-screen flex flex-col overflow-auto bg-gradient-to-b from-slate-900 to-sky-600">
      <Header />
      {props.children}
      <Footer />
    </div>
    </>
  )
}
