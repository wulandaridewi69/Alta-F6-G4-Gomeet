import React, { Component } from "react";
import Input from "../components/input";
import Photo from "../assets/mentee.png";
import Button from "../components/button";
import { Modal, Box } from "@mui/material";
import { useContext, useState, useEffect } from "react";
// import { TokenContext } from '../context'

const Profile = () => {
  // const navigate = useNavigate()
  const { token, setToken } = useContext(TokenContext);

  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isAddressError, setIsAddressError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (token === "0") {
      navigate("/login");
    } else {
      fetchProfile();
    }
  }, []);

  const fetchProfile = () => {
    let myHeaders = new Headers();
    token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NTcxMzA0MDUsInVzZXJJZCI6Mzh9.mLC3L6uTx1VC8X1fA0PEoLNL70Qp75isf1_T14NFgcA";
    myHeaders.append(`Authorization`, `Bearer ${token}`);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://altaproject.online/users/profile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const structure = {
          Image: "",
          email: "",
          username: "",
          phone: "",
          address: "",
        };

        let temp_structure = { ...structure };

        temp_structure.email = result.data.email;
        temp_structure.image = result.data.image;
        temp_structure.username = result.data.username;
        temp_structure.phone = result.data.phone;
        temp_structure.address = result.data.address;

        setProfile(temp_structure);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  };

  const handleUsername = (e) => {
    const inputUsername = e.target.value;
    setUsername(inputUsername);
    isUsernameError && setIsUsernameError(false);
  };

  const handleEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    isEmailError && setIsEmailError(false);
  };

  const handlePassword = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    isPasswordError && setIsPasswordError(false);
  };

  const handlePhone = (e) => {
    const inputPhone = e.target.value;
    setPhone(inputPhone);
    isPhoneError && setIsPhoneError(false);
  };

  const handleAddress = (e) => {
    const inputAddress = e.target.value;
    setAddress(inputAddress);
    isAddressError && setIsAddressError(false);
  };

  const callSubmit = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const regUsername = /^[a-zA-Z0-9]{3,}$/g;
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/gim;
    const regPhone = /^[0-9]{10,}$/;
    let passed = 0;

    if (regUsername.test(username)) {
      setIsUsernameError(false);
      passed = passed + 1;
    } else {
      setIsUsernameError(true);
    }

    if (regEmail.test(email)) {
      passed = passed + 1;
    } else {
      setIsEmailError(true);
    }

    if (regPhone.test(phone)) {
      passed = passed + 1;
    } else {
      setIsPhoneError(true);
    }

    if (password !== "") {
      passed = passed + 1;
    } else {
      setIsPasswordError(true);
    }

    if (address !== "") {
      passed = passed + 1;
    } else {
      setIsAddressError(true);
    }

    if (passed === 5) {
      setLoading(true);

      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);

      let myHeaders = new Headers();
      myHeaders.append(`Authorization`, `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        image: "mabar.jpg",
        username: "Winda3",
        email: "winda@gmail.com",
        password: "Liberty1@",
        phone: "812345666",
        address: "Malang",
      });

      let requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://altaproject.online/users", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          alert(result.message);
        })
        .catch((error) => console.log("error", error))
        .finally(() => setLoading(false));
    }
  };

  const callDelete = (e) => {
    setModal(true);
  };

  const handleDelete = () => {
    myHeaders = new Headers();
    myHeaders.append(`Authorization`, `Bearer ${token}`);

    raw = "";

    requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://altaproject.online/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          alert(result.message);
        } else {
          alert(err);
        }
      })
      .catch((error) => {
        if (error.response) {
          navigate("/detailEvent/User Not Found");
        } else {
          alert(error);
        }
      })
      .finally(() => setLoading(false));
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setToken("0");
    localStorage.removeItem("idUser");
    navigate("/login");
  };

  console.log("ini adalah prfile", profile);
  console.log("ini adalah token", token);

  if (token !== "0") {
    if (loading) {
      return (
        <div className="h-screen w-screen flex justify-center items-center">
          <div className="h-36 w-36 animate-loading"></div>
        </div>
      );
    } else {
      return (
        // <Layout>
        <>
          <Modal open={modal} onClose={() => setModal(false)}>
            <Box className="w-1/3 min-h-1/2 translate-x-full translate-y-1/4  flex flex-col justify-center rounded-lg items-center shadow-2xl p-5 gap-3">
              <p className="text-4xl font-bold text-center my-5">
                Are you sure to delete your account ?
              </p>
              <Button
                className="bg-red-800 font-bold py-2 px-5 rounded text-black"
                onClick={() => handleDelete()}
              >
                Delete
              </Button>
            </Box>
          </Modal>
          <div className="bg-gradient-to-b from-slate-900 to-sky-600">
            <div className="pt-20">
              <h1 className="text-2xl font-bold text-center text-white">
                Profile
              </h1>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-6">
                  <image src={Photo} rounded-full />
                  <div>
                    <Button
                      className="bg-orange-600 hover:bg-orange-400 font-bold py-2 px-5 rounded text-white"
                      onClick={() => handleMyEvent()}
                    >
                      My Event
                    </Button>
                    <Button
                      className="bg-orange-600 hover:bg-orange-400 font-bold py-2 px-5 rounded text-white"
                      onClick={() => handleHystory()}
                    >
                      Hystory
                    </Button>
                  </div>
                  <Button
                    className="bg-rose-700 hover:bg-rose-400 font-bold py-2 px-5 rounded text-white"
                    onClick={() => handleDelete()}
                  >
                    Delete
                  </Button>
                </div>

                <div className="col-6">
                  <Input
                    className="text-white form w-full input pb-2"
                    onChange={(e) => handleUsername(e)}
                    label="username"
                    value={profile.username}
                    placeholder="Username"
                    onKeyDown={(e) => callSubmit(e)}
                  >
                    Username
                  </Input>
                  <br />
                  <Input
                    className="text-white form w-full input pb-2"
                    onChange={(e) => handleEmail(e)}
                    label="email"
                    value={email}
                    placeholder="Email"
                    onKeyDown={(e) => callSubmit(e)}
                  >
                    Email
                  </Input>
                  <br />
                  <Input
                    className="text-white form w-full input pb-2"
                    onChange={(e) => handlePhone(e)}
                    label="phone"
                    value={phone}
                    placeholder="Phone"
                    onKeyDown={(e) => callSubmit(e)}
                  >
                    Phone Number
                  </Input>
                  <br />
                  <Input
                    className="text-white form w-full input pb-2"
                    onChange={(e) => handleAddress(e)}
                    label="address"
                    value={address}
                    placeholder="Address"
                    onKeyDown={(e) => callSubmit(e)}
                  >
                    Address
                  </Input>
                  <br />
                  <Button
                    className="bg-orange-600 hover:bg-orange-400 font-bold py-2 px-5 rounded text-white"
                    onClick={() => handleUpdate()}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
        // </Layout>
      );
    }
  }
};

export default Profile;
