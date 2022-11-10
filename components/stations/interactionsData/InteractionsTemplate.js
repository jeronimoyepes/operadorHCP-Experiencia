const interactionTemplate = [
  {
    title: "Presentación Elizabeth Dijkstra a operador de la H.C.P.",
    type: "text",
    body: "Hola operador, mi nombre es Elizabeth Dijkstra y seré la investigadora encargada de reportar los hallazgos de nuestra base en el Ártico. Soy bióloga especialista en ecología y biología marina, líder del laboratorio de investigación desde hace 8 meses, y estoy a cargo de un equipo de profesionales altamente capacitados según lo indicado en el reporte de ingreso, sobre esto aún albergo mis dudas. Espero poder contar con ustedes para llevar a cabo mi... digo, nuestras investigaciones de manera exitosa.",
    imagePath: "randomCode.png",
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
    actions: [
      {
        name: "Saludar",
        response: "Ropa sucia enviada",
      },
      {
        name: "Despedir",
        response: "Me estoy despidiendo",
      },
      {
        name: "Saludar2",
        response: "Te saludo por segunda vez",
      },
    ],
  },
];

export { interactionTemplate };
