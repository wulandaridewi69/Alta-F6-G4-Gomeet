import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { TokenContext } from "../utils/context";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";

const Login = () => {
  const router = useRouter();
  const { token, setToken } = useContext(TokenContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!token === "0") {
      router.push("/");
    }
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [token, email, password]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("https://altaproject.online/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message, data, token } = result;
        if (message === "success") {
          localStorage.setItem("token", token);
          setToken(token);
          router.push("/");
        }
        alert(message);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full h-screen overflow-auto flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-sky-600">
      <div className="bg-white/30 lg:w-1/2 md:w-[60%] w-[95%] h-full flex flex-col items-center justify-evenly">
        <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-white">
          GOMEET
        </h1>
        <div className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">Login</div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="space-y-4 text-white flex flex-col w-1/2"
        >
          <Input
            className="bg-white/30 w-full"
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="bg-white/30 w-full"
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center">
            <CustomButton
              className={`bg-[#E49318] text-white font-bold py-2 w-24 rounded-lg ${loading && "bg-orange-200 cursor-not-allowed"
                }`}
              id="btn-login"
              label="Login"
              loading={loading || disabled}
              type="submit"
            />
          </div>
          <h1 className="flex justify-center">or</h1>
          <a href={"/register"} className="underline flex justify-center">
            Create Account
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
