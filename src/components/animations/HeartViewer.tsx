import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeartViewerProps {
  onPartClick: (partId: string) => void;
  selectedPart: string | null;
}

const HeartViewer = ({ onPartClick, selectedPart }: HeartViewerProps) => {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const isActive = (partId: string) => {
    return selectedPart === partId || hoveredPart === partId;
  };

  // Animación de latido
  const heartbeatAnimation = {
    scale: [1, 1.08, 1, 1.05, 1],
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.svg
        viewBox="0 0 400 500"
        className="w-full max-w-lg h-auto"
        style={{ filter: 'drop-shadow(0 0 20px rgba(231, 76, 60, 0.4))' }}
        animate={heartbeatAnimation}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <defs>
          {/* Gradientes para sangre oxigenada */}
          <linearGradient id="oxygenatedBlood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E74C3C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C0392B" stopOpacity="0.7" />
          </linearGradient>

          {/* Gradientes para sangre desoxigenada */}
          <linearGradient id="deoxygenatedBlood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5DADE2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3498DB" stopOpacity="0.7" />
          </linearGradient>

          {/* Filtro de brillo */}
          <filter id="heartGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Patrón de músculo cardíaco */}
          <pattern id="muscleTexture" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="10" y2="10" stroke="white" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        </defs>

        {/* Vena Cava Superior */}
        <motion.path
          d="M 200 50 L 200 100"
          stroke="#3498DB"
          strokeWidth="20"
          fill="none"
          filter="url(#heartGlow)"
          onClick={() => onPartClick('veins')}
          onMouseEnter={() => setHoveredPart('veins')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            strokeWidth: isActive('veins') ? 24 : 20,
            opacity: isActive('veins') ? 1 : 0.8,
          }}
        />

        {/* Aorta */}
        <motion.path
          d="M 200 100 Q 170 80 150 80 L 150 50"
          stroke="#E74C3C"
          strokeWidth="22"
          fill="none"
          filter="url(#heartGlow)"
          onClick={() => onPartClick('arteries')}
          onMouseEnter={() => setHoveredPart('arteries')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            strokeWidth: isActive('arteries') ? 26 : 22,
            opacity: isActive('arteries') ? 1 : 0.8,
          }}
        />

        {/* Arteria Pulmonar */}
        <motion.path
          d="M 200 100 Q 230 80 250 80 L 250 50"
          stroke="#3498DB"
          strokeWidth="18"
          fill="none"
          filter="url(#heartGlow)"
          onClick={() => onPartClick('arteries')}
          onMouseEnter={() => setHoveredPart('arteries')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            strokeWidth: isActive('arteries') ? 22 : 18,
            opacity: isActive('arteries') ? 1 : 0.8,
          }}
        />

        {/* Aurícula Derecha */}
        <motion.ellipse
          cx="230"
          cy="160"
          rx="50"
          ry="45"
          fill="url(#deoxygenatedBlood)"
          stroke="#3498DB"
          strokeWidth={isActive('heart') ? 4 : 2}
          filter="url(#heartGlow)"
          onClick={() => onPartClick('heart')}
          onMouseEnter={() => setHoveredPart('heart')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            strokeWidth: isActive('heart') ? 4 : 2,
            opacity: isActive('heart') ? 1 : 0.85,
          }}
        />

        {/* Aurícula Izquierda */}
        <motion.ellipse
          cx="170"
          cy="160"
          rx="50"
          ry="45"
          fill="url(#oxygenatedBlood)"
          stroke="#E74C3C"
          strokeWidth={isActive('heart') ? 4 : 2}
          filter="url(#heartGlow)"
          onClick={() => onPartClick('heart')}
          onMouseEnter={() => setHoveredPart('heart')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            strokeWidth: isActive('heart') ? 4 : 2,
            opacity: isActive('heart') ? 1 : 0.85,
          }}
        />

        {/* Ventrículo Derecho */}
        <motion.path
          d="M 200 200 Q 250 240 240 320 L 200 380 L 200 200 Z"
          fill="url(#deoxygenatedBlood)"
          stroke="#3498DB"
          strokeWidth={isActive('heart') ? 4 : 2}
          filter="url(#heartGlow)"
          onClick={() => onPartClick('heart')}
          onMouseEnter={() => setHoveredPart('heart')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            strokeWidth: isActive('heart') ? 4 : 2,
            opacity: isActive('heart') ? 1 : 0.85,
          }}
        />

        {/* Ventrículo Izquierdo */}
        <motion.path
          d="M 200 200 Q 150 240 160 320 L 200 380 L 200 200 Z"
          fill="url(#oxygenatedBlood)"
          stroke="#E74C3C"
          strokeWidth={isActive('heart') ? 4 : 2}
          filter="url(#heartGlow)"
          onClick={() => onPartClick('heart')}
          onMouseEnter={() => setHoveredPart('heart')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            strokeWidth: isActive('heart') ? 4 : 2,
            opacity: isActive('heart') ? 1 : 0.85,
          }}
        />

        {/* Líneas de válvulas */}
        <line x1="150" y1="200" x2="250" y2="200" stroke="white" strokeWidth="3" opacity="0.4" />

        {/* Partículas de flujo sanguíneo - Vena Cava */}
        <AnimatePresence>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`vena-${i}`}
              r="4"
              fill="#5DADE2"
              filter="url(#heartGlow)"
              animate={{
                cy: [50, 160],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.4,
                repeat: Infinity,
                ease: 'linear',
              }}
              cx="200"
            />
          ))}
        </AnimatePresence>

        {/* Partículas de flujo sanguíneo - Aorta */}
        <AnimatePresence>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`aorta-${i}`}
              r="5"
              fill="#E74C3C"
              filter="url(#heartGlow)"
              animate={{
                y: [180, 50],
                x: [170, 150],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.2,
                delay: 0.6 + i * 0.4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </AnimatePresence>

        {/* Partículas de flujo sanguíneo - Arteria Pulmonar */}
        <AnimatePresence>
          {[0, 1].map((i) => (
            <motion.circle
              key={`pulmonar-${i}`}
              r="4"
              fill="#5DADE2"
              filter="url(#heartGlow)"
              animate={{
                y: [180, 50],
                x: [230, 250],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.2,
                delay: 0.3 + i * 0.6,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </AnimatePresence>

        {/* Etiquetas */}
        <text x="200" y="450" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
          Corazón
        </text>

        {/* Flechas de dirección */}
        <defs>
          <marker
            id="arrowRed"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#E74C3C" />
          </marker>
          <marker
            id="arrowBlue"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#3498DB" />
          </marker>
        </defs>
      </motion.svg>
    </div>
  );
};

export default HeartViewer;
