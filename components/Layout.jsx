import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto bg-gradient-to-b from-slate-900 to-sky-600">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
