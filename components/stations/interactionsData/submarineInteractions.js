const submarineInteractions = [
  {
    id: 9,
    title: "Presentación Ryan Black a operador de la H.C.P.",
    type: "text",
    body: "Saludos operador, me presento ante usted como jefe del equipo de investigación de la base submarina. Mi nombre es Ryan Black, Almirante Superior Décimo Segundo de la Marina, donde tuve el honor de pertenecer durante 23 años, 2 meses y 14 días. Recibí el cargo de jefe de investigación hace 30 días, sin embargo estoy al tanto de todos los avances y novedades de los investigadores.Constantemente se le enviarán informes con la respectiva actualización de las investigaciones en curso.",
    imagePath: "",
    sequence: [],
    actions: [],
  },
  {
    id: 10,
    title: "Restos de submarinos",
    type: "sequence",
    body: "Hoy el equipo de exploración #3 presentó reporte fotográfico en el cual se identificaron 4 submarinos nucleares abandonados. [Procedencia: Desconocida - Ubicación: 4.2km en sentido sur de la base de investigación - Detalles: uno de los submarinos se encuentra encallado en la costa más cercana a la base, otro se encuentra hundido en las profundidades a menos de 1km de la orilla y dos siguen flotando a pesar del evidente deterioro.]",
    imagePath: "",
    sequence: [
      {
        path: "submarineMedia/2sequence/submarine_0.png",
        position: 20,
      },
      {
        path: "submarineMedia/2sequence/submarine_1.png",
        position: 30,
      },
      {
        path: "submarineMedia/2sequence/submarine_2.png",
        position: 50,
      },
      {
        path: "submarineMedia/2sequence/submarine_3.png",
        position: 70,
      },
    ],
    actions: [],
  },
  {
    id: 11,
    title: "Problema con los trajes de buceo",
    type: "text",
    body: "El informe más reciente suministrado por el equipo de monitoreo, reveló que habían variaciones en las condiciones químicas del agua en los límites nororientales del triángulo de las bermudas. El equipo de exploración se preparó para realizar investigaciones en la superficie, sin embargo, los trajes de buceo se encontraban con ácaros, polvo, moho y un terrible hedor a humedad. Solicito de carácter urgente ayuda con esta situación para proceder con la misión de exploración. ",
    imagePath: "",
    sequence: [],
    actions: [
      {
        name: "Enviar perfume de ropa para los trajes",
        response: "Se envía una caja de perfumes para ropa marca New Spices.",
      },
      {
        name: "Enviar trajes nuevos",
        response: "Se sugiere la utilización de un balde para contener el liquido entrante.",
      },
      {
        name: "Enviar los trajes a la tintorería",
        response: "Se envía mensajero para recoger los trajes de buceo y llevarlos la tintorería más cercana.",
      },
    ],
  },
  {
    id: 12,
    title: "Calamar gigante",
    type: "signal",
    body: "!Operador es un calamar gigante! Si mis ojos no me fallan y no estamos sufriendo una alucinación colectiva, acabamos de ver lo que parece ser el calamar gigante más grande avistado por el equipo !y quién sabe si del gremio! --Ehhh... Habla Ryan Black a operador. Lo lamento. El equipo de exploración #2 de la base submarina, después de 3 horas 27 minutos de recorrido, avistó lo que parecía ser un calamar gigante, por las dimensiones, !podría tratarse de un ejemplar de más de 23 metros de longitud!",
    imagePath: "",
    sequence: [
      {
        path: "submarineMedia/3sequence/squid_0.png",
        position: 0,
      },
      {
        path: "submarineMedia/3sequence/squid_1.png",
        position: 10,
      },
      {
        path: "submarineMedia/3sequence/squid_2.png",
        position: 20,
      },
      {
        path: "submarineMedia/3sequence/squid_3.png",
        position: 30,
      },
      {
        path: "submarineMedia/3sequence/squid_4.png",
        position: 40,
      },
      {
        path: "submarineMedia/3sequence/squid_5.png",
        position: 50,
      },
      {
        path: "submarineMedia/3sequence/squid_6.png",
        position: 60,
      },
      {
        path: "submarineMedia/3sequence/squid_7.png",
        position: 70,
      },
      {
        path: "submarineMedia/3sequence/squid_8.png",
        position: 80,
      },
      {
        path: "submarineMedia/3sequence/squid_9.png",
        position: 90,
      },
      {
        path: "submarineMedia/3sequence/squid_10.png",
        position: 100,
      },
    ],
    actions: [],
  },
  {
    id: 13,
    title: "Fisura en el fondo marino",
    type: "image",
    body: "El último hallazgo del radar a cargo del equipo de monitoreo #4 identificó una alteración en las placas tectónicas ubicadas a 32km de la base de investigación submarina. Al acercarse a la falla, el submarino de patrulla identificó lo que sería una fisura del lecho marino desde la cual se originaban cambios erráticos en la presión  del agua siguiendo un patrón nunca registrado, el equipo de monitoreo nos mantendrá informados.",
    imagePath: "submarineMedia/fisure.png",
    sequence: [],
    actions: [],
  },
  {
    id: 14,
    title: "Una gotera",
    type: "text",
    body: "Hoy me despertaron unas goteras cayéndome en frente y pensé que estaba siendo torturado por los rusos de nuevo. Después de entrar en pánico, recordar que soy el director, recobrar el aliento y contactar al equipo de mantenimiento de la base; me indican que se debe a una fisura en el casco de la base. !Una fisura! !A 200mts bajo el nivel del mar! Por más absurdo que parezca, me causa gran preocupación durante cuánto tiempo soportará la presión nuestra base. Solicito por favor que envíen el equipo de mantenimiento lo más pronto posible. Fin del reporte.",
    imagePath: "",
    sequence: [],
    actions: [
      {
        name: "Enviar equipo de reparación",
        response: "Requerimiento enviado para equipo de reparación especializado en profundidaes",
      },
      {
        name: "Sugerir balde",
        response: "Se sugiere la utilización de un balde para contener el liquido entrante",
      },
    ],
  },
  {
    id: 15,
    title: "El equipo de exploración #2 ha vuelto",
    type: "text",
    body: "El equipo de exploración #2 partió con el objetivo de mapear las posibles alteraciones que caracterizan al triángulo de las bermudas. Después de superar los 10km en dirección al vórtice del triángulo, todos los instrumentos de localización empezaron a presentar fallas imperceptibles en un inicio, pero después de 30 minutos, 23km en dirección al vórtice, o eso pensaban, informaron que los instrumentos de navegación estaban siendo alterados inexplicablemente y llevaban millas navegadas en 'completa oscuridad'. Luego de 3 días de navegar en la superficie hacia el este, guiándonos únicamente por el sol, pudieron entrar en una zona sin alteraciones y volver a la base. Los tripulantes estaban hambrientos, asustados y se muestran reacios a comentar sobre lo sucedido. Fin del reporte.",
    imagePath: "",
    sequence: [],
    actions: [],
  },
];

export { submarineInteractions };
