export interface BrainRegion {
  id: string;
  name: string;
  description: string;
  functions: string[];
  facts: string[];
  color: string;
}

export const brainRegions: BrainRegion[] = [
  {
    id: 'frontal-lobe',
    name: 'Lóbulo Frontal',
    description: 'La región más grande del cerebro, ubicada en la parte frontal.',
    functions: [
      'Razonamiento y pensamiento complejo',
      'Planificación y toma de decisiones',
      'Control de movimientos voluntarios',
      'Producción del lenguaje (área de Broca)',
      'Personalidad y comportamiento social',
      'Control de emociones',
    ],
    facts: [
      'Representa aproximadamente el 40% del cerebro',
      'No está completamente desarrollado hasta los 25 años',
      'Daños aquí pueden cambiar la personalidad',
      'Controla el movimiento del lado opuesto del cuerpo',
    ],
    color: '#FF6B9D',
  },
  {
    id: 'parietal-lobe',
    name: 'Lóbulo Parietal',
    description: 'Procesa información sensorial del cuerpo.',
    functions: [
      'Procesamiento de información táctil',
      'Percepción del dolor y temperatura',
      'Orientación espacial',
      'Integración sensorial',
      'Procesamiento de números y cálculos',
      'Coordinación ojo-mano',
    ],
    facts: [
      'Contiene la corteza somatosensorial',
      'Procesa la información en milisegundos',
      'Ayuda a saber dónde están las partes del cuerpo',
      'Fundamental para la lectura y escritura',
    ],
    color: '#C77DFF',
  },
  {
    id: 'temporal-lobe',
    name: 'Lóbulo Temporal',
    description: 'Ubicado a los lados del cerebro, procesa sonidos y memoria.',
    functions: [
      'Procesamiento auditivo',
      'Comprensión del lenguaje (área de Wernicke)',
      'Formación de memorias a largo plazo',
      'Reconocimiento facial',
      'Procesamiento de emociones',
      'Percepción visual de objetos',
    ],
    facts: [
      'Contiene el hipocampo, crucial para la memoria',
      'Procesa más de 30,000 sonidos diferentes',
      'Daños pueden causar pérdida de memoria',
      'Reconoce voces y música',
    ],
    color: '#4ECDC4',
  },
  {
    id: 'occipital-lobe',
    name: 'Lóbulo Occipital',
    description: 'La región posterior del cerebro, dedicada a la visión.',
    functions: [
      'Procesamiento de información visual',
      'Reconocimiento de colores',
      'Percepción de movimiento',
      'Reconocimiento de formas',
      'Procesamiento de profundidad',
      'Lectura e interpretación de texto',
    ],
    facts: [
      'Es el lóbulo más pequeño del cerebro',
      'Procesa señales de ambos ojos',
      'Daños pueden causar ceguera cortical',
      'Trabaja junto con el lóbulo temporal para identificar objetos',
    ],
    color: '#FFD93D',
  },
  {
    id: 'cerebellum',
    name: 'Cerebelo',
    description: 'Estructura en la parte posterior inferior del cerebro.',
    functions: [
      'Coordinación de movimientos',
      'Mantenimiento del equilibrio',
      'Control de la postura',
      'Aprendizaje motor',
      'Precisión en movimientos finos',
      'Timing y ritmo',
    ],
    facts: [
      'Contiene más neuronas que el resto del cerebro',
      'Representa solo el 10% del volumen cerebral',
      'Controla movimientos automáticos aprendidos',
      'Permite caminar sin pensar conscientemente',
    ],
    color: '#A569BD',
  },
  {
    id: 'brainstem',
    name: 'Tronco Encefálico',
    description: 'Conecta el cerebro con la médula espinal.',
    functions: [
      'Control de respiración',
      'Regulación del ritmo cardíaco',
      'Control de la presión arterial',
      'Reflejo de deglución',
      'Control del ciclo sueño-vigilia',
      'Transmisión de señales nerviosas',
    ],
    facts: [
      'Controla funciones vitales automáticas',
      'Mide solo 3 pulgadas de largo',
      'Daños aquí son generalmente fatales',
      'Contiene núcleos de nervios craneales',
    ],
    color: '#9D4EDD',
  },
  {
    id: 'limbic-system',
    name: 'Sistema Límbico',
    description: 'Conjunto de estructuras relacionadas con emociones y memoria.',
    functions: [
      'Procesamiento de emociones',
      'Formación de memorias',
      'Motivación y recompensa',
      'Olfato',
      'Control del apetito',
      'Respuesta de lucha o huida',
    ],
    facts: [
      'Incluye amígdala, hipocampo y tálamo',
      'Está presente en todos los mamíferos',
      'Procesa emociones antes que el pensamiento consciente',
      'El olfato es el sentido más conectado a la memoria',
    ],
    color: '#FF6B6B',
  },
  {
    id: 'corpus-callosum',
    name: 'Cuerpo Calloso',
    description: 'Banda de fibras nerviosas que conecta los hemisferios.',
    functions: [
      'Comunicación entre hemisferios',
      'Coordinación de movimientos bilaterales',
      'Transferencia de información sensorial',
      'Integración de funciones cognitivas',
    ],
    facts: [
      'Contiene más de 200 millones de fibras nerviosas',
      'Es más grande en músicos y zurdos',
      'Permite que los hemisferios trabajen juntos',
      'Las señales cruzan en menos de 0.1 segundos',
    ],
    color: '#6BCF7F',
  },
];

export const hemisphereInfo = {
  left: {
    name: 'Hemisferio Izquierdo',
    specializations: [
      'Lenguaje y habla',
      'Pensamiento lógico y analítico',
      'Matemáticas y ciencia',
      'Escritura',
      'Razonamiento secuencial',
    ],
    color: '#4A90E2',
  },
  right: {
    name: 'Hemisferio Derecho',
    specializations: [
      'Creatividad y arte',
      'Percepción espacial',
      'Reconocimiento facial',
      'Música y ritmo',
      'Intuición y emociones',
    ],
    color: '#E85D75',
  },
};

export const brainFacts = [
  'El cerebro humano pesa aproximadamente 1.4 kg',
  'Consume el 20% de la energía del cuerpo',
  'Contiene aproximadamente 86 mil millones de neuronas',
  'Genera alrededor de 23 watts de energía',
  'Procesa información a velocidades de hasta 120 m/s',
  'Tiene una capacidad de almacenamiento de 2.5 petabytes',
  'El 73% del cerebro es agua',
  'Puede generar 50,000 pensamientos por día',
];

export const neuralActivity = {
  name: 'Actividad Neural',
  description: 'Las neuronas se comunican mediante impulsos eléctricos y químicos.',
  process: [
    'Una neurona recibe señales de otras neuronas',
    'Si la señal es suficientemente fuerte, se genera un impulso',
    'El impulso viaja por el axón a velocidades de hasta 120 m/s',
    'Los neurotransmisores cruzan la sinapsis',
    'La neurona receptora procesa la nueva señal',
  ],
};
