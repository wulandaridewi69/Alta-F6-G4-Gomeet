import React from "react";
import Layout from "../components/Layout";
import Category from "../components/Category";
import { CardEvenList } from "../components/cards";

export default function homepage() {
  return (
    <div>
      <Layout>
        <Category />
        <div className="grid grid-cols-5 gap-2 mt-5">
          <CardEvenList />
          <CardEvenList />
          <CardEvenList />
          <CardEvenList />
          <CardEvenList />
          <CardEvenList />
          <CardEvenList />
          <CardEvenList />
          <CardEvenList />
          <CardEvenList />
        </div>
      </Layout>
    </div>
  );
}
