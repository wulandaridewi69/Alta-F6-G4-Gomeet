import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import CustomButton from "../components/CustomButton";
import Input from "../components/input";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (username && email && password && phone && address) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [username, email, password, phone, address]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const body = {
      username,
      email,
      password,
      phone,
      address,
      image: "img.jpg",
    };

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      body: JSON.stringify(body),
      redirect: "follow",
      headers: headers,
    };

    const url = "https://altaproject.online/users";
    fetch(url, requestOptions)
      .then((response) => {
        const { data } = response;
        response.json();
        if (response.status == 200) {
          alert("Registrasion Success");
          router.push("/login");
        }
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 to-sky-600 w-full h-screen overflow-auto">
      <div className="flex items-center justify-center">
        <div className="bg-slate-400 opacity-100 h-full w-1/2">
          <div className="text-7xl font-bold text-white flex items-center justify-center mt-10">
            GOMEET
          </div>
          <div>
            <div className="text-3xl font-bold text-white flex flex-col items-center justify-center m-10">
              SIGN UP
            </div>
            <div className="mb-20">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="flex flex-col items-center justify-center mb-50">
                  <Input
                    type="text"
                    id="username"
                    label="username"
                    className="mb-4 w-3/4 h-1/4 rounded-lg bg-white"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    type="email"
                    id="email"
                    label="email"
                    className="mb-4 w-3/4 h-1/4  rounded-lg bg-white"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    id="password"
                    label="password"
                    className="mb-4 w-3/4 h-1/4  rounded-lg bg-white"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <Input
                    type="tel"
                    id="phone"
                    label="phone number"
                    className="mb-4 w-3/4 h-1/4  rounded-lg bg-white"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Input
                    type="text"
                    id="address"
                    label="address"
                    className="mb-4 w-3/4 h-1/4  rounded-lg bg-white"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <CustomButton
                    label="Sign Up"
                    id="btn-signup"
                    loading={loading || disabled}
                  />
                </div>
              </form>
              <h1 className="flex justify-center mt-3">or</h1>
              <Link href={"/login"}>
                <a className="underline flex justify-center mt-3">Login</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
