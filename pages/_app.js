import "../styles/globals.scss";

import { createContext, useEffect } from "react";
import sendDataToAPI from "@/helpers/sendDataToAPI";

export const UserContext = createContext();

let viewedInteractions = []
console.log("viewedInteractions", viewedInteractions)

function MyApp({ Component, pageProps }) {

  return (
    <UserContext.Provider value={{ sendDataToAPI, viewedInteractions }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
