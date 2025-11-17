export interface NervousSystemPart {
  id: string;
  name: string;
  description: string;
  function: string;
  facts: string[];
  color: string;
}

export interface NerveImpulse {
  id: number;
  path: string;
  duration: number;
  delay: number;
}

export const nervousSystemParts: NervousSystemPart[] = [
  {
    id: 'brain',
    name: 'Cerebro',
    description: 'El órgano más complejo del cuerpo humano, centro de control de todos los procesos corporales.',
    function: 'Controla el pensamiento, la memoria, las emociones, el habla, la visión, la respiración, la temperatura corporal y todos los procesos que regulan nuestro cuerpo.',
    facts: [
      'Contiene aproximadamente 86 mil millones de neuronas',
      'Consume el 20% de la energía del cuerpo',
      'Pesa alrededor de 1.4 kg en adultos',
      'Puede generar alrededor de 23 watts de energía',
    ],
    color: '#FF6B9D',
  },
  {
    id: 'cerebellum',
    name: 'Cerebelo',
    description: 'Ubicado en la parte posterior del cerebro, es crucial para la coordinación motora.',
    function: 'Coordina el movimiento muscular, mantiene la postura y el equilibrio, y ayuda en el aprendizaje motor.',
    facts: [
      'Contiene más del 50% de todas las neuronas del cerebro',
      'Es esencial para realizar movimientos precisos',
      'Ayuda a mantener el equilibrio al caminar',
      'Permite realizar actividades como escribir o tocar un instrumento',
    ],
    color: '#C77DFF',
  },
  {
    id: 'brainstem',
    name: 'Tronco Encefálico',
    description: 'Conecta el cerebro con la médula espinal y controla funciones vitales.',
    function: 'Regula funciones automáticas como la respiración, el ritmo cardíaco, la presión arterial y la digestión.',
    facts: [
      'Controla funciones vitales que ocurren sin pensamiento consciente',
      'Está compuesto por el mesencéfalo, la protuberancia y el bulbo raquídeo',
      'Controla los reflejos básicos como el parpadeo',
      'Es fundamental para la supervivencia',
    ],
    color: '#9D4EDD',
  },
  {
    id: 'spinal-cord',
    name: 'Médula Espinal',
    description: 'Un cordón nervioso que recorre la columna vertebral y conecta el cerebro con el resto del cuerpo.',
    function: 'Transmite señales nerviosas entre el cerebro y el cuerpo, y coordina reflejos simples.',
    facts: [
      'Mide aproximadamente 45 cm de longitud',
      'Contiene 31 pares de nervios espinales',
      'Está protegida por las vértebras de la columna',
      'Puede procesar algunos reflejos sin involucrar al cerebro',
    ],
    color: '#7209B7',
  },
  {
    id: 'peripheral-nerves',
    name: 'Nervios Periféricos',
    description: 'Red de nervios que conecta el sistema nervioso central con el resto del cuerpo.',
    function: 'Transmiten información sensorial al cerebro y órdenes motoras del cerebro a los músculos.',
    facts: [
      'El cuerpo tiene 43 pares de nervios periféricos',
      'Los impulsos nerviosos viajan a más de 100 m/s',
      'Transmiten sensaciones como dolor, temperatura y tacto',
      'Controlan el movimiento voluntario e involuntario',
    ],
    color: '#4A90E2',
  },
];

export const synapseInfo = {
  name: 'Sinapsis',
  description: 'Conexión entre dos neuronas donde se transmite la información.',
  process: [
    'La neurona presináptica libera neurotransmisores',
    'Los neurotransmisores cruzan el espacio sináptico',
    'Se unen a receptores en la neurona postsináptica',
    'Se genera un nuevo impulso nervioso',
  ],
  facts: [
    'Hay trillones de sinapsis en el cerebro humano',
    'Una neurona puede tener hasta 10,000 sinapsis',
    'La transmisión sináptica toma solo 0.5-1 milisegundos',
    'El aprendizaje fortalece ciertas conexiones sinápticas',
  ],
};

export const nervousSystemFacts = [
  'El sistema nervioso controla todo en el cuerpo',
  'Las señales nerviosas son impulsos eléctricos',
  'El cerebro puede almacenar información equivalente a 2.5 millones de gigabytes',
  'Los nervios sensoriales y motores trabajan constantemente',
  'El dolor es una señal de advertencia del sistema nervioso',
  'El sistema nervioso autónomo controla funciones involuntarias',
];
