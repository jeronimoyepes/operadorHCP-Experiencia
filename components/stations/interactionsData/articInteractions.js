const articInteractions = [
  {
    id: 0,
    title: "Presentación Elizabeth Dijkstra a operador de la H.C.P.",
    type: "text",
    body: "Hola operador, mi nombre es Elizabeth Dijkstra y seré la investigadora encargada de reportar los hallazgos de nuestra base en el Ártico. Soy bióloga especialista en ecología y biología marina, líder del laboratorio de investigación desde hace 8 meses, y estoy a cargo de un equipo de profesionales altamente capacitados según lo indicado en el reporte de ingreso, sobre esto aún albergo mis dudas. Espero poder contar con ustedes para llevar a cabo mi... digo, nuestras investigaciones de manera exitosa.",
    imagePath: "",
    sequence: [],
    actions: [
      {
        name: "Saludar",
        response: "Un saludo cordial ha sido enviado.",
      },
    ],
  },
  {
    id:1,
    title: "Derretimiento de los glaciares",
    type: "sequence",
    body: "Esta mañana observamos en las imágenes satelitales que los glaciares se derriten a un ritmo acelerado en relación con el año pasado en el mismo periodo de tiempo, las proyecciones no son alentadoras, Venecia ahora es un romántico arrecife de coral y Holanda es un país aun más bajo.",
    imagePath: "",
    sequence: [
      {
        path: "articMedia/1sequence/1deicing_0.png",
        position: 0,
      },
      {
        path: "articMedia/1sequence/1deicing_1.png",
        position: 10,
      },
      {
        path: "articMedia/1sequence/1deicing_2.png",
        position: 20,
      },
      {
        path: "articMedia/1sequence/1deicing_3.png",
        position: 30,
      },
      {
        path: "articMedia/1sequence/1deicing_4.png",
        position: 40,
      },
      {
        path: "articMedia/1sequence/1deicing_5.png",
        position: 50,
      },
      {
        path: "articMedia/1sequence/1deicing_6.png",
        position: 60,
      },
      {
        path: "articMedia/1sequence/1deicing_7.png",
        position: 70,
      },
      {
        path: "articMedia/1sequence/1deicing_8.png",
        position: 80,
      },
      {
        path: "articMedia/1sequence/1deicing_9.png",
        position: 90,
      },
      {
        path: "articMedia/1sequence/1deicing_10.png",
        position: 100,
      },
    ],
    actions: [],
  },
  {
    id: 2,
    title: "Botes anclados de las primeras expediciones",
    type: "signal",
    body: "Una de nuestros grupos de expediciones encontró barcos a vapor de los pioneros exploradores. Algunas vez enterrados en metros de nieve, ahora el derretimiento los descubre para ser estudiados, te estoy enviando la información en este momento, sintoniza la frecuencia desde el tablero de control, es bastante emocionante.",
    imagePath: "",
    sequence: [
      {
        path: "articMedia/3sequence/shipwreck_0.png",
        position: 10,
      },
      {
        path: "articMedia/3sequence/shipwreck_1.png",
        position: 30,
      },
      {
        path: "articMedia/3sequence/shipwreck_2.png",
        position: 50,
      },
      {
        path: "articMedia/3sequence/shipwreck_3.png",
        position: 70,
      },
      {
        path: "articMedia/3sequence/shipwreck_4.png",
        position: 90,
      },
    ],
    actions: [],
  },
  {
    id: 3,
    title: "Fósiles descubiertos por el descongelamiento",
    type: "text",
    body: "Se reporta Elizabeth Dijkstra a operador. Hace una semana encontramos unos restos al parecer de procedencia animal que luego de algunos análisis realizados arrojaron un gran hallazgo. ¡Son fósiles que datan de hace aproximadamente 800.000 años! pero uno de los inep... investigadores del equipo, al parecer no extremó medidas y se contagió de un virus prehistórico. Ya se encuentra en cuarentena y estamos tratando sus síntomas, entre los cuales resaltan el crecimiento de vello facial excesivo, problemas para conjugar los verbos y secreción nasal púrpura. Nada de qué preocuparse. Seguiré reportando los avances periódicamente.",
    imagePath: "",
    sequence: [],
    actions: [],
  },
  {
    id: 4,
    title: "Problemas con la calefacción",
    type: "text",
    body: "Elizabeth Dijkstra a Operador. Hoy tuvimos un problema menor en la base, pero gracias a mi ingenio se controló rápidamente. Estallaron unas cuantas tuberías congeladas porque uno de los investigadores tuvo la grandiosa idea de ahorrar agua y cerrar las llaves. Una de ellas se incrustó en el radiador principal y dejó sin calefacción a 3 de las 4 alas de la estación, una de estas destinada para el descanso del equipo. Sin embargo sorteamos exitosamente la temperatura de -15 grados Celsius quemando los diarios, fotos familiares y cartas personales que el investigador responsable del accidente guardaba en su recámara.",
    imagePath: "",
    sequence: [],
    actions: [
      {
        name: "Felicitar",
        response: "Merecidas felicitaciones por tan pronta y acertada respuesta.",
      },
    ],
  },
  {
    id: 5,
    title: "Registros de temperaturas",
    type: "image",
    body: "Elizabeth Dijkstra a Operador. A continuación presento el reporte de la temperatura media de la última semana a las 12:00 horas.",
    imagePath: "articMedia/5temperatures.png",
    sequence: [],
    actions: [],
  },
  {
    id: 6,
    title: "Video de la aurora boreal de la noche anterior",
    type: "sequence",
    body: "Elizabeth Dijkstra a Operador. Hoy fue uno de los días más fríos y emocionantes desde el inicio de la investigación en la base. El equipo perdió un 43.4% de productividad a causa de la majestuosa Aurora Boreal que presenciamos en medio de una de nuestras investigaciones nocturnas, sin embargo fue un momento cautivador y espero que sirva de motivación para compensar el retraso en las investigaciones en curso. Debo admitir que una lágrima por poco se me congela en la línea de las pestañas ante semejante escenario, logré captar algo en cámara.",
    imagePath: "",
    sequence: [
      {
        path: "articMedia/6sequence/aurora_0.png",
        position: 0,
      },
      {
        path: "articMedia/6sequence/aurora_1.png",
        position: 10,
      },
      {
        path: "articMedia/6sequence/aurora_2.png",
        position: 20,
      },
      {
        path: "articMedia/6sequence/aurora_3.png",
        position: 30,
      },
      {
        path: "articMedia/6sequence/aurora_4.png",
        position: 40,
      },
      {
        path: "articMedia/6sequence/aurora_5.png",
        position: 50,
      },
      {
        path: "articMedia/6sequence/aurora_6.png",
        position: 60,
      },
      {
        path: "articMedia/6sequence/aurora_7.png",
        position: 70,
      },
      {
        path: "articMedia/6sequence/aurora_8.png",
        position: 80,
      },
      {
        path: "articMedia/6sequence/aurora_9.png",
        position: 90,
      },
      {
        path: "articMedia/6sequence/aurora_10.png",
        position: 100,
      },
    ],
    actions: [],
  },
  {
    id: 7,
    title: "Llegada de uno de los grupos de exploración",
    type: "image",
    body: "Elizabeth Dijkstra a Operador. Hoy llegó el grupo #3 de exploración enviado a la zona BYOB, ubicada al oeste de la base. Consta de 4 investigadores, entre ellos un biólogo auxiliar, un físico, un geólogo y un médico entusiasta con algunos conocimientos básicos en ecología y experiencia tratando a pacientes en temperaturas extremas. Hoy están recuperándose de la expedición sin embargo entre los hallazgos generales, manifiestan haber encontrado alteración en la fauna y flora de la zona a causa de los cambios de temperatura y las crecientes de hasta 20 cm del nivel del mar.",
    imagePath: "articMedia/5temperatures.png",
    sequence: [],
    actions: [],
  },
  {
    id: 8,
    title: "Un sueño extraño",
    type: "text",
    body: "Ayer tuve un sueño bastante particular, una criatura invadió las instalaciones de investigación, este ser era completamente diferente a cualquier cosa que haya visto o estudiado, era un parásito proveniente del espacio pero llevaba cientos de miles de años enterrado bajo la nieve. Este podía adoptar la forma de cualquier humano, por supuesto, no antes de matarlo. La mímesis era tan perfecta que era imposible distinguirlo a plena vista. Después de horas de tensión señalándonos los unos a los otros descubrimos su debilidad, el fuego... Desafortunadamente justo cuando íbamos a controlar a la criatura me despertó    un investigador tratando de emular canticos celtas a la luz de la luna. Este es mi reporte final, Elizabeth Dijkstra, base de investigaciones del Ártico.",
    imagePath: "articMedia/5temperatures.png",
    sequence: [],
    actions: [],
  },
];

export { articInteractions };
