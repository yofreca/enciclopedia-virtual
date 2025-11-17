import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Constellation } from '../../data/constellationsData';

interface ConstellationViewerProps {
  selectedConstellation: Constellation | null;
}

const ConstellationViewer = ({ selectedConstellation }: ConstellationViewerProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  // Generar estrellas de fondo aleatorias
  const backgroundStars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.5 + 0.3,
    twinkleDelay: Math.random() * 3,
  }));

  return (
    <div
      ref={canvasRef}
      className="relative w-full h-full bg-gradient-to-b from-space-900 via-[#0a0520] to-space-900 overflow-hidden"
    >
      {/* Estrellas de fondo */}
      {backgroundStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: star.twinkleDelay,
          }}
        />
      ))}

      {/* Constelación seleccionada */}
      <AnimatePresence mode="wait">
        {selectedConstellation && (
          <motion.svg
            key={selectedConstellation.id}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <defs>
              {/* Gradiente para las líneas */}
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#9B59B6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#4A90E2" stopOpacity="0.3" />
              </linearGradient>

              {/* Filtro de brillo para estrellas */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Líneas de conexión */}
            {selectedConstellation.connections.map((connection, idx) => {
              const [startIdx, endIdx] = connection;
              const start = selectedConstellation.stars[startIdx];
              const end = selectedConstellation.stars[endIdx];

              return (
                <motion.line
                  key={`line-${idx}`}
                  x1={`${start.x}%`}
                  y1={`${start.y}%`}
                  x2={`${end.x}%`}
                  y2={`${end.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: idx * 0.1,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}

            {/* Estrellas de la constelación */}
            {selectedConstellation.stars.map((star, idx) => {
              const isMain = selectedConstellation.mainStars?.includes(idx);
              const isHovered = hoveredStar === idx;

              return (
                <g key={`star-${idx}`}>
                  {/* Halo de la estrella */}
                  <motion.circle
                    cx={`${star.x}%`}
                    cy={`${star.y}%`}
                    r={isMain ? 12 : 8}
                    fill="url(#starGlow)"
                    opacity="0.3"
                    initial={{ scale: 0 }}
                    animate={{ scale: isHovered ? 1.5 : 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  />

                  {/* Estrella principal */}
                  <motion.circle
                    cx={`${star.x}%`}
                    cy={`${star.y}%`}
                    r={star.brightness * (isMain ? 5 : 3.5)}
                    fill={isMain ? '#FFD700' : '#FFFFFF'}
                    filter="url(#glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isHovered ? 1.3 : 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.05,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    onMouseEnter={() => setHoveredStar(idx)}
                    onMouseLeave={() => setHoveredStar(null)}
                    className="cursor-pointer"
                  />

                  {/* Destellos */}
                  {isMain && (
                    <>
                      <motion.line
                        x1={`${star.x}%`}
                        y1={`${star.y - 1}%`}
                        x2={`${star.x}%`}
                        y2={`${star.y + 1}%`}
                        stroke="#FFD700"
                        strokeWidth="1"
                        opacity="0.6"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.2,
                        }}
                      />
                      <motion.line
                        x1={`${star.x - 1}%`}
                        y1={`${star.y}%`}
                        x2={`${star.x + 1}%`}
                        y2={`${star.y}%`}
                        stroke="#FFD700"
                        strokeWidth="1"
                        opacity="0.6"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.2 + 0.5,
                        }}
                      />
                    </>
                  )}
                </g>
              );
            })}

            {/* Gradiente radial para halo de estrellas */}
            <defs>
              <radialGradient id="starGlow">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4A90E2" stopOpacity="0" />
              </radialGradient>
            </defs>
          </motion.svg>
        )}
      </AnimatePresence>

      {/* Nombre de la constelación en el centro */}
      <AnimatePresence mode="wait">
        {selectedConstellation && (
          <motion.div
            key={selectedConstellation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
          >
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-gold mb-2">
              {selectedConstellation.name}
            </h2>
            <p className="text-xl text-gray-400 italic">
              {selectedConstellation.nameEnglish}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConstellationViewer;
