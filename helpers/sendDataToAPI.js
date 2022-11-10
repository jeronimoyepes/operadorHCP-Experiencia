import generateGUID from "../helpers/generateGUID";
import { durationMinutes } from "../helpers/experienceDuration";

export default function sendDataToAPI(dataToSend) {
  const userHash = generateGUID();

  const allData = {
    ...dataToSend,
    user_id: userHash,
    date: Date.now(),
    totalExperienceDuration: durationMinutes * 60,
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
      return console.log("error al enviar datos", response);
    }

    const user = await response.json();

    return user;
  };
  sendData();
}
