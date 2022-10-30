const interactionsData = [
  {
    title: "Presentación Elizabeth Dijkstra a operador de la H.C.P.",
    type: "text",
    body: "Hola operador, mi nombre es Elizabeth Dijkstra y seré la investigadora encargada de reportar los hallazgos de nuestra base en el Ártico. Soy bióloga especialista en ecología y biología acuática, líder del laboratorio de investigación desde hace 8 meses, y a cargo de un equipo de profesionales altamente capacitados según me indicaron en el reporte de ingreso, sobre esto aún albergo mis dudas.",
    sequence: [
      {
        path: "randomCode.png",
        position: 20,
      },
      {
        path: "stationsList.png",
        position: 30,
      },
    ],
    // actions: [
    //   {
    //     name: "Enviar ropa sucia",
    //     response: "Ropa sucia enviada"
    //   },
    //   {
    //     name: "Despedir",
    //     response: "Me estoy despidiendo"
    //   },
    //   {
    //     name: "Saludar2",
    //     response: "Te saludo por segunda vez"
    //   },
    // ],
  },
  {
    title: "Informe derretimiento de los glaciares",
    type: "sequence",
    body: "Esta mañana observamos en las imágenes satelitales que los glaciares se derriten a un ritmo acelerado en relación con el año pasado en el mismo periodo de tiempo, las proyecciones no son alentadoras, Venecia ahora es un romántico arrecife de coral y Holanda es un país aun más bajo.",
    sequence: [
      {
        path: "cutSatelite.png",
        position: 20,
      },
      {
        path: "instruction-connect.png",
        position: 30,
      },
    ],
    // actions: [
    //   {
    //     name: "Enviar ropa sucia",
    //     response: "Ropa sucia enviada"
    //   },
    //   {
    //     name: "Despedir",
    //     response: "Me estoy despidiendo"
    //   },
    //   {
    //     name: "Saludar2",
    //     response: "Te saludo por segunda vez"
    //   },
    // ],
  },
];

export { interactionsData };
