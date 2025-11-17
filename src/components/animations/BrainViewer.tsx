import { useState } from 'react';
import { motion } from 'framer-motion';

interface BrainViewerProps {
  onRegionClick: (regionId: string) => void;
  selectedRegion: string | null;
}

const BrainViewer = ({ onRegionClick, selectedRegion }: BrainViewerProps) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const isActive = (regionId: string) => {
    return selectedRegion === regionId || hoveredRegion === regionId;
  };

  const getRegionColor = (regionId: string) => {
    const colors: Record<string, string> = {
      'frontal-lobe': '#FF6B9D',
      'parietal-lobe': '#C77DFF',
      'temporal-lobe': '#4ECDC4',
      'occipital-lobe': '#FFD93D',
      'cerebellum': '#A569BD',
      'brainstem': '#9D4EDD',
      'limbic-system': '#FF6B6B',
      'corpus-callosum': '#6BCF7F',
    };
    return colors[regionId] || '#4A90E2';
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 500 400"
        className="w-full max-w-3xl h-auto"
        style={{ filter: 'drop-shadow(0 0 20px rgba(74, 144, 226, 0.3))' }}
      >
        <defs>
          {/* Gradientes para cada región */}
          <linearGradient id="frontalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FF6B9D" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="parietalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C77DFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C77DFF" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="temporalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="occipitalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD93D" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFD93D" stopOpacity="0.6" />
          </linearGradient>

          {/* Filtro de brillo */}
          <filter id="brainGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Patrón de circunvoluciones */}
          <pattern id="brainTexture" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path
              d="M 5 15 Q 10 10 15 15 T 25 15"
              stroke="white"
              strokeWidth="1"
              fill="none"
              opacity="0.2"
            />
          </pattern>
        </defs>

        {/* Lóbulo Frontal */}
        <motion.path
          d="M 100 150 Q 80 100 120 80 Q 160 60 200 70 Q 230 75 250 90 L 240 180 Q 220 200 180 210 L 150 200 Q 120 185 100 150 Z"
          fill="url(#frontalGradient)"
          stroke={getRegionColor('frontal-lobe')}
          strokeWidth={isActive('frontal-lobe') ? 4 : 2}
          filter="url(#brainGlow)"
          onClick={() => onRegionClick('frontal-lobe')}
          onMouseEnter={() => setHoveredRegion('frontal-lobe')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all"
          animate={{
            opacity: isActive('frontal-lobe') ? 1 : 0.85,
            strokeWidth: isActive('frontal-lobe') ? 4 : 2,
          }}
        />
        <pattern href="#brainTexture" />

        {/* Lóbulo Parietal */}
        <motion.path
          d="M 240 180 L 250 90 Q 280 85 310 95 Q 340 110 350 140 L 340 200 Q 320 220 280 230 L 240 180 Z"
          fill="url(#parietalGradient)"
          stroke={getRegionColor('parietal-lobe')}
          strokeWidth={isActive('parietal-lobe') ? 4 : 2}
          filter="url(#brainGlow)"
          onClick={() => onRegionClick('parietal-lobe')}
          onMouseEnter={() => setHoveredRegion('parietal-lobe')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all"
          animate={{
            opacity: isActive('parietal-lobe') ? 1 : 0.85,
            strokeWidth: isActive('parietal-lobe') ? 4 : 2,
          }}
        />

        {/* Lóbulo Temporal */}
        <motion.path
          d="M 150 200 L 180 210 Q 200 220 220 230 L 230 270 Q 220 290 190 300 Q 160 295 140 280 L 130 240 Q 135 215 150 200 Z"
          fill="url(#temporalGradient)"
          stroke={getRegionColor('temporal-lobe')}
          strokeWidth={isActive('temporal-lobe') ? 4 : 2}
          filter="url(#brainGlow)"
          onClick={() => onRegionClick('temporal-lobe')}
          onMouseEnter={() => setHoveredRegion('temporal-lobe')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all"
          animate={{
            opacity: isActive('temporal-lobe') ? 1 : 0.85,
            strokeWidth: isActive('temporal-lobe') ? 4 : 2,
          }}
        />

        {/* Lóbulo Occipital */}
        <motion.path
          d="M 340 200 L 350 140 Q 370 145 390 165 Q 400 190 395 220 Q 385 245 365 255 L 340 245 Q 330 220 340 200 Z"
          fill="url(#occipitalGradient)"
          stroke={getRegionColor('occipital-lobe')}
          strokeWidth={isActive('occipital-lobe') ? 4 : 2}
          filter="url(#brainGlow)"
          onClick={() => onRegionClick('occipital-lobe')}
          onMouseEnter={() => setHoveredRegion('occipital-lobe')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all"
          animate={{
            opacity: isActive('occipital-lobe') ? 1 : 0.85,
            strokeWidth: isActive('occipital-lobe') ? 4 : 2,
          }}
        />

        {/* Cerebelo */}
        <motion.ellipse
          cx="340"
          cy="290"
          rx="55"
          ry="45"
          fill="#A569BD"
          fillOpacity="0.8"
          stroke={getRegionColor('cerebellum')}
          strokeWidth={isActive('cerebellum') ? 4 : 2}
          filter="url(#brainGlow)"
          onClick={() => onRegionClick('cerebellum')}
          onMouseEnter={() => setHoveredRegion('cerebellum')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all"
          animate={{
            opacity: isActive('cerebellum') ? 1 : 0.85,
            strokeWidth: isActive('cerebellum') ? 4 : 2,
          }}
        />
        {/* Líneas del cerebelo */}
        {[270, 280, 290, 300, 310].map((y, i) => (
          <line
            key={i}
            x1="295"
            y1={y}
            x2="385"
            y2={y}
            stroke="white"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}

        {/* Tronco encefálico */}
        <motion.rect
          x="280"
          y="320"
          width="35"
          height="60"
          rx="8"
          fill="#9D4EDD"
          fillOpacity="0.8"
          stroke={getRegionColor('brainstem')}
          strokeWidth={isActive('brainstem') ? 4 : 2}
          filter="url(#brainGlow)"
          onClick={() => onRegionClick('brainstem')}
          onMouseEnter={() => setHoveredRegion('brainstem')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all"
          animate={{
            opacity: isActive('brainstem') ? 1 : 0.85,
            strokeWidth: isActive('brainstem') ? 4 : 2,
          }}
        />

        {/* Sistema Límbico (representado internamente) */}
        <motion.ellipse
          cx="220"
          cy="170"
          rx="30"
          ry="25"
          fill="#FF6B6B"
          fillOpacity="0.7"
          stroke={getRegionColor('limbic-system')}
          strokeWidth={isActive('limbic-system') ? 4 : 2}
          filter="url(#brainGlow)"
          onClick={() => onRegionClick('limbic-system')}
          onMouseEnter={() => setHoveredRegion('limbic-system')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all"
          animate={{
            opacity: isActive('limbic-system') ? 1 : 0.6,
            strokeWidth: isActive('limbic-system') ? 4 : 2,
          }}
        />

        {/* Cuerpo Calloso (banda central) */}
        <motion.ellipse
          cx="250"
          cy="150"
          rx="60"
          ry="8"
          fill="#6BCF7F"
          fillOpacity="0.7"
          stroke={getRegionColor('corpus-callosum')}
          strokeWidth={isActive('corpus-callosum') ? 3 : 2}
          filter="url(#brainGlow)"
          onClick={() => onRegionClick('corpus-callosum')}
          onMouseEnter={() => setHoveredRegion('corpus-callosum')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all"
          animate={{
            opacity: isActive('corpus-callosum') ? 1 : 0.6,
            strokeWidth: isActive('corpus-callosum') ? 3 : 2,
          }}
        />

        {/* Circunvoluciones cerebrales */}
        <g opacity="0.3" pointerEvents="none">
          <path d="M 120 100 Q 135 95 150 100" stroke="white" strokeWidth="2" fill="none" />
          <path d="M 160 90 Q 175 85 190 90" stroke="white" strokeWidth="2" fill="none" />
          <path d="M 200 85 Q 215 80 230 85" stroke="white" strokeWidth="2" fill="none" />
          <path d="M 260 100 Q 275 95 290 100" stroke="white" strokeWidth="2" fill="none" />
          <path d="M 300 110 Q 315 105 330 110" stroke="white" strokeWidth="2" fill="none" />
          <path d="M 130 140 Q 145 135 160 140" stroke="white" strokeWidth="2" fill="none" />
          <path d="M 170 150 Q 185 145 200 150" stroke="white" strokeWidth="2" fill="none" />
        </g>

        {/* Impulsos neuronales animados */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={`impulse-${i}`}
            r="3"
            fill="#00FFFF"
            filter="url(#brainGlow)"
            animate={{
              cx: [120 + i * 40, 340 + i * 10],
              cy: [120 + i * 20, 200 + i * 30],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              delay: i * 0.4,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'linear',
            }}
          />
        ))}

        {/* Etiqueta de vista */}
        <text x="250" y="30" textAnchor="middle" fill="#888" fontSize="12">
          Vista lateral (hemisferio izquierdo)
        </text>
      </svg>
    </div>
  );
};

export default BrainViewer;
