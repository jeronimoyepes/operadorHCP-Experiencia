import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import StationsRenderer from "@/components/stations/renderer";

export default function MainExperience() {
  const [currentStation, setCurrentStation] = useState("artic");

  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key;
      if (key == "q") {
        setCurrentStation("artic");
      }
      if (key == "w") {
        setCurrentStation("submarine");
      }
      if (key == "e") {
        setCurrentStation("lunar");
      }
    }
    window.addEventListener("keyup", handleKeyDown);
  }, []);
  return (
    <Layout title={"Supervisión"}>
      {<StationsRenderer currentStation={currentStation} />}
    </Layout>
  );
}
