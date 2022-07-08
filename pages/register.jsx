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
    // <div className="w-full h-screen overflow-auto flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-sky-600">
    //   <div className="bg-white/30 lg:w-1/2 md:w-[60%] w-[95%] h-full flex flex-col items-center justify-evenly">
    //     <div className="text-7xl font-bold text-white mt-20">GOMEET</div>
    //     <div>
    //       <div className="text-4xl font-bold text-white flex flex-col items-center justify-center m-10">
    //         SIGN UP
    //       </div>
    //       <div className="mb-20">
    //         <form onSubmit={(e) => handleSubmit(e)}>
    //           <div className="flex flex-col items-center">
    //             <Input
    // type="text"
    // id="username"
    // label="username"
    //               className=" w-3/4  rounded-lg bg-white/30"
    //               onChange={(e) => setUsername(e.target.value)}
    //             />
    //             <Input
    //               type="email"
    //               id="email"
    //               label="email"
    //
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //             <Input
    //               type="password"
    //               id="password"
    //               label="password"
    //               className=" w-3/4 rounded-lg bg-white/30"
    //               onChange={(e) => setPassword(e.target.value)}
    //             />

    //             <Input
    //               type="tel"
    //               id="phone"
    //               label="phone number"
    //               className=" w-3/4  rounded-lg bg-white/30"
    //               onChange={(e) => setPhone(e.target.value)}
    //             />
    //             <Input
    //               type="text"
    //               id="address"
    //               label="address"
    //               className="mb-4 w-3/4 h-1/4  rounded-lg bg-white/30"
    //               onChange={(e) => setAddress(e.target.value)}
    //             />
    // <CustomButton
    //   label="Sign Up"
    //   id="btn-signup"
    //   loading={loading || disabled}
    //   className={`bg-[#E49318] text-white font-bold py-2 px-4 rounded-lg ${
    //     loading && "bg-orange-200 cursor-not-allowed"
    //   }`}
    // />
    //           </div>
    //         </form>
    //         <h1 className="flex justify-center mt-3">or</h1>
    //         <Link href={"/login"}>
    //           <a className="underline flex justify-center mt-3">Login</a>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-screen overflow-auto flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-sky-600">
      <div className="bg-white/30 lg:w-1/2 md:w-[60%] w-[95%] h-full flex flex-col items-center justify-evenly">
        <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-white">
          GOMEET
        </h1>
        <div className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">
          Sign Up
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="space-y-4 text-white flex flex-col w-1/2"
        >
          <Input
            className="bg-white/30 w-full"
            type="text"
            label="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            className="bg-white/30 w-full"
            type="text"
            label="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            className="bg-white/30 w-full"
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            className="bg-white/30 w-full"
            type="tel"
            label="phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <Input
            className="bg-white/30 w-full"
            type="text"
            label="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="flex justify-center">
            <CustomButton
              label="Sign Up"
              id="btn-signup"
              loading={loading || disabled}
              className={`bg-[#E49318] text-white font-bold py-2 px-4 rounded-lg ${
                loading && "bg-orange-200 cursor-not-allowed"
              }`}
            />
          </div>
          <h1 className="flex justify-center">or</h1>
          <a href={"/login"} className="underline flex justify-center">
            Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
