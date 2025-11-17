import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RespiratorySystemViewerProps {
  onPartClick: (partId: string) => void;
  selectedPart: string | null;
}

const RespiratorySystemViewer = ({ onPartClick, selectedPart }: RespiratorySystemViewerProps) => {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'exhale'>('inhale');

  const isActive = (partId: string) => {
    return selectedPart === partId || hoveredPart === partId;
  };

  // Animación de respiración
  const breathingAnimation = {
    scale: breathingPhase === 'inhale' ? [1, 1.15, 1.15] : [1.15, 1, 1],
    opacity: breathingPhase === 'inhale' ? [0.7, 0.9, 0.9] : [0.9, 0.7, 0.7],
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 600" className="w-full max-w-md h-auto">
        <defs>
          {/* Gradientes para pulmones */}
          <radialGradient id="lungGradient">
            <stop offset="0%" stopColor="#E8DAEF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D7BDE2" stopOpacity="0.6" />
          </radialGradient>

          {/* Gradiente para tráquea */}
          <linearGradient id="tracheaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7FB3D5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#5DADE2" stopOpacity="0.7" />
          </linearGradient>

          {/* Gradiente para diafragma */}
          <linearGradient id="diaphragmGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A569BD" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7D3C98" stopOpacity="0.6" />
          </linearGradient>

          {/* Filtro de brillo */}
          <filter id="respiratoryGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Patrón de alvéolos */}
          <pattern id="alveoliPattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
            <circle cx="7.5" cy="7.5" r="2" fill="white" opacity="0.2" />
          </pattern>
        </defs>

        {/* Nariz */}
        <motion.g
          onClick={() => onPartClick('nose')}
          onMouseEnter={() => setHoveredPart('nose')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
        >
          <ellipse
            cx="200"
            cy="60"
            rx="15"
            ry="10"
            fill="#7FB3D5"
            stroke={isActive('nose') ? '#5DADE2' : '#7FB3D5'}
            strokeWidth={isActive('nose') ? 3 : 2}
            filter="url(#respiratoryGlow)"
            opacity={isActive('nose') ? 1 : 0.8}
          />
        </motion.g>

        {/* Tráquea */}
        <motion.g
          onClick={() => onPartClick('trachea')}
          onMouseEnter={() => setHoveredPart('trachea')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
        >
          <rect
            x="190"
            y="70"
            width="20"
            height="120"
            rx="10"
            fill="url(#tracheaGradient)"
            stroke={isActive('trachea') ? '#3498DB' : '#5DADE2'}
            strokeWidth={isActive('trachea') ? 3 : 2}
            filter="url(#respiratoryGlow)"
            opacity={isActive('trachea') ? 1 : 0.8}
          />
          {/* Anillos de cartílago */}
          {[80, 100, 120, 140, 160, 180].map((y, i) => (
            <line
              key={i}
              x1="190"
              y1={y}
              x2="210"
              y2={y}
              stroke="white"
              strokeWidth="1.5"
              opacity="0.3"
            />
          ))}
        </motion.g>

        {/* Bronquio izquierdo */}
        <motion.path
          d="M 190 190 Q 160 210 130 240"
          stroke="#3498DB"
          strokeWidth={isActive('bronchi') ? 10 : 8}
          fill="none"
          filter="url(#respiratoryGlow)"
          onClick={() => onPartClick('bronchi')}
          onMouseEnter={() => setHoveredPart('bronchi')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            strokeWidth: isActive('bronchi') ? 10 : 8,
            opacity: isActive('bronchi') ? 1 : 0.8,
          }}
        />

        {/* Bronquio derecho */}
        <motion.path
          d="M 210 190 Q 240 210 270 240"
          stroke="#3498DB"
          strokeWidth={isActive('bronchi') ? 10 : 8}
          fill="none"
          filter="url(#respiratoryGlow)"
          onClick={() => onPartClick('bronchi')}
          onMouseEnter={() => setHoveredPart('bronchi')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            strokeWidth: isActive('bronchi') ? 10 : 8,
            opacity: isActive('bronchi') ? 1 : 0.8,
          }}
        />

        {/* Pulmón Izquierdo */}
        <motion.g
          onClick={() => onPartClick('lungs')}
          onMouseEnter={() => setHoveredPart('lungs')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={breathingAnimation}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            onRepeat: () => {
              setBreathingPhase((prev) => (prev === 'inhale' ? 'exhale' : 'inhale'));
            },
          }}
        >
          <ellipse
            cx="130"
            cy="350"
            rx="70"
            ry="110"
            fill="url(#lungGradient)"
            stroke={isActive('lungs') ? '#D7BDE2' : '#E8DAEF'}
            strokeWidth={isActive('lungs') ? 3 : 2}
            filter="url(#respiratoryGlow)"
          />
          <ellipse
            cx="130"
            cy="350"
            rx="70"
            ry="110"
            fill="url(#alveoliPattern)"
          />
        </motion.g>

        {/* Pulmón Derecho */}
        <motion.g
          onClick={() => onPartClick('lungs')}
          onMouseEnter={() => setHoveredPart('lungs')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={breathingAnimation}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ellipse
            cx="270"
            cy="350"
            rx="70"
            ry="110"
            fill="url(#lungGradient)"
            stroke={isActive('lungs') ? '#D7BDE2' : '#E8DAEF'}
            strokeWidth={isActive('lungs') ? 3 : 2}
            filter="url(#respiratoryGlow)"
          />
          <ellipse
            cx="270"
            cy="350"
            rx="70"
            ry="110"
            fill="url(#alveoliPattern)"
          />
        </motion.g>

        {/* Bronquiolos en pulmón izquierdo */}
        <g opacity="0.6">
          <path
            d="M 130 240 Q 110 270 100 300"
            stroke="#5DADE2"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 130 240 Q 130 270 120 310"
            stroke="#5DADE2"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 130 240 Q 150 270 160 300"
            stroke="#5DADE2"
            strokeWidth="3"
            fill="none"
          />
        </g>

        {/* Bronquiolos en pulmón derecho */}
        <g opacity="0.6">
          <path
            d="M 270 240 Q 250 270 240 300"
            stroke="#5DADE2"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 270 240 Q 270 270 280 310"
            stroke="#5DADE2"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 270 240 Q 290 270 300 300"
            stroke="#5DADE2"
            strokeWidth="3"
            fill="none"
          />
        </g>

        {/* Diafragma */}
        <motion.ellipse
          cx="200"
          cy="480"
          rx="130"
          ry="20"
          fill="url(#diaphragmGradient)"
          stroke={isActive('diaphragm') ? '#7D3C98' : '#A569BD'}
          strokeWidth={isActive('diaphragm') ? 3 : 2}
          filter="url(#respiratoryGlow)"
          onClick={() => onPartClick('diaphragm')}
          onMouseEnter={() => setHoveredPart('diaphragm')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            cy: breathingPhase === 'inhale' ? [480, 490, 490] : [490, 480, 480],
            opacity: isActive('diaphragm') ? 1 : 0.8,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Partículas de oxígeno (inhalación) */}
        <AnimatePresence>
          {breathingPhase === 'inhale' &&
            [0, 1, 2].map((i) => (
              <motion.circle
                key={`o2-${i}`}
                r="4"
                fill="#4ECDC4"
                filter="url(#respiratoryGlow)"
                initial={{ cy: 60, cx: 200, opacity: 0 }}
                animate={{
                  cy: [60, 400],
                  cx: [200, 130 + i * 70],
                  opacity: [0, 1, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.4,
                  ease: 'linear',
                }}
              />
            ))}
        </AnimatePresence>

        {/* Partículas de dióxido de carbono (exhalación) */}
        <AnimatePresence>
          {breathingPhase === 'exhale' &&
            [0, 1, 2].map((i) => (
              <motion.circle
                key={`co2-${i}`}
                r="4"
                fill="#E74C3C"
                filter="url(#respiratoryGlow)"
                initial={{ cy: 400, cx: 130 + i * 70, opacity: 0 }}
                animate={{
                  cy: [400, 60],
                  cx: [130 + i * 70, 200],
                  opacity: [0, 1, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.4,
                  ease: 'linear',
                }}
              />
            ))}
        </AnimatePresence>

        {/* Alvéolos visibles */}
        {[
          { cx: 100, cy: 320 },
          { cx: 160, cy: 340 },
          { cx: 240, cy: 340 },
          { cx: 300, cy: 320 },
        ].map((pos, i) => (
          <motion.circle
            key={`alveoli-${i}`}
            cx={pos.cx}
            cy={pos.cy}
            r="8"
            fill="none"
            stroke="#D7BDE2"
            strokeWidth={isActive('alveoli') ? 2 : 1}
            filter="url(#respiratoryGlow)"
            onClick={() => onPartClick('alveoli')}
            onMouseEnter={() => setHoveredPart('alveoli')}
            onMouseLeave={() => setHoveredPart(null)}
            className="cursor-pointer"
            animate={{
              scale: [1, 1.2, 1],
              strokeWidth: isActive('alveoli') ? 2 : 1,
              opacity: isActive('alveoli') ? 1 : 0.6,
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default RespiratorySystemViewer;
