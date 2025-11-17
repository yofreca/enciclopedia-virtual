import { useState } from 'react';
import { motion } from 'framer-motion';

interface CirculatorySystemViewerProps {
  onPartClick: (partId: string) => void;
  selectedPart: string | null;
}

const CirculatorySystemViewer = ({ onPartClick, selectedPart }: CirculatorySystemViewerProps) => {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const isActive = (partId: string) => {
    return selectedPart === partId || hoveredPart === partId;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 600" className="w-full max-w-md h-auto">
        <defs>
          {/* Filtro de brillo */}
          <filter id="circulatoryGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Corazón (centro) */}
        <motion.ellipse
          cx="200"
          cy="180"
          rx="35"
          ry="40"
          fill="#E74C3C"
          stroke="#C0392B"
          strokeWidth={isActive('heart') ? 4 : 2}
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('heart')}
          onMouseEnter={() => setHoveredPart('heart')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            scale: [1, 1.08, 1],
            strokeWidth: isActive('heart') ? 4 : 2,
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Aorta principal */}
        <motion.path
          d="M 200 140 L 200 100 Q 200 80 180 80 L 180 60"
          stroke="#E74C3C"
          strokeWidth={isActive('arteries') ? 10 : 8}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('arteries')}
          onMouseEnter={() => setHoveredPart('arteries')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          animate={{
            strokeWidth: isActive('arteries') ? 10 : 8,
            opacity: isActive('arteries') ? 1 : 0.8,
          }}
        />

        {/* Arterias hacia el cerebro */}
        <motion.path
          d="M 180 60 Q 160 50 140 50"
          stroke="#E74C3C"
          strokeWidth={isActive('arteries') ? 6 : 5}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('arteries')}
          onMouseEnter={() => setHoveredPart('arteries')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('arteries') ? 6 : 5,
            opacity: isActive('arteries') ? 1 : 0.8,
          }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <motion.path
          d="M 180 60 Q 200 50 220 50"
          stroke="#E74C3C"
          strokeWidth={isActive('arteries') ? 6 : 5}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('arteries')}
          onMouseEnter={() => setHoveredPart('arteries')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('arteries') ? 6 : 5,
            opacity: isActive('arteries') ? 1 : 0.8,
          }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Arterias hacia brazos */}
        <motion.path
          d="M 180 100 Q 120 120 80 140"
          stroke="#E74C3C"
          strokeWidth={isActive('arteries') ? 6 : 4}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('arteries')}
          onMouseEnter={() => setHoveredPart('arteries')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('arteries') ? 6 : 4,
            opacity: isActive('arteries') ? 1 : 0.8,
          }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <motion.path
          d="M 220 100 Q 280 120 320 140"
          stroke="#E74C3C"
          strokeWidth={isActive('arteries') ? 6 : 4}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('arteries')}
          onMouseEnter={() => setHoveredPart('arteries')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('arteries') ? 6 : 4,
            opacity: isActive('arteries') ? 1 : 0.8,
          }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Aorta descendente */}
        <motion.path
          d="M 200 220 L 200 500"
          stroke="#E74C3C"
          strokeWidth={isActive('arteries') ? 9 : 7}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('arteries')}
          onMouseEnter={() => setHoveredPart('arteries')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('arteries') ? 9 : 7,
            opacity: isActive('arteries') ? 1 : 0.8,
          }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />

        {/* Arterias hacia piernas */}
        <motion.path
          d="M 200 500 Q 170 510 140 560"
          stroke="#E74C3C"
          strokeWidth={isActive('arteries') ? 7 : 5}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('arteries')}
          onMouseEnter={() => setHoveredPart('arteries')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('arteries') ? 7 : 5,
            opacity: isActive('arteries') ? 1 : 0.8,
          }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <motion.path
          d="M 200 500 Q 230 510 260 560"
          stroke="#E74C3C"
          strokeWidth={isActive('arteries') ? 7 : 5}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('arteries')}
          onMouseEnter={() => setHoveredPart('arteries')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('arteries') ? 7 : 5,
            opacity: isActive('arteries') ? 1 : 0.8,
          }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        {/* VENAS - Retorno al corazón */}

        {/* Venas desde el cerebro */}
        <motion.path
          d="M 160 50 Q 180 70 190 100"
          stroke="#3498DB"
          strokeWidth={isActive('veins') ? 6 : 5}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('veins')}
          onMouseEnter={() => setHoveredPart('veins')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('veins') ? 6 : 5,
            opacity: isActive('veins') ? 1 : 0.7,
          }}
          transition={{ duration: 1, delay: 0.7 }}
        />

        <motion.path
          d="M 240 50 Q 220 70 210 100"
          stroke="#3498DB"
          strokeWidth={isActive('veins') ? 6 : 5}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('veins')}
          onMouseEnter={() => setHoveredPart('veins')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('veins') ? 6 : 5,
            opacity: isActive('veins') ? 1 : 0.7,
          }}
          transition={{ duration: 1, delay: 0.7 }}
        />

        {/* Venas desde brazos */}
        <motion.path
          d="M 100 140 Q 160 160 190 165"
          stroke="#3498DB"
          strokeWidth={isActive('veins') ? 6 : 4}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('veins')}
          onMouseEnter={() => setHoveredPart('veins')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('veins') ? 6 : 4,
            opacity: isActive('veins') ? 1 : 0.7,
          }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        <motion.path
          d="M 300 140 Q 240 160 210 165"
          stroke="#3498DB"
          strokeWidth={isActive('veins') ? 6 : 4}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('veins')}
          onMouseEnter={() => setHoveredPart('veins')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('veins') ? 6 : 4,
            opacity: isActive('veins') ? 1 : 0.7,
          }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Vena Cava Inferior */}
        <motion.path
          d="M 220 500 L 220 220"
          stroke="#3498DB"
          strokeWidth={isActive('veins') ? 9 : 7}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('veins')}
          onMouseEnter={() => setHoveredPart('veins')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('veins') ? 9 : 7,
            opacity: isActive('veins') ? 1 : 0.7,
          }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />

        {/* Venas desde piernas */}
        <motion.path
          d="M 160 560 Q 190 520 220 500"
          stroke="#3498DB"
          strokeWidth={isActive('veins') ? 7 : 5}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('veins')}
          onMouseEnter={() => setHoveredPart('veins')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('veins') ? 7 : 5,
            opacity: isActive('veins') ? 1 : 0.7,
          }}
          transition={{ duration: 1, delay: 1 }}
        />

        <motion.path
          d="M 240 560 Q 225 530 220 500"
          stroke="#3498DB"
          strokeWidth={isActive('veins') ? 7 : 5}
          fill="none"
          filter="url(#circulatoryGlow)"
          onClick={() => onPartClick('veins')}
          onMouseEnter={() => setHoveredPart('veins')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeWidth: isActive('veins') ? 7 : 5,
            opacity: isActive('veins') ? 1 : 0.7,
          }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Partículas de flujo en arterias */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`arterial-flow-${i}`}
            r="3"
            fill="#FFD700"
            filter="url(#circulatoryGlow)"
            animate={{
              cy: [140, 560],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.75,
              repeat: Infinity,
              ease: 'linear',
            }}
            cx="200"
          />
        ))}

        {/* Partículas de flujo en venas */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`venous-flow-${i}`}
            r="3"
            fill="#5DADE2"
            filter="url(#circulatoryGlow)"
            animate={{
              cy: [560, 180],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 1,
              repeat: Infinity,
              ease: 'linear',
            }}
            cx="220"
          />
        ))}

        {/* Indicadores de capilares */}
        {[
          { x: 140, y: 50 },
          { x: 80, y: 140 },
          { x: 320, y: 140 },
          { x: 140, y: 560 },
          { x: 260, y: 560 },
        ].map((pos, i) => (
          <motion.circle
            key={`capillary-${i}`}
            cx={pos.x}
            cy={pos.y}
            r="6"
            fill="none"
            stroke="#9B59B6"
            strokeWidth={isActive('capillaries') ? 2 : 1}
            filter="url(#circulatoryGlow)"
            onClick={() => onPartClick('capillaries')}
            onMouseEnter={() => setHoveredPart('capillaries')}
            onMouseLeave={() => setHoveredPart(null)}
            className="cursor-pointer"
            animate={{
              scale: [1, 1.2, 1],
              strokeWidth: isActive('capillaries') ? 2 : 1,
              opacity: isActive('capillaries') ? 1 : 0.5,
            }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default CirculatorySystemViewer;
