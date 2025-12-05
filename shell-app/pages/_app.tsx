import { useEffect } from "react";
import { Provider } from "jotai";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme === "dark" || (!theme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
