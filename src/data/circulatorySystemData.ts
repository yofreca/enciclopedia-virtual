export interface CirculatoryPart {
  id: string;
  name: string;
  description: string;
  function: string;
  facts: string[];
  color: string;
}

export const circulatoryParts: CirculatoryPart[] = [
  {
    id: 'heart',
    name: 'Corazón',
    description: 'Órgano muscular que bombea sangre a través del cuerpo.',
    function: 'Bombea sangre oxigenada a todo el cuerpo y recibe sangre desoxigenada de vuelta para enviarla a los pulmones.',
    facts: [
      'Late aproximadamente 100,000 veces al día',
      'Bombea alrededor de 7,570 litros de sangre diariamente',
      'Tiene 4 cavidades: 2 aurículas y 2 ventrículos',
      'El latido es causado por impulsos eléctricos',
    ],
    color: '#E74C3C',
  },
  {
    id: 'arteries',
    name: 'Arterias',
    description: 'Vasos sanguíneos que transportan sangre desde el corazón.',
    function: 'Llevan sangre oxigenada desde el corazón hacia los tejidos del cuerpo (excepto la arteria pulmonar).',
    facts: [
      'Tienen paredes gruesas y elásticas',
      'La aorta es la arteria más grande del cuerpo',
      'Soportan alta presión sanguínea',
      'Se ramifican en arterias más pequeñas llamadas arteriolas',
    ],
    color: '#E74C3C',
  },
  {
    id: 'veins',
    name: 'Venas',
    description: 'Vasos sanguíneos que retornan sangre al corazón.',
    function: 'Transportan sangre desoxigenada desde los tejidos de vuelta al corazón (excepto las venas pulmonares).',
    facts: [
      'Tienen válvulas para prevenir el reflujo de sangre',
      'Sus paredes son más delgadas que las arterias',
      'Contienen aproximadamente el 70% del volumen sanguíneo',
      'La sangre en las venas se ve azul a través de la piel',
    ],
    color: '#3498DB',
  },
  {
    id: 'capillaries',
    name: 'Capilares',
    description: 'Vasos sanguíneos microscópicos que conectan arterias y venas.',
    function: 'Permiten el intercambio de oxígeno, nutrientes y desechos entre la sangre y los tejidos.',
    facts: [
      'Son tan delgados que solo una célula puede pasar a la vez',
      'Hay más de 40,000 km de capilares en el cuerpo',
      'Sus paredes tienen solo una célula de grosor',
      'Forman redes densas en órganos vitales',
    ],
    color: '#9B59B6',
  },
  {
    id: 'blood',
    name: 'Sangre',
    description: 'Tejido líquido que circula por todo el cuerpo.',
    function: 'Transporta oxígeno, nutrientes, hormonas y elimina desechos metabólicos.',
    facts: [
      'Un adulto tiene entre 4.5 y 5.5 litros de sangre',
      'Está compuesta de plasma, glóbulos rojos, blancos y plaquetas',
      'Los glóbulos rojos viven aproximadamente 120 días',
      'La sangre representa el 7-8% del peso corporal',
    ],
    color: '#C0392B',
  },
];

export const heartChambers = [
  {
    id: 'right-atrium',
    name: 'Aurícula Derecha',
    description: 'Recibe sangre desoxigenada del cuerpo',
  },
  {
    id: 'right-ventricle',
    name: 'Ventrículo Derecho',
    description: 'Bombea sangre a los pulmones',
  },
  {
    id: 'left-atrium',
    name: 'Aurícula Izquierda',
    description: 'Recibe sangre oxigenada de los pulmones',
  },
  {
    id: 'left-ventricle',
    name: 'Ventrículo Izquierdo',
    description: 'Bombea sangre oxigenada al cuerpo',
  },
];

export const bloodCirculation = {
  systemic: {
    name: 'Circulación Sistémica',
    description: 'Lleva sangre oxigenada del corazón al cuerpo y regresa sangre desoxigenada.',
    path: 'Ventrículo izquierdo → Aorta → Arterias → Capilares → Venas → Aurícula derecha',
  },
  pulmonary: {
    name: 'Circulación Pulmonar',
    description: 'Lleva sangre desoxigenada del corazón a los pulmones y regresa sangre oxigenada.',
    path: 'Ventrículo derecho → Arteria pulmonar → Pulmones → Venas pulmonares → Aurícula izquierda',
  },
};

export const circulatoryFacts = [
  'El sistema circulatorio recorre todo el cuerpo en menos de 1 minuto',
  'El corazón comienza a latir a las 3 semanas de gestación',
  'La sangre viaja a velocidades de hasta 1 metro por segundo',
  'El cuerpo produce 2 millones de glóbulos rojos por segundo',
  'Los vasos sanguíneos se extienden más de 96,000 km',
  'El corazón genera suficiente presión para lanzar sangre a 9 metros de altura',
];
