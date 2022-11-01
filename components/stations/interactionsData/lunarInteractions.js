const lunarInteractions = [
  {
    title: "Presentación Luther Eines Jr. a operador de la H.C.P. ",
    type: "text",
    body: "!Hola qué tal! soy Luther Eines Jr. el director de la base lunar pero puedes referirte a mí como Luther. Aunque acabo de empezar en este cargo, Eines Padre me ha preparado durante 20 años para esto. Soy ingeniero aeronáutico y astrónomo recién graduado, no pienses mal de mí,  Eines Padre se encargó de guiar mi proceso académico y me gradué con honores de la Universidad de Oxferrari. Hoy conoceré al equipo de la base, sin embargo el Eines Padre me mencionó que no hay muchos investigadores que valgan la pena. ¿Ya mencioné que Eines Padre es el director del cuartel general?",
    // image: "instructionsConsole.gif",
    // sequence: [
    //   {
    //     path: "randomCode.png",
    //     position: 20,
    //   },
    //   {
    //     path: "stationsList.png",
    //     position: 30,
    //   },
    // ],
    actions: [
      {
        name: "Conectar",
        response: "Conectado"
      },
      {
        name: "Desconectar",
        response: "Desconectado"
      },
      {
        name: "Encender",
        response: "Encendido"
      },
    ],
  }
];

export { lunarInteractions };
