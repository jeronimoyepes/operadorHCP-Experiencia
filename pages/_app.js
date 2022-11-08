import "../styles/globals.scss";

import { createContext } from "react";
import generateGUID from "../helpers/generateGUID";

export const UserContext = createContext();

const userHash = generateGUID();

function sendDataToAPI(dataToSend) {
  const allData = { ...dataToSend, user_id: userHash, date: Date.now() };
  console.log(allData);
  // async () => {
  //   const response = await fetch(`/api/captureData`, {
  //     body: allData,
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (!response.ok) {
  //     return;
  //     // throw new Error(`Error: ${response.status}`);
  //   }

  //   const user = await response.json();
    
  //   return user;
  // };
}

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ sendDataToAPI }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
