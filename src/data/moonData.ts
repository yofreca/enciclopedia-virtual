export interface MoonPhase {
  id: number;
  name: string;
  nameEnglish: string;
  illumination: number; // 0 a 1 (0 = nueva, 1 = llena)
  angle: number; // Ángulo en grados (0-360)
  description: string;
  visibility: string;
  bestTime: string;
}

export const moonPhases: MoonPhase[] = [
  {
    id: 0,
    name: 'Luna Nueva',
    nameEnglish: 'New Moon',
    illumination: 0,
    angle: 0,
    description: 'La Luna está entre la Tierra y el Sol. La cara iluminada apunta hacia el Sol y no podemos verla desde la Tierra.',
    visibility: 'No visible',
    bestTime: 'No visible en el cielo nocturno'
  },
  {
    id: 1,
    name: 'Luna Creciente',
    nameEnglish: 'Waxing Crescent',
    illumination: 0.25,
    angle: 45,
    description: 'Una pequeña porción iluminada comienza a aparecer en el lado derecho. La Luna está "creciendo".',
    visibility: 'Visible al atardecer',
    bestTime: 'Primeras horas de la noche'
  },
  {
    id: 2,
    name: 'Cuarto Creciente',
    nameEnglish: 'First Quarter',
    illumination: 0.5,
    angle: 90,
    description: 'La mitad derecha de la Luna está iluminada. Es el "primer cuarto" del ciclo lunar completo.',
    visibility: 'Visible durante la tarde',
    bestTime: 'Desde el mediodía hasta la medianoche'
  },
  {
    id: 3,
    name: 'Gibosa Creciente',
    nameEnglish: 'Waxing Gibbous',
    illumination: 0.75,
    angle: 135,
    description: 'Más de la mitad está iluminada. La palabra "gibosa" significa "jorobada" o "convexa".',
    visibility: 'Visible la mayor parte de la noche',
    bestTime: 'Desde la tarde hasta el amanecer'
  },
  {
    id: 4,
    name: 'Luna Llena',
    nameEnglish: 'Full Moon',
    illumination: 1,
    angle: 180,
    description: 'La Tierra está entre el Sol y la Luna. Toda la cara visible está completamente iluminada.',
    visibility: 'Visible toda la noche',
    bestTime: 'Desde el atardecer hasta el amanecer'
  },
  {
    id: 5,
    name: 'Gibosa Menguante',
    nameEnglish: 'Waning Gibbous',
    illumination: 0.75,
    angle: 225,
    description: 'La Luna comienza a "menguar". Más de la mitad sigue iluminada pero el lado izquierdo empieza a oscurecerse.',
    visibility: 'Visible la mayor parte de la noche',
    bestTime: 'Desde el anochecer hasta el amanecer'
  },
  {
    id: 6,
    name: 'Cuarto Menguante',
    nameEnglish: 'Last Quarter',
    illumination: 0.5,
    angle: 270,
    description: 'La mitad izquierda está iluminada. Es el "último cuarto" del ciclo lunar.',
    visibility: 'Visible durante la madrugada',
    bestTime: 'Desde la medianoche hasta el mediodía'
  },
  {
    id: 7,
    name: 'Luna Menguante',
    nameEnglish: 'Waning Crescent',
    illumination: 0.25,
    angle: 315,
    description: 'Solo una pequeña porción del lado izquierdo está iluminada. Pronto será Luna Nueva nuevamente.',
    visibility: 'Visible al amanecer',
    bestTime: 'Últimas horas de la noche'
  }
];

export const moonInfo = {
  diameter: '3,474 km',
  distanceFromEarth: '384,400 km',
  orbitalPeriod: '27.3 días',
  rotationPeriod: '27.3 días (rotación sincrónica)',
  gravity: '1.62 m/s² (16.6% de la Tierra)',
  temperature: '-173°C a 127°C',
  age: '4,500 millones de años'
};
