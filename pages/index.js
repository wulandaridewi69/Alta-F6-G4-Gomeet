import React from "react";
import Input from '../components/input'
import Profile from "./profile";
import Photo from '../assets/mentee.png'
import Button from '../components/button'
import { Modal, Box } from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import MyEvent from './myEvent'
import DetailEvent from '../pages/detailEvent'

import Layout from "../components/Layout";
import Category from "../components/Category";
import { CardEvenList } from "../components/cards";

export default function homepage() {
  return (
      <Layout>
      <main>
        <CardEvenList/>
        <Input/>
        <MyEvent/>
        <Profile/>
        <DetailEvent/>

        <h1>
          Hello World
        </h1>
      </main>
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
  );
}
