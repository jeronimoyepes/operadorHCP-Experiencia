import "../styles/globals.scss";

import { createContext } from "react";

import generateGUID from "../helpers/generateGUID";
import { durationMinutes } from "../helpers/experienceDuration";

export const UserContext = createContext();

let viewedInteractions = [];

let userHash = generateGUID();

function MyApp({ Component, pageProps }) {

  function sendDataToAPI(dataToSend) {

    const today = new Date(Date.now());

    const allData = {
      ...dataToSend,
      user_id: userHash,
      date: today.toString(),
      totalExperienceDuration: durationMinutes * 60,
    };

    console.log("ENVIANDO", allData);

    const sendData = async () => {
      const response = await fetch(`/api/captureData`, {
        body: JSON.stringify(allData),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return console.log("error al enviar datos", response);
      }

      const user = await response.json();

      return user;
    };
    sendData();
  }

  return (
    <UserContext.Provider value={{ sendDataToAPI, viewedInteractions }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
