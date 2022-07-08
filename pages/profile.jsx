import React, { Component } from "react";
import Input from "../components/input";
import Photo from "../assets/mentee.png";
import Button from "../components/button";
import { Modal, Box } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { TokenContext } from "../utils/context";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
    // const navigate = useNavigate()
    const { token, setToken } = useContext(TokenContext);

    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [username, setUsername] = useState("");
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
        myHeaders.append(`Authorization`, `Bearer ${token}`);

        let requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch("https://altaproject.online/users/profile", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUsername(result.data.username);
                setEmail(result.data.email);
                setPhone(result.data.phone);
                setAddress(result.data.address);
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
                image: image,
                username: username,
                email: email,
                phone: phone,
                address: address,
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
        let myHeaders = new Headers();
        myHeaders.append(`Authorization`, `Bearer ${token}`);

        let requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch("https://altaproject.online/users", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                alert(result.message);
            })
            .catch((error) => {
                if (error.response) {
                    navigate(`/login`);
                } else {
                    alert(error);
                }
            })
            .finally(() => setLoading(false));
    };

    const handleUpdate = () => {
        let myHeaders = new Headers();
        myHeaders.append(`Authorization`, `Bearer ${token}`);
        myHeaders.append(`Content-Type`, `application/json`);

        let raw = JSON.stringify({
            "image": "mabar.jpg",
            "username": "Winda3",
            "email": "winda@gmail.com",
            "password": "Liberty1@",
            "phone": "812345666",
            "address": "Malang"
        });

        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://altaproject.online/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                alert(result.message);
            })
            .catch(error => console.log('error', error));
    }

    const handleUpload = (e) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NTcyMTMyNzksInVzZXJJZCI6Njd9.cHzOSYdjhnEtK5BANMEcgV8AHWK9NDme3FYrRlDe6Yk");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "image": image,
            "username": username,
            "email": email,
            "password": password,
            "phone": phone,
            "address": address,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://altaproject.online/users", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const handleLogOut = () => {
        localStorage.removeItem("token");
        setToken("0");
        localStorage.removeItem("idUser");
        navigate("/login");
    };

    if (token !== "0") {
        if (loading) {
            return (
                <div className="h-screen w-screen flex justify-center items-center">
                    <div className="h-36 w-36 animate-loading"></div>
                </div>
            );
        } else {
            return (
                <Layout>
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
                            <div className="pt-8 pb-12">
                                <h1 className="text-2xl font-bold text-center text-white">
                                    Profile
                                </h1>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <Image className="rounded-full" src={Photo}></Image>
                                        <div className="flex text-center pl-40 pt-8 pb-4 gap-2">
                                            <Link href='/events'>
                                                <Button
                                                    className="bg-orange-600 hover:bg-orange-400 font-bold py-2 px-5 rounded text-white pb-2 pl-4"
                                                    label="My Event"
                                                // onClick={() => handleMyEvent()}
                                                />
                                            </Link>
                                            <Button
                                            className="bg-rose-700 hover:bg-rose-400 font-bold py-2 px-4 rounded text-white"
                                            label="Delete Account"
                                            onClick={() => handleDelete()}
                                        />
                                        </div>
                                        
                                    </div>

                                    <div className="col-6 ">
                                        <div className="border-slate-300">
                                            <Input
                                                className="text-white form w-full input pb-2"
                                                onChange={(e) => handleUsername(e)}
                                                label="username"
                                                value={username}
                                                placeholder="Username"
                                                onKeyDown={(e) => callSubmit(e)}
                                            >
                                                Username
                                            </Input>
                                        </div>
                                        <br />
                                        <div>
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
                                        </div>
                                        <br />
                                        <div>
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
                                        </div>
                                        <br />
                                        <div>
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
                                        </div>
                                        <br />
                                        <div>
                                            <div className="pb-2 pt-6 grid">
                                                <Button
                                                    className=" bg-orange-600 hover:bg-orange-400 font-bold py-2 px-5 rounded text-white"
                                                    label="Update"
                                                    onClick={() => handleUpdate()}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </Layout>
            );
        }
    }
};

export default Profile;
