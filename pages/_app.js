import "../styles/globals.scss";

import { createContext, useEffect } from "react";
import sendDataToAPI from "@/helpers/sendDataToAPI";

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onbeforeunload = function () {
      return "Prevenir refrescar la página";
    };
  }, []);

  return (
    <UserContext.Provider value={{ sendDataToAPI }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
