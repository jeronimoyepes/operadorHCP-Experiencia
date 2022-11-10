import styles from "./admin.module.scss";
import * as XLSX from "xlsx";
import { useState } from "react";

export default function Admin() {
  const [dataIsFetching, setdataIsFetching] = useState(false);

  const downloadData = async () => {
    setdataIsFetching(true);

    const response = await fetch(`/api/downloadDB`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setdataIsFetching(false);
      return console.log("error al enviar datos", response);
    }

    const data = await response.json();

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "DatosHCP");
    XLSX.writeFile(wb, "Asistencia.xlsx");
    setdataIsFetching(false);
  };

  return (
    <div className={styles.container}>
      <h1>Veo que eres un directivo de la HCP</h1>
      <button onClick={downloadData}>
        {!dataIsFetching ? "Descargar reporte" : "[Cargando]"}
      </button>
    </div>
  );
}
