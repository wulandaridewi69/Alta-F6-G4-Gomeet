import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import CustomButton from "../components/CustomButton";
import Input from "../components/Input";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (email && password) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [email, password]);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const body = {
            email,
            password,
        };

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        var requestOptions = {
            method: "POST",
            body: JSON.stringify(body),
            redirect: "follow",
            headers: headers,
        };

        const url = "https://altaproject.online/login";
        fetch(url, requestOptions)
            .then((response) => {
                const { data } = response;
                response.json();
                if (response.status == 200) {
                    alert("Login Success");
                    router.push("/");
                }
            })
            .catch((err) => {
                alert(err.toString());
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="w-full h-screen overflow-auto flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-sky-600">
            <div className="bg-white/30 w-1/2 h-full flex flex-col items-center justify-evenly">
                <h1 className="font-bold lg:text-5xl md:text-4xl text-7xl text-white">
                    GOMEET
                </h1>
                <div className="text-white text-4xl font-bold">Login</div>
                <form onSubmit={(e) => handleSubmit(e)} className="space-y-4 text-white flex flex-col w-1/2">
                    <Input
                        className='bg-white/30 w-full'
                        type="email"
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <Input
                        className='bg-white/30 w-full'
                        type="password"
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)} />
                    <div className="flex justify-center">
                        <Link href={""}>
                            <CustomButton
                                className={`bg-[#E49318] text-white font-bold py-2 w-24 rounded-lg ${loading && "bg-orange-200 cursor-not-allowed"
                                    }`}
                                id="btn-login"
                                label="Login"
                                loading={loading || disabled} />
                        </Link>
                    </div>
                    <h1 className="flex justify-center">or</h1>
                    <a href={"/register"} className="underline flex justify-center">
                        Create Account
                    </a>
                </form>
            </div>
        </div>
    );
}

export default Login;
