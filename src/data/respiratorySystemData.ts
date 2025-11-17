export interface RespiratoryPart {
  id: string;
  name: string;
  description: string;
  function: string;
  facts: string[];
  color: string;
}

export const respiratoryParts: RespiratoryPart[] = [
  {
    id: 'nose',
    name: 'Nariz y Fosas Nasales',
    description: 'Punto de entrada del aire al sistema respiratorio.',
    function: 'Filtra, calienta y humedece el aire que inhalamos. Los vellos nasales atrapan partículas grandes.',
    facts: [
      'Produce alrededor de 1 litro de moco al día',
      'Contiene millones de células olfativas para detectar olores',
      'Calienta el aire a temperatura corporal en milisegundos',
      'Los vellos nasales atrapan el 80% de partículas grandes',
    ],
    color: '#7FB3D5',
  },
  {
    id: 'trachea',
    name: 'Tráquea',
    description: 'Tubo que conecta la laringe con los bronquios.',
    function: 'Conduce el aire desde la garganta hacia los pulmones, protegida por anillos de cartílago.',
    facts: [
      'Mide aproximadamente 11-12 cm de longitud',
      'Tiene forma de "C" gracias a 16-20 anillos cartilaginosos',
      'Está recubierta de cilios que mueven el moco hacia arriba',
      'Los cilios pueden mover moco a 16 mm por minuto',
    ],
    color: '#5DADE2',
  },
  {
    id: 'bronchi',
    name: 'Bronquios',
    description: 'Tubos que se ramifican desde la tráquea hacia cada pulmón.',
    function: 'Distribuyen el aire dentro de los pulmones, dividiéndose en bronquiolos más pequeños.',
    facts: [
      'El bronquio derecho es más corto y ancho que el izquierdo',
      'Se ramifican hasta 23 veces dentro del pulmón',
      'Los bronquiolos más pequeños miden solo 0.5 mm',
      'También están recubiertos de cilios para eliminar partículas',
    ],
    color: '#3498DB',
  },
  {
    id: 'lungs',
    name: 'Pulmones',
    description: 'Órganos principales del sistema respiratorio donde ocurre el intercambio de gases.',
    function: 'Realizan el intercambio de oxígeno y dióxido de carbono con la sangre.',
    facts: [
      'El pulmón derecho tiene 3 lóbulos, el izquierdo tiene 2',
      'Contienen aproximadamente 300 millones de alvéolos',
      'La superficie total de los alvéolos es de ~70 m²',
      'Procesan alrededor de 11,000 litros de aire al día',
    ],
    color: '#E8DAEF',
  },
  {
    id: 'alveoli',
    name: 'Alvéolos',
    description: 'Diminutas bolsas de aire donde ocurre el intercambio gaseoso.',
    function: 'Permiten que el oxígeno pase a la sangre y el dióxido de carbono salga de ella.',
    facts: [
      'Son tan pequeños que 8 caben en un grano de sal',
      'Las paredes alveolares tienen solo 1 célula de grosor',
      'Están rodeados de una red densa de capilares',
      'El intercambio de gases toma menos de 1 segundo',
    ],
    color: '#D7BDE2',
  },
  {
    id: 'diaphragm',
    name: 'Diafragma',
    description: 'Músculo principal de la respiración ubicado debajo de los pulmones.',
    function: 'Se contrae y relaja para crear el movimiento de inhalación y exhalación.',
    facts: [
      'Es responsable del 80% del trabajo respiratorio',
      'Se contrae 20,000 veces al día',
      'Desciende 1-2 cm durante la respiración normal',
      'Puede descender hasta 10 cm en respiración profunda',
    ],
    color: '#A569BD',
  },
];

export const breathingCycle = {
  inhalation: {
    name: 'Inhalación',
    description: 'El diafragma se contrae y desciende, expandiendo los pulmones.',
    steps: [
      'El diafragma se contrae y desciende',
      'Los músculos intercostales elevan las costillas',
      'La presión en los pulmones disminuye',
      'El aire fluye hacia los pulmones',
    ],
  },
  exhalation: {
    name: 'Exhalación',
    description: 'El diafragma se relaja y asciende, comprimiendo los pulmones.',
    steps: [
      'El diafragma se relaja y asciende',
      'Los músculos intercostales bajan las costillas',
      'La presión en los pulmones aumenta',
      'El aire sale de los pulmones',
    ],
  },
};

export const gasExchange = {
  name: 'Intercambio de Gases',
  description: 'Proceso por el cual el oxígeno entra en la sangre y el dióxido de carbono sale.',
  process: [
    'El oxígeno (O₂) difunde desde los alvéolos hacia los capilares',
    'La hemoglobina en los glóbulos rojos captura el O₂',
    'El dióxido de carbono (CO₂) difunde desde la sangre hacia los alvéolos',
    'El CO₂ es exhalado fuera del cuerpo',
  ],
  facts: [
    'Ocurre en cada respiración, unas 12-20 veces por minuto',
    'El oxígeno viaja de los pulmones a las células en segundos',
    'La sangre oxigenada es de color rojo brillante',
    'La sangre desoxigenada es de color rojo oscuro',
  ],
};

export const respiratoryFacts = [
  'Respiramos aproximadamente 20,000 veces al día',
  'Los pulmones son los únicos órganos que flotan en agua',
  'La capacidad pulmonar promedio es de 6 litros',
  'El pulmón derecho es un 10% más grande que el izquierdo',
  'Al toser, el aire puede salir a 100 km/h',
  'Los niños respiran más rápido que los adultos',
];
