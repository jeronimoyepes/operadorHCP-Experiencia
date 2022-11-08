import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  where,
  query,
} from "firebase/firestore";

const fireBaseCreds = JSON.parse(process.env.FIREBASE_CREDENTIALS)

// Inicializar Firebase
const app = initializeApp(fireBaseCreds);
const db = getFirestore(app);

// Función para escribir datos a Firebase, toma de argumento un json con la información a escribir y el nombre de la colección
const writeToFirebase = (json) => {
  // Seleccionar la colección de firebase donde se escribirán los datos
  const dbCollection = collection(db, "interaction_capture");

  // Función de firebase, toma la colección a la que se escribirá y el json con los datos
  return addDoc(dbCollection, json);
};

export { writeToFirebase };
