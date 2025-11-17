import { motion } from 'framer-motion';

const SynapseAnimation = () => {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <svg viewBox="0 0 500 300" className="w-full max-w-2xl h-auto">
        <defs>
          {/* Gradiente para neuronas */}
          <linearGradient id="neuronGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0.8" />
          </linearGradient>

          {/* Filtro de brillo */}
          <filter id="synapseGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Neurona presináptica */}
        <g>
          {/* Cuerpo neuronal */}
          <ellipse
            cx="100"
            cy="150"
            rx="40"
            ry="35"
            fill="url(#neuronGradient)"
            stroke="#4A90E2"
            strokeWidth="2"
            filter="url(#synapseGlow)"
          />
          {/* Núcleo */}
          <circle cx="100" cy="150" r="15" fill="#6B9FDB" opacity="0.6" />

          {/* Axón */}
          <rect
            x="140"
            y="145"
            width="110"
            height="10"
            fill="#4A90E2"
            opacity="0.7"
            rx="5"
          />

          {/* Terminal axónica */}
          <ellipse
            cx="250"
            cy="150"
            rx="20"
            ry="25"
            fill="#4A90E2"
            opacity="0.8"
          />
        </g>

        {/* Espacio sináptico */}
        <rect
          x="265"
          y="120"
          width="20"
          height="60"
          fill="rgba(74, 144, 226, 0.1)"
          stroke="#4A90E2"
          strokeWidth="1"
          strokeDasharray="2,2"
        />

        {/* Neurona postsináptica */}
        <g>
          {/* Dendrita */}
          <ellipse
            cx="285"
            cy="150"
            rx="20"
            ry="25"
            fill="#9D4EDD"
            opacity="0.8"
          />

          {/* Cuerpo neuronal */}
          <ellipse
            cx="400"
            cy="150"
            rx="40"
            ry="35"
            fill="url(#neuronGradient)"
            stroke="#9D4EDD"
            strokeWidth="2"
            filter="url(#synapseGlow)"
          />
          {/* Núcleo */}
          <circle cx="400" cy="150" r="15" fill="#B68DDA" opacity="0.6" />
        </g>

        {/* Neurotransmisores animados */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={i}
            r="4"
            fill="#FFD700"
            filter="url(#synapseGlow)"
            initial={{ cx: 250, cy: 140 + i * 5, opacity: 0 }}
            animate={{
              cx: [250, 265, 285],
              cy: [140 + i * 5, 142 + i * 5, 140 + i * 5],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Impulso nervioso (neurona presináptica) */}
        <motion.circle
          r="6"
          fill="#00FFFF"
          filter="url(#synapseGlow)"
          animate={{
            cx: [100, 250],
            opacity: [0, 1, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'linear',
          }}
          cy="150"
        />

        {/* Impulso nervioso (neurona postsináptica) */}
        <motion.circle
          r="6"
          fill="#00FFFF"
          filter="url(#synapseGlow)"
          animate={{
            cx: [285, 400],
            opacity: [0, 0, 0.5, 1, 1],
          }}
          transition={{
            duration: 1.5,
            delay: 2,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'linear',
          }}
          cy="150"
        />

        {/* Etiquetas */}
        <text x="100" y="210" textAnchor="middle" fill="white" fontSize="12">
          Neurona
        </text>
        <text x="100" y="225" textAnchor="middle" fill="white" fontSize="12">
          Presináptica
        </text>

        <text x="275" y="100" textAnchor="middle" fill="#FFD700" fontSize="11">
          Neurotransmisores
        </text>

        <text x="275" y="210" textAnchor="middle" fill="white" fontSize="12">
          Espacio
        </text>
        <text x="275" y="225" textAnchor="middle" fill="white" fontSize="12">
          Sináptico
        </text>

        <text x="400" y="210" textAnchor="middle" fill="white" fontSize="12">
          Neurona
        </text>
        <text x="400" y="225" textAnchor="middle" fill="white" fontSize="12">
          Postsináptica
        </text>

        {/* Flechas indicativas */}
        <motion.path
          d="M 140 130 L 240 130"
          stroke="#00FFFF"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#00FFFF" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default SynapseAnimation;
