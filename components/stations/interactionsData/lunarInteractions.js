const lunarInteractions = [
  {
    id: 9,
    title: "Presentación Luther Eines Jr. a operador de la H.C.P. ",
    type: "text",
    body: "!Hola qué tal! soy Luther Eines Jr. el director de la base lunar pero puedes referirte a mí como Luther. Aunque acabo de empezar en este cargo, Eines Padre me ha preparado durante 20 años para esto. Soy ingeniero aeronáutico y astrónomo recién graduado, no pienses mal de mí,  Eines Padre se encargó de guiar mi proceso académico y me gradué con honores de la Universidad de Oxferrari. Hoy conoceré al equipo de la base, sin embargo el Eines Padre me mencionó que no hay muchos investigadores que valgan la pena. ¿Ya mencioné que Eines Padre es el director del cuartel general?",
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
    id: 10,
    title: "Llegada de los nuevos suministros",
    type: "image",
    body: "!Hola! Eines Padre me dijo que podía adecuar el laboratorio de investigación como mejor quisiera y me sorprendió lo rápido que llegaron los suministros para los proyectos que adelantaremos. Sin embargo, veo que faltan algunas cosas de vital importancia para la base. Pantuflas con pies de yeti talla 9 (2 unidades), talla 10 (2 unidades) y talla 12 (1 unidad). - Resaltadores que brillen en la oscuridad. - Tubos de ensayo con grabados de Odisea al espacio. - 5 cascos para bebidas (Dejo ejemplo)",
    imagePath: "lunarMedia/1sodaHelmet.png",
    sequence: [],
    actions: [],
  },
  {
    id: 11,
    title: "Reporte de crecimiento de hidropónicos",
    type: "image",
    body: "!Hola Operador! Ayer un tripulante me dijo que la Coca Cola no se podía cultivar, aún albergo mis dudas de si es posible o no, seguiré monitoreando el crecimiento. Hasta el momento hemos tenido los siguientes reportes de crecimiento de cultivos: Ayer leí el reporte de la Base del Ártico ¿Cómo está la Dra. Dijkstra?",
    imagePath: "lunarMedia/2hidroponics.png",
    sequence: [],
    actions: [],
  },
  {
    id: 12,
    title: "Registro mineral de rocas lunares",
    type: "sequence",
    body: "!Hola! Ayer salimos todos los tripulantes de la base para hacer una expedición corta de recolección de rocas lunares. Recolectamos entre 50 y 300 rocas de diferentes tipos, pero el experto geólogo, que tal vez debería llamarse lunático, dice que sólo hay 4 tipos diferentes. Dejo reporte gráfico de las piezas mencionadas:",
    imagePath: "",
    sequence: [
      {
        path: "lunarMedia/3sequence/roca_1.png",
        position: 10,
      },
      {
        path: "lunarMedia/3sequence/roca_1.png",
        position: 20,
      },
      {
        path: "lunarMedia/3sequence/roca_1.png",
        position: 40,
      },
      {
        path: "lunarMedia/3sequence/roca_1.png",
        position: 80,
      },
    ],
    actions: [],
  },
  {
    id: 13,
    title: "Fotografías del explorador lunar",
    type: "sequence",
    body: "!Hoy es mi cumpleaños! así que decidí hacer un paseo de exploración, me llevé a un tripulante para que hiciera unas cuantas fotos del trabajo que hago y enviárselas a papá. Seguro que las colgará en la pared para que las vean las visitas.",
    imagePath: "",
    sequence: [
      {
        path: "lunarMedia/4sequence/lunarExplorer0.png",
        position: 10,
      },
      {
        path: "lunarMedia/4sequence/lunarExplorer1.png",
        position: 20,
      },
      {
        path: "lunarMedia/4sequence/lunarExplorer2.png",
        position: 40,
      },
      {
        path: "lunarMedia/4sequence/lunarExplorer3.png",
        position: 80,
      },
      {
        path: "lunarMedia/4sequence/lunarExplorer4.png",
        position: 100,
      },
    ],
    actions: [],
  },
  {
    id: 14,
    title: "Visitas de extraterrestres",
    type: "text",
    body: "Señor Operador hoy  me siento introspectivo, Eines Padre siempre ha dicho que es un desperdicio de tiempo y esfuerzo, pero siempre me he preguntado: ¿Qué hay en el lado oscuro de la luna? Tanto tiempo de investigación y aún nos asusta mirar allí. ¿Qué tal si existan otras formas de vida extraterrestres muy cerca de aquí?. ¿Cómo es posible que un universo tan basto y extenso, seamos la única forma de vida inteligente?. En ocasiones nuestros radares captan señales extrañas que aún no logramos descifrar, viendo el aparente vacío desde esta base, siento que hay algo que mis ojos no pueden captar que nuestros receptores sí. De vivir aquí afuera, seguramente tienen mejor tecnología para nuestros cultivos hidropónicos. Quizá revelen sus secretos para lograr que mi cultivo de Coca Cola germine. Decidí pedir que se lanzara una señal continua desde la base con la canción 'Fly me to the moon', tal vez nuestros vecinos extraterrestres la escuchen y se interesen en nosotros. ¿Crees que Dijkstra también pueda captarla en los radares de su base?",
    imagePath: "",
    sequence: [
    ],
    actions: [],
  },
  {
    id: 15,
    title: "Fotografías del explorador lunar",
    type: "signal",
    body: "Ayer el equipo de excavación escogió el en los que se iniciará la explotación de minerales lunares. Eines Padre dice que es uno de los proyectos más importantes de la base, ya que son minerales de altísimo costo en la Tierra, así que debo estar muy atento a cualquier novedad. He estado acompañando al equipo durante todo el día, enviando señal desde el sitio. Ojalá la doctora Dijkstra del ártico pudiera ver el gran trabajo que estoy haciendo, sólo digo...",
    imagePath: "",
    sequence: [
      {
        path: "lunarMedia/5sequence/excavation_0.png",
        position: 0,
      },
      {
        path: "lunarMedia/5sequence/excavation_1.png",
        position: 10,
      },
      {
        path: "lunarMedia/5sequence/excavation_2.png",
        position: 20,
      },
      {
        path: "lunarMedia/5sequence/excavation_3.png",
        position: 30,
      },
      {
        path: "lunarMedia/5sequence/excavation_4.png",
        position: 40,
      },
      {
        path: "lunarMedia/5sequence/excavation_5.png",
        position: 50,
      },
      {
        path: "lunarMedia/5sequence/excavation_6.png",
        position: 60,
      },
      {
        path: "lunarMedia/5sequence/excavation_7.png",
        position: 70,
      },
      {
        path: "lunarMedia/5sequence/excavation_8.png",
        position: 80,
      },
      {
        path: "lunarMedia/5sequence/excavation_9.png",
        position: 90,
      },
      {
        path: "lunarMedia/5sequence/excavation_10.png",
        position: 100,
      },
    ],
    actions: [],
  },
  {
    id: 16,
    title: "Fotografías de la tierra",
    type: "sequence",
    body: "Después de la excavación de minerales, noté que tengo gran talento para la fotografía, a veces me sorprendo de mis múltiples habilidades, así que decidí tomarme el día libre para apreciar la belleza de la Tierra desde aquí.",
    imagePath: "",
    sequence: [
      {
        path: "lunarMedia/6sequence/earthphoto_0.png",
        position: 0,
      },
      {
        path: "lunarMedia/6sequence/earthphoto_1.png",
        position: 40,
      },
      {
        path: "lunarMedia/6sequence/earthphoto_2.png",
        position: 100,
      },
    ],
    actions: [],
  },
  {
    id: 17,
    title: "Fotografías de la tierra",
    type: "sequence",
    body: "Informo que el investigador encargado del monitoreo diario de radiación, partículas y posibles amenazas externas para la base, notó incrementos alarmantes en las erupciones solares de los últimos días, por eso prevemos que para en 27 días tendremos tormentas solares entre nocivas y mortales para cualquier instalación que no cuente con atmósfera protectora. Para ello, es de gran orgullo, reconocer que Eines Padre me capacitó perfectamente para evitar las amenazas de este clima espacial alterado. Estoy un poco preocupado por nuestros cultivos hidropónicos, es posible que las pequeñas dosis de radiación hayan interferido con mi cultivo de Coca Cola. Reforzaré personalmente este espacio. Enviaré un informe cuando termine el período crítico.",
    imagePath: "",
    sequence: [
    ],
    actions: [
      // TODO: crear preguntas
    ],
  },
];

export { lunarInteractions };
