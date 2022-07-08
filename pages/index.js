import Input from "../components/input";
import Profile from "./profile";
import Photo from '../assets/mentee.png'
import Button from '../components/button'
import { Modal, Box } from '@mui/material'
import React, { useContext, useState, useEffect } from 'react'
import MyEvent from './myEvent'
import DetailEvent from './[id]'

import Layout from "../components/Layout";
import Category from "../components/Category";
import { CardEvenList } from "../components/cards";

export default function Homepage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const fetchAllProduct = async () => {
    const res = await fetch(
      "https://altaproject.online/events",
      requestOptions
    );
    const response = await res.json();
    await setData(response.data);
    setLoading(false);
  };

  return (
    <>
      {!loading && (
        <div>
          <Layout>
            <Category />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-5 justify-center">
              {data
                .map((item) => (
                  <CardEvenList
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.name}
                    Date={item.date}
                    location={item.address}
                    price={item.price}
                    quota={item.quota}
                    statusEvent={item.status}
                  />
                ))
                .reverse()}
            </div>
          </Layout>
        </div>
      )}
    </>
  );
}
