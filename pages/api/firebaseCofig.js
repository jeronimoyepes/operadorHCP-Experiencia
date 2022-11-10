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

const fireBaseCreds = JSON.parse(process.env.FIREBASE_CREDENTIALS);
const FBcollection = process.env.FIREBASE_COLLECTION;

// Inicializar Firebase
const app = initializeApp(fireBaseCreds);
const db = getFirestore(app);

// Función para escribir datos a Firebase, toma de argumento un json con la información a escribir y el nombre de la colección
const writeToFirebase = (json) => {
  // Seleccionar la colección de firebase donde se escribirán los datos
  const dbCollection = collection(db, FBcollection);

  // Función de firebase, toma la colección a la que se escribirá y el json con los datos
  return addDoc(dbCollection, json);
};

// Función para leer de Firebase en una fecha especifica y escribir csv
const readFromFirebase = () => {
  // Query es una función de firebase, recibe la coleción y los filtros. Crea un query para firebase
  const readQuery = collection(db, FBcollection)

  // getDocs recibe el objeto query
  return new Promise((resolve, reject) => {
    getDocs(readQuery).then((doc) => {
      // ALmacenar los documentos que recibimos de firebase
      const collecionObject = doc.docs;
  
      // Iniciar un array donde se almacenaran solo los datos de los documentos
      const documents = [];
  
      // Iterar sobre los documentos y agregar los datos de dichos documentos al nuevo array
      collecionObject.forEach((element) => {
        documents.push(element.data());
      });
      documents.length == 0 && reject("vacío")
      resolve(documents)
    });
  })
};

export { writeToFirebase, readFromFirebase };
