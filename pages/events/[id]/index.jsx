import Button from "../../../components/button";
import { TokenContext } from "../../../utils/context";
import Layout from "../../../components/Layout";
import React, { useState, useContext, useEffect } from "react";
import { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const DetailEvent = (props) => {
  const { token } = useContext(TokenContext);
  const router = useRouter();

  const ref = useRef(null);
  const [event, setEvent] = useState({});
  const [wrongInput, setWrongInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [eventImage, setEventImage] = useState("");
  const [participants, setParticipants] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchDetailEvent();
    fetchParticipants();
    fetchComments();
  }, [router]);

  const fetchDetailEvent = () => {
    console.log("ini adalah4", router);
    let myHeaders = new Headers();
    myHeaders.append(`Authorization`, `Bearer ${token}`);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    if (router.query.id == undefined) {
      return false;
    }

    fetch(`https://altaproject.online/events/${router.query.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setEvent(result.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.status === 400) {
          navigate(`/detail/${id}/Not Found`);
        }
      })
      .finally(() => setLoading(false));
  };

  const updateQuote = (e) => {
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

  const fetchParticipants = () => {
    let myHeaders = new Headers();
    myHeaders.append(`Authorization`, `Bearer ${token}`);
    myHeaders.append(`Content-Type`, `application/json`);

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://altaproject.online/participants", requestOptions)
      .then(response => response.json())
      .then(result => {
        setParticipants(result.data);
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  }

  const handleParticipants = () => {
    let myHeaders = new Headers();
    myHeaders.append(`Authorization`, `Bearer ${token}`);
    myHeaders.append(`Content-Type`, `application/json`);

    let raw = JSON.stringify({
      "events_id": id,
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://altaproject.online/participants", requestOptions)
      .then(response => response.json())
      .then(result => {
        alert("Successfully joined event");
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  }

  const fetchComments = () => {
    let myHeaders = new Headers();
    myHeaders.append(`Authorization`, `Bearer ${token}`);

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://altaproject.online/comments", requestOptions)
      .then(response => response.json())
      .then(result => {
        setComments(result.data);
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  }

  const handleAddComments = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NTcyNDE2OTksInVzZXJJZCI6Njh9.yEvH9ZAQijxE4rkIw9SC2c2JBkvyBcc_73_oxHGOMfc");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "events_id": id,
      "description": comment,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://altaproject.online/comments", requestOptions)
      .then(response => response.json())
      .then(result => {
        alert("Successfully commented");
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  }

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
              <div >
                <Image width={300} height={400} src={event.image} />
                <map />
              </div>
            </div>
            <div className="col-6 text-white">
              <div>
                <h4 className="bold">{event.name}</h4>
              </div>
              <div>
                <h5 className="bold">Description</h5>
                <p>{event.description}</p>
              </div>
              <div>
                <h5 className="bold">Status</h5>
                <p>{event.status}</p>
              </div>
              <div>
                <h5 className="bold">Category</h5>
                <p>{event.Categorys.id}</p>
              </div>
              <div>
                <h5 className="bold">Date</h5>
                <p>{event.date}</p>
              </div>
              <div>
                <h5 className="bold">Price</h5>
                <p>{event.price}</p>
              </div>
              <div>
                <h5 className="bold">Quote</h5>
                <p>{event.quote}</p>
              </div>
              <div>
                <h5 className="bold">Address</h5>
                <p>{event.address}</p>
              </div>
              <div>
                <h5 className="bold">Link</h5>
                <p>{event.link}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-2 pt-6 text-end">
          <Link href='/receipt'>
            <Button
              className=" bg-orange-600 hover:bg-orange-400 font-bold py-2 px-5 rounded text-white"
              label="Join"
              onClick={() => handleJoin()}
            />
            </Link>
          </div>

        <hr />

        <div>
          <h1 className="text-center bold text-white">Participant</h1>
        </div>
        <div className="container">
          <div className="row>">
            <div className="col-3">
              {participants.map((participant, index) => (
                <div key={index}>
                  <Image className="rounded-full" width={100} height={100} src={participant.User.image} />
                  <p>{participant.User.username}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr />

        <div>
          <h1 className="text-center bold text-white">Comment</h1>
        </div>
        <div>
          <box>
            <p>hai</p>
          </box>
        </div>
        <div className="flex">
          <input />
          <div className="pb-2 pt-6 grid">
            <Button
              className=" bg-orange-600 hover:bg-orange-400 font-bold py-2 px-5 rounded text-white"
              label="Add Comment"
              onClick={() => handleUpdate()}
            />
          </div>
        </div>


      </Layout>
    );
  }
};
export default DetailEvent;
