import { useState, useMemo, useEffect } from "react";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { TokenContext } from "../utils/context";

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);

  useEffect(() => {
    const getToken = localStorage.getItem("token") || "0";
    setToken(getToken);
  }, [token]);

  if (token) {
    return (
      <TokenContext.Provider value={jwtToken}>
        <Component {...pageProps} />
      </TokenContext.Provider>
    );
  }
}

export default MyApp;
