import { useState } from 'react';
import Link from 'next/link';
import CustomButton from '../components/CustomButton';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (token !== "0") {
            router.push("/profile");
        } else {
            if (email && password) {
                setDisabled(false);
            } else {
                setDisabled(true);
            }
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
        fetch(
            "https://alta-kitchen-sink.herokuapp.com/api/v1/login",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                const { code, message, data } = result;
                if (code === 200) {
                    const { token } = data;
                    localStorage.setItem("token", token);
                    setToken(token);
                    router.push("/profile");
                }
                alert(message);
            })
            .catch((err) => {
                alert(err.toString());
            })
            .finally(() => setLoading(false));
    };



    return (
        <div className='w-full h-screen overflow-auto flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-sky-600'>
            <div className='bg-white/30 w-1/2 h-full flex flex-col justify-center items-center'>
                <h1 className='font-bold lg:text-5xl md:text-4xl text-4xl text-white '>GOMEET</h1>
                <div className='flex flex-col justify-center items-center'>
                    <form method='post' className='flex flex-col lg:space-y-4 md:space-y-3 space-y-2'>
                        <div className='text-white text-2xl font-bold mb-8'>Login</div>
                        <div>
                            <input name='email' className='input-form' type='email' placeholder='Email' />
                        </div>
                        <div>
                            <input name='password' className='input-form' type='password' placeholder='Password' />
                        </div>
                    </form>
                    <Link href={'/'}>
                        <CustomButton
                            id="btn-login"
                            label="Login"
                            loading={loading || disabled}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;