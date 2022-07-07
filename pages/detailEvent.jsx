import Button from "../components/button";
import { TokenContext } from "../context";
import Layout from "../components/Layout";
import React, { useState, useContext, useEffect } from "react";
import { useRef } from "react";

const DetailEvent = (props) => {
  const { token } = useContext(TokenContext);

  const ref = useRef(null);
  const [event, setEvent] = useState("");
  const [wrongInput, setWrongInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetchDetailEvent();
  }, []);

  const fetchDetailEvent = (id) => {
    let myHeaders = new Headers();
    myHeaders.append(`Authorization`, `Bearer ${token}`);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`https://altaproject.online/events/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setEvent(result);
        setLoading(false);
      })
      .catch((error) => {
        if (error.status === 400) {
          navigate(`/detail/${id}/Not Found`);
        }
      })
      .finally(() => setLoading(false));
  };

  const updateQty = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setQty(e.target.value);
      setWrongInput("");
    }
  };

  const handleJoin = () => {
    setLoading(true);
    // method post
  };

  const addReceipt = () => {
    if (token === "0") {
      alert("Please login to join event");
    } else if (qty > parseInt(event.stock) || qty < 1) {
      setWrongInput("Incorrect input Please check again");
      ref.current.focus();
    } else {
      handleJoin();
      setWrongInput("");
    }
  };

  const updateReceipt = (e) => {
    if (token === "0") {
      navigate("/login");
    }
    console.log("update receipt");
    navigate("/receipt");
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-36 w-36 rounded-full bg-teal-600 animate-bounce"></div>
      </div>
    );
  } else {
    return (
      <Layout>
        <div>
          <h1>Detail Event</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div>
                <image
                  src={
                    event.image_url === ""
                      ? "https://storage.googleapis.com//event-gomeet.png"
                      : ""
                  }
                />
                <map />
              </div>
            </div>
            <div className="col-6">
              <div>
                <h4>{props.title}</h4>
              </div>
              <div>
                <h5>Description</h5>
                <p>{props.description}</p>
              </div>
              <div>
                <h5>Status</h5>
                <p>{props.status}</p>
              </div>
              <div>
                <h5>Category</h5>
                <p>{props.category}</p>
              </div>
              <div>
                <h5>Date</h5>
                <p>{props.date}</p>
              </div>
              <div>
                <h5>Price</h5>
                <p>{props.price}</p>
              </div>
              <div>
                <h5>Quota</h5>
                <p>{props.quota}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};
export default DetailEvent;
