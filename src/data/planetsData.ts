export interface PlanetData {
  name: string;
  radius: number;
  distance: number;
  orbitSpeed: number;
  rotationSpeed: number;
  color: string;
  info: {
    description: string;
    diameter: string;
    distanceFromSun: string;
    orbitalPeriod: string;
    dayLength: string;
    temperature: string;
    moons: string;
  };
}

export const planetsData: PlanetData[] = [
  {
    name: 'Mercurio',
    radius: 0.4,
    distance: 4,
    orbitSpeed: 0.04,
    rotationSpeed: 0.004,
    color: '#8C7853',
    info: {
      description: 'El planeta más pequeño y cercano al Sol. Su superficie está cubierta de cráteres.',
      diameter: '4,879 km',
      distanceFromSun: '57.9 millones de km',
      orbitalPeriod: '88 días terrestres',
      dayLength: '59 días terrestres',
      temperature: '-173°C a 427°C',
      moons: '0'
    }
  },
  {
    name: 'Venus',
    radius: 0.9,
    distance: 7,
    orbitSpeed: 0.015,
    rotationSpeed: 0.002,
    color: '#FFC649',
    info: {
      description: 'El planeta más caliente del sistema solar debido a su densa atmósfera de CO2.',
      diameter: '12,104 km',
      distanceFromSun: '108.2 millones de km',
      orbitalPeriod: '225 días terrestres',
      dayLength: '243 días terrestres',
      temperature: '462°C promedio',
      moons: '0'
    }
  },
  {
    name: 'Tierra',
    radius: 1,
    distance: 10,
    orbitSpeed: 0.01,
    rotationSpeed: 0.02,
    color: '#4A90E2',
    info: {
      description: 'Nuestro hogar. El único planeta conocido con vida y agua líquida en su superficie.',
      diameter: '12,742 km',
      distanceFromSun: '149.6 millones de km',
      orbitalPeriod: '365.25 días',
      dayLength: '24 horas',
      temperature: '-88°C a 58°C',
      moons: '1 (Luna)'
    }
  },
  {
    name: 'Marte',
    radius: 0.5,
    distance: 15,
    orbitSpeed: 0.008,
    rotationSpeed: 0.018,
    color: '#E27B58',
    info: {
      description: 'El planeta rojo. Tiene los volcanes más grandes del sistema solar.',
      diameter: '6,779 km',
      distanceFromSun: '227.9 millones de km',
      orbitalPeriod: '687 días terrestres',
      dayLength: '24.6 horas',
      temperature: '-87°C a -5°C',
      moons: '2 (Fobos y Deimos)'
    }
  },
  {
    name: 'Júpiter',
    radius: 2.5,
    distance: 25,
    orbitSpeed: 0.002,
    rotationSpeed: 0.04,
    color: '#C88B3A',
    info: {
      description: 'El planeta más grande del sistema solar. Es un gigante gaseoso con la Gran Mancha Roja.',
      diameter: '139,820 km',
      distanceFromSun: '778.5 millones de km',
      orbitalPeriod: '12 años terrestres',
      dayLength: '10 horas',
      temperature: '-108°C promedio',
      moons: '95 confirmadas'
    }
  },
  {
    name: 'Saturno',
    radius: 2,
    distance: 35,
    orbitSpeed: 0.0009,
    rotationSpeed: 0.038,
    color: '#FAD5A5',
    info: {
      description: 'Famoso por sus espectaculares anillos compuestos de hielo y roca.',
      diameter: '116,460 km',
      distanceFromSun: '1,434 millones de km',
      orbitalPeriod: '29 años terrestres',
      dayLength: '10.7 horas',
      temperature: '-138°C promedio',
      moons: '146 confirmadas'
    }
  },
  {
    name: 'Urano',
    radius: 1.6,
    distance: 45,
    orbitSpeed: 0.0004,
    rotationSpeed: 0.03,
    color: '#4FD0E7',
    info: {
      description: 'Un gigante de hielo que gira de lado. Su eje de rotación está inclinado 98 grados.',
      diameter: '50,724 km',
      distanceFromSun: '2,871 millones de km',
      orbitalPeriod: '84 años terrestres',
      dayLength: '17.2 horas',
      temperature: '-197°C promedio',
      moons: '27 conocidas'
    }
  },
  {
    name: 'Neptuno',
    radius: 1.5,
    distance: 55,
    orbitSpeed: 0.0001,
    rotationSpeed: 0.032,
    color: '#4169E1',
    info: {
      description: 'El planeta más lejano del Sol. Tiene los vientos más fuertes del sistema solar.',
      diameter: '49,244 km',
      distanceFromSun: '4,495 millones de km',
      orbitalPeriod: '165 años terrestres',
      dayLength: '16 horas',
      temperature: '-201°C promedio',
      moons: '14 conocidas'
    }
  }
];

export const sunData = {
  name: 'Sol',
  radius: 3,
  color: '#FDB813',
  info: {
    description: 'Nuestra estrella. Contiene el 99.86% de la masa total del sistema solar.',
    diameter: '1,392,000 km',
    temperature: '5,500°C en superficie, 15 millones °C en núcleo',
    composition: '73% hidrógeno, 25% helio, 2% otros elementos',
    age: '4,600 millones de años'
  }
};
