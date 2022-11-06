import "../styles/globals.scss";

import { createContext, useEffect } from "react";
import generateGUID from "./api/generateGUID";

export const UserContext = createContext();

const userHash = generateGUID();

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ userHash }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
