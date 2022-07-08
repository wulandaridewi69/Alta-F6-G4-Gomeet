/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";

import Input from "../components/Input";
import Layout from "../components/Layout";
import { TokenContext } from "../utils/context";
import CustomButton from "../components/CustomButton";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const createEvent = () => {
  const Maps = dynamic(() => import("../components/Maps"), { ssr: false });

  const { token, setToken } = useContext(TokenContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [quota, setQuota] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const [location, setLocation] = useState({
    lng: -6.988567492671183,
    lat: 110.42104354029307,
  });

  useEffect(() => {
    if (!token === "0") {
      router.push("/");
    }
    if (name && date && address && price && quota && description && status) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [
    token,
    name,
    date,
    address,
    price,
    quota,
    description,
    category,
    status,
    link,
  ]);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      name,
      date,
      address,
      price: parseInt(price),
      quota: parseInt(quota),
      link,
      longtitude: location.lng.toString(),
      latitude: location.lat.toString(),
      description,
      category,
      status,
      quote: 4342432,
      image: "Gambar.jpg",
      categorys_id: 1,
    };
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };
    fetch("https://altaproject.online/events", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message, status } = result;
        if (message === "success") {
          router.push("/");
        }
        alert(message);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => router.push("/"));
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSelect = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Layout>
      <div className="text-4xl text-white font-bold flex justify-center my-10">
        Create Event
      </div>
      <div className="w-full flex mb-10">
        <div className="w-[40%] bg-white/30 my-10 m-auto rounded-md shadow-lg shadow-black/50">
          <form onSubmit={(e) => handleSubmit(e)} className="my-10 ">
            <div className="space-y-3 flex flex-col w-[90%] m-auto">
              <Input
                className="bg-white/30"
                id="name"
                type="text"
                label="Name Event"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                className="bg-white/30"
                id="date"
                type="text"
                label="Date"
                onChange={(e) => setDate(e.target.value)}
              />
              <Input
                className="bg-white/30"
                id="address"
                type="text"
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                className="bg-white/30"
                id="price"
                type="text"
                label="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <Input
                className="bg-white/30"
                id="quota"
                type="text"
                label="Quota"
                onChange={(e) => setQuota(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel id="Category">Category</InputLabel>
                <Select
                  id="category"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                  className="bg-white/30"
                >
                  <MenuItem value="Education">Education</MenuItem>
                  <MenuItem value="Music">Music</MenuItem>
                  <MenuItem value="IT">IT</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="Status">Status</InputLabel>
                <Select
                  id="status"
                  value={status}
                  label="Status"
                  onChange={handleSelect}
                  className="bg-white/30"
                >
                  <MenuItem value="offline">Offline</MenuItem>
                  <MenuItem value="online">Online</MenuItem>
                </Select>
              </FormControl>
              <Input
                className="bg-white/30"
                id="link"
                type="text"
                label="Link Meet"
                onChange={(e) => setLink(e.target.value)}
              />
              <Input
                className="bg-white/30"
                id="description"
                type="text"
                label="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-10">
              <CustomButton
                className={`bg-[#E49318] text-white font-bold py-2 w-1/2 rounded-lg ${
                  loading && "bg-orange-200 cursor-not-allowed"
                }`}
                id="btn-create"
                label="Create"
                loading={loading || disabled}
                type="submit"
              />
            </div>
          </form>
        </div>
        <div className="w-[55%] flex flex-col justify-evenly items-center">
          <input type="file" multiple name="image-upload" id="img-upload" />
          <div className="text-white">
            <Maps
              center={location}
              location={location}
              draggable={true}
              title="My Map"
              onDragMarker={(e) => {
                console.log("e", e);
                let loc = { lat: e.lng, lng: e.lat };
                setLocation(loc);
              }}
            />
            {"lng: " + location.lng}
            <br />
            {"lat: " + location.lat}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default createEvent;
