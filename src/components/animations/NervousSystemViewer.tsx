import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NervousSystemViewerProps {
  onPartClick: (partId: string) => void;
  selectedPart: string | null;
}

const NervousSystemViewer = ({ onPartClick, selectedPart }: NervousSystemViewerProps) => {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  // Generar impulsos nerviosos aleatorios
  const nerveImpulses = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: i * 0.6,
      duration: 2 + Math.random() * 1,
    }));
  }, []);

  const getPartColor = (partId: string) => {
    const colors: Record<string, string> = {
      brain: '#FF6B9D',
      cerebellum: '#C77DFF',
      brainstem: '#9D4EDD',
      'spinal-cord': '#7209B7',
      'peripheral-nerves': '#4A90E2',
    };
    return colors[partId] || '#4A90E2';
  };

  const isActive = (partId: string) => {
    return selectedPart === partId || hoveredPart === partId;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 600"
        className="w-full max-w-md h-auto"
        style={{ filter: 'drop-shadow(0 0 20px rgba(74, 144, 226, 0.3))' }}
      >
        <defs>
          {/* Gradientes para cada parte */}
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF6B9D" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="cerebellumGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C77DFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C77DFF" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="brainstemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="spinalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7209B7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7209B7" stopOpacity="0.4" />
          </linearGradient>

          {/* Filtro de brillo */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Patrón para textura neuronal */}
          <pattern id="neuralTexture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="white" opacity="0.3" />
          </pattern>
        </defs>

        {/* Cerebro */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.ellipse
            cx="200"
            cy="100"
            rx="90"
            ry="70"
            fill="url(#brainGradient)"
            stroke={getPartColor('brain')}
            strokeWidth={isActive('brain') ? 4 : 2}
            filter="url(#glow)"
            onClick={() => onPartClick('brain')}
            onMouseEnter={() => setHoveredPart('brain')}
            onMouseLeave={() => setHoveredPart(null)}
            className="cursor-pointer transition-all"
            whileHover={{ scale: 1.05 }}
            animate={{
              strokeWidth: isActive('brain') ? 4 : 2,
              opacity: isActive('brain') ? 1 : 0.8,
            }}
          />
          {/* Circunvoluciones cerebrales */}
          <path
            d="M 140 90 Q 150 85 160 90 T 180 90 T 200 90"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M 200 90 Q 210 85 220 90 T 240 90 T 260 90"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M 150 110 Q 160 105 170 110 T 190 110 T 210 110"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M 210 110 Q 220 105 230 110 T 250 110"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          />
        </motion.g>

        {/* Cerebelo */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.ellipse
            cx="200"
            cy="155"
            rx="55"
            ry="35"
            fill="url(#cerebellumGradient)"
            stroke={getPartColor('cerebellum')}
            strokeWidth={isActive('cerebellum') ? 4 : 2}
            filter="url(#glow)"
            onClick={() => onPartClick('cerebellum')}
            onMouseEnter={() => setHoveredPart('cerebellum')}
            onMouseLeave={() => setHoveredPart(null)}
            className="cursor-pointer transition-all"
            whileHover={{ scale: 1.05 }}
            animate={{
              strokeWidth: isActive('cerebellum') ? 4 : 2,
              opacity: isActive('cerebellum') ? 1 : 0.8,
            }}
          />
          {/* Líneas del cerebelo */}
          <path
            d="M 160 150 Q 180 145 200 150 Q 220 145 240 150"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
        </motion.g>

        {/* Tronco encefálico */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.rect
            x="180"
            y="180"
            width="40"
            height="60"
            rx="10"
            fill="url(#brainstemGradient)"
            stroke={getPartColor('brainstem')}
            strokeWidth={isActive('brainstem') ? 4 : 2}
            filter="url(#glow)"
            onClick={() => onPartClick('brainstem')}
            onMouseEnter={() => setHoveredPart('brainstem')}
            onMouseLeave={() => setHoveredPart(null)}
            className="cursor-pointer transition-all"
            whileHover={{ scale: 1.05 }}
            animate={{
              strokeWidth: isActive('brainstem') ? 4 : 2,
              opacity: isActive('brainstem') ? 1 : 0.8,
            }}
          />
        </motion.g>

        {/* Médula espinal */}
        <motion.g
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.rect
            x="185"
            y="240"
            width="30"
            height="280"
            rx="15"
            fill="url(#spinalGradient)"
            stroke={getPartColor('spinal-cord')}
            strokeWidth={isActive('spinal-cord') ? 4 : 2}
            filter="url(#glow)"
            onClick={() => onPartClick('spinal-cord')}
            onMouseEnter={() => setHoveredPart('spinal-cord')}
            onMouseLeave={() => setHoveredPart(null)}
            className="cursor-pointer transition-all"
            whileHover={{ scale: 1.02 }}
            animate={{
              strokeWidth: isActive('spinal-cord') ? 4 : 2,
              opacity: isActive('spinal-cord') ? 1 : 0.8,
            }}
          />
          {/* Segmentos vertebrales */}
          {[280, 320, 360, 400, 440, 480].map((y, i) => (
            <line
              key={i}
              x1="185"
              y1={y}
              x2="215"
              y2={y}
              stroke="white"
              strokeWidth="1"
              opacity="0.2"
            />
          ))}
        </motion.g>

        {/* Nervios periféricos */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Nervios del lado izquierdo */}
          {[280, 340, 400, 460].map((y, i) => (
            <motion.path
              key={`left-${i}`}
              d={`M 185 ${y} Q 120 ${y + 10} 60 ${y + 30}`}
              stroke={getPartColor('peripheral-nerves')}
              strokeWidth={isActive('peripheral-nerves') ? 3 : 1.5}
              fill="none"
              filter="url(#glow)"
              onClick={() => onPartClick('peripheral-nerves')}
              onMouseEnter={() => setHoveredPart('peripheral-nerves')}
              onMouseLeave={() => setHoveredPart(null)}
              className="cursor-pointer transition-all"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: isActive('peripheral-nerves') ? 1 : 0.6,
                strokeWidth: isActive('peripheral-nerves') ? 3 : 1.5,
              }}
              transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
            />
          ))}

          {/* Nervios del lado derecho */}
          {[280, 340, 400, 460].map((y, i) => (
            <motion.path
              key={`right-${i}`}
              d={`M 215 ${y} Q 280 ${y + 10} 340 ${y + 30}`}
              stroke={getPartColor('peripheral-nerves')}
              strokeWidth={isActive('peripheral-nerves') ? 3 : 1.5}
              fill="none"
              filter="url(#glow)"
              onClick={() => onPartClick('peripheral-nerves')}
              onMouseEnter={() => setHoveredPart('peripheral-nerves')}
              onMouseLeave={() => setHoveredPart(null)}
              className="cursor-pointer transition-all"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: isActive('peripheral-nerves') ? 1 : 0.6,
                strokeWidth: isActive('peripheral-nerves') ? 3 : 1.5,
              }}
              transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
            />
          ))}
        </motion.g>

        {/* Impulsos nerviosos animados */}
        <AnimatePresence>
          {nerveImpulses.map((impulse) => (
            <motion.circle
              key={impulse.id}
              r="4"
              fill="#00FFFF"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                cy: [100, 520],
              }}
              transition={{
                duration: impulse.duration,
                delay: impulse.delay,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'linear',
              }}
              cx="200"
            />
          ))}
        </AnimatePresence>

        {/* Impulsos en nervios periféricos */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`nerve-impulse-${i}`}
            r="3"
            fill="#4A90E2"
            filter="url(#glow)"
            animate={{
              opacity: [0, 0.8, 0.8, 0],
              cx: [200, 60],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
            cy={280 + i * 60}
          />
        ))}
      </svg>
    </div>
  );
};

export default NervousSystemViewer;
