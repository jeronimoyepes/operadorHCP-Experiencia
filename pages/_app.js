import "../styles/globals.scss";

import { createContext, useEffect } from "react";
import generateGUID from "../helpers/generateGUID";

import { durationMinutes } from "../helpers/experienceDuration";

export const UserContext = createContext();

const userHash = generateGUID();

function sendDataToAPI(dataToSend) {
  const allData = {
    ...dataToSend,
    user_id: userHash,
    date: Date.now(),
    totalExperienceTime: durationMinutes,
  };
  const sendData = async () => {
    const response = await fetch(`/api/captureData`, {
      body: JSON.stringify(allData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return console.log("error al enviar datos");
    }

    const user = await response.json();

    return user;
  };
  sendData()
}

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
