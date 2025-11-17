export interface Star {
  x: number; // Coordenada X (0-100, porcentaje del canvas)
  y: number; // Coordenada Y (0-100, porcentaje del canvas)
  brightness: number; // 0.5 a 1.5 (tamaño relativo)
}

export interface Constellation {
  id: string;
  name: string;
  nameEnglish: string;
  stars: Star[];
  connections: number[][]; // Pares de índices de estrellas a conectar
  mainStars?: number[]; // Índices de las estrellas principales (más brillantes)
  mythology: string;
  bestSeason: string;
  hemisphere: string;
  facts: string[];
}

export const constellations: Constellation[] = [
  {
    id: 'ursa-major',
    name: 'Osa Mayor',
    nameEnglish: 'Ursa Major',
    stars: [
      { x: 30, y: 35, brightness: 1.2 },
      { x: 35, y: 32, brightness: 1.3 },
      { x: 40, y: 30, brightness: 1.2 },
      { x: 45, y: 32, brightness: 1.3 },
      { x: 48, y: 38, brightness: 1.1 },
      { x: 43, y: 42, brightness: 1.2 },
      { x: 35, y: 40, brightness: 1.2 },
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0]],
    mainStars: [1, 3],
    mythology: 'En la mitología griega, representa a Calisto, una ninfa transformada en osa por la diosa Hera. Zeus la colocó en el cielo junto a su hijo Arcas.',
    bestSeason: 'Primavera',
    hemisphere: 'Norte',
    facts: [
      'Contiene el "Carro" o "Cazo", uno de los patrones más reconocibles',
      'Las 2 estrellas del borde frontal apuntan a la Estrella Polar',
      'Es circumplolar en latitudes del norte, visible todo el año'
    ]
  },
  {
    id: 'orion',
    name: 'Orión',
    nameEnglish: 'Orion',
    stars: [
      { x: 50, y: 25, brightness: 1.4 }, // Betelgeuse
      { x: 55, y: 28, brightness: 1.1 },
      { x: 60, y: 25, brightness: 1.3 }, // Bellatrix
      { x: 48, y: 40, brightness: 1.2 },
      { x: 52, y: 42, brightness: 1.2 }, // Cinturón
      { x: 56, y: 44, brightness: 1.2 }, // Cinturón
      { x: 60, y: 46, brightness: 1.2 }, // Cinturón
      { x: 62, y: 40, brightness: 1.1 },
      { x: 45, y: 55, brightness: 1.1 },
      { x: 65, y: 60, brightness: 1.5 }, // Rigel
    ],
    connections: [
      [0, 1], [1, 2], [2, 7], [7, 9], [9, 8], [8, 3], [3, 0],
      [3, 4], [4, 5], [5, 6], [6, 7]
    ],
    mainStars: [0, 2, 4, 5, 6, 9],
    mythology: 'Orión era un gigante cazador en la mitología griega. Según la leyenda, fue picado por un escorpión y Zeus lo colocó en el cielo opuesto a Escorpio.',
    bestSeason: 'Invierno',
    hemisphere: 'Visible en ambos',
    facts: [
      'Las 3 estrellas del cinturón son: Alnitak, Alnilam y Mintaka',
      'Betelgeuse (roja) y Rigel (azul) son supergigantes',
      'Contiene la famosa Nebulosa de Orión (M42)'
    ]
  },
  {
    id: 'cassiopeia',
    name: 'Casiopea',
    nameEnglish: 'Cassiopeia',
    stars: [
      { x: 50, y: 20, brightness: 1.2 },
      { x: 52, y: 25, brightness: 1.3 },
      { x: 55, y: 22, brightness: 1.2 },
      { x: 58, y: 27, brightness: 1.2 },
      { x: 60, y: 23, brightness: 1.1 },
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4]],
    mainStars: [1, 2],
    mythology: 'Casiopea era una reina vanidosa en la mitología griega que presumía de ser más bella que las nereidas. Como castigo, fue colocada en el cielo atada a su trono.',
    bestSeason: 'Otoño',
    hemisphere: 'Norte',
    facts: [
      'Tiene forma de "W" o "M" según la época del año',
      'Es circumplolar en latitudes del norte',
      'Contiene varios cúmulos estelares abiertos'
    ]
  },
  {
    id: 'ursa-minor',
    name: 'Osa Menor',
    nameEnglish: 'Ursa Minor',
    stars: [
      { x: 25, y: 15, brightness: 1.5 }, // Polaris
      { x: 27, y: 18, brightness: 1.0 },
      { x: 30, y: 20, brightness: 1.0 },
      { x: 33, y: 22, brightness: 1.0 },
      { x: 35, y: 18, brightness: 1.1 },
      { x: 32, y: 15, brightness: 1.1 },
      { x: 28, y: 13, brightness: 1.0 },
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0]],
    mainStars: [0],
    mythology: 'Representa a Arcas, hijo de Calisto, quien también fue transformado en oso. Zeus los colocó juntos en el cielo como las dos Osas.',
    bestSeason: 'Visible todo el año',
    hemisphere: 'Norte',
    facts: [
      'Contiene Polaris, la Estrella Polar o Norte',
      'Polaris está a menos de 1° del polo norte celeste',
      'También se conoce como el "Pequeño Cazo"'
    ]
  },
  {
    id: 'leo',
    name: 'Leo',
    nameEnglish: 'Leo',
    stars: [
      { x: 20, y: 50, brightness: 1.4 }, // Regulus
      { x: 24, y: 48, brightness: 1.1 },
      { x: 28, y: 45, brightness: 1.2 },
      { x: 32, y: 48, brightness: 1.1 },
      { x: 35, y: 52, brightness: 1.3 }, // Denebola
      { x: 30, y: 55, brightness: 1.0 },
      { x: 25, y: 53, brightness: 1.1 },
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0]],
    mainStars: [0, 4],
    mythology: 'Representa al León de Nemea, una bestia invulnerable derrotada por Hércules en uno de sus doce trabajos. Zeus lo inmortalizó en las estrellas.',
    bestSeason: 'Primavera',
    hemisphere: 'Visible en ambos',
    facts: [
      'Regulus es una de las estrellas más brillantes del cielo',
      'La "Hoz" de Leo marca la cabeza y melena del león',
      'Es una de las constelaciones del zodíaco'
    ]
  },
  {
    id: 'scorpius',
    name: 'Escorpio',
    nameEnglish: 'Scorpius',
    stars: [
      { x: 50, y: 55, brightness: 1.5 }, // Antares
      { x: 48, y: 53, brightness: 1.1 },
      { x: 46, y: 57, brightness: 1.1 },
      { x: 48, y: 60, brightness: 1.0 },
      { x: 52, y: 62, brightness: 1.1 },
      { x: 56, y: 63, brightness: 1.2 },
      { x: 60, y: 60, brightness: 1.1 },
      { x: 62, y: 57, brightness: 1.0 },
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]],
    mainStars: [0],
    mythology: 'El escorpión enviado por Gea para matar a Orión. Por eso, cuando Escorpio sale por el este, Orión se oculta por el oeste, huyendo eternamente.',
    bestSeason: 'Verano',
    hemisphere: 'Sur (visible en el norte en verano)',
    facts: [
      'Antares es una supergigante roja, rival de Marte en color',
      'El nombre Antares significa "rival de Ares (Marte)"',
      'Forma una "J" o anzuelo característico'
    ]
  },
  {
    id: 'cygnus',
    name: 'Cisne',
    nameEnglish: 'Cygnus',
    stars: [
      { x: 65, y: 35, brightness: 1.3 }, // Deneb
      { x: 68, y: 40, brightness: 1.1 },
      { x: 70, y: 45, brightness: 1.2 },
      { x: 72, y: 50, brightness: 1.0 },
      { x: 74, y: 55, brightness: 1.1 }, // Albireo
      { x: 68, y: 48, brightness: 1.1 },
      { x: 62, y: 45, brightness: 1.0 },
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [5, 6]],
    mainStars: [0, 4],
    mythology: 'Representa a Zeus transformado en cisne. También se asocia con Orfeo, el músico legendario transformado en cisne tras su muerte.',
    bestSeason: 'Verano',
    hemisphere: 'Norte',
    facts: [
      'También conocida como la "Cruz del Norte"',
      'Deneb es una de las estrellas más luminosas conocidas',
      'Forma parte del "Triángulo de Verano" con Vega y Altair'
    ]
  },
  {
    id: 'southern-cross',
    name: 'Cruz del Sur',
    nameEnglish: 'Crux',
    stars: [
      { x: 60, y: 50, brightness: 1.4 }, // Acrux
      { x: 63, y: 45, brightness: 1.3 }, // Mimosa
      { x: 66, y: 50, brightness: 1.2 },
      { x: 63, y: 55, brightness: 1.2 },
    ],
    connections: [[0, 2], [1, 3]],
    mainStars: [0, 1],
    mythology: 'Aunque no tiene mitología griega antigua, es fundamental para la navegación en el hemisferio sur. Representa la cruz en la que murió Cristo.',
    bestSeason: 'Visible todo el año',
    hemisphere: 'Sur',
    facts: [
      'La constelación más pequeña del cielo',
      'Apunta al Polo Sur celeste',
      'Aparece en las banderas de Australia, Nueva Zelanda y Brasil'
    ]
  }
];
