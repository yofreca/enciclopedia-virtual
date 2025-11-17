import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface MoonProps {
  phase: number; // 0-7 (índice de la fase)
  illumination: number; // 0-1
  size?: number;
  showGlow?: boolean;
}

const Moon = ({ phase, illumination, size = 200, showGlow = true }: MoonProps) => {
  // Calcular la forma de la sombra basada en la iluminación
  const shadowPath = useMemo(() => {
    const radius = size / 2;
    const centerX = size / 2;
    const centerY = size / 2;

    // Para las diferentes fases, necesitamos crear diferentes formas de sombra
    if (illumination === 0) {
      // Luna nueva - círculo completamente oscuro
      return `M ${centerX},${centerY} m -${radius},0 a ${radius},${radius} 0 1,0 ${radius * 2},0 a ${radius},${radius} 0 1,0 -${radius * 2},0`;
    } else if (illumination === 1) {
      // Luna llena - sin sombra
      return '';
    } else if (illumination === 0.5) {
      // Cuarto creciente o menguante
      const isWaxing = phase < 4;
      if (isWaxing) {
        // Cuarto creciente - mitad izquierda oscura
        return `M ${centerX},${centerY - radius} L ${centerX},${centerY + radius} L ${centerX - radius},${centerY + radius} A ${radius},${radius} 0 0,1 ${centerX - radius},${centerY - radius} Z`;
      } else {
        // Cuarto menguante - mitad derecha oscura
        return `M ${centerX},${centerY - radius} L ${centerX},${centerY + radius} L ${centerX + radius},${centerY + radius} A ${radius},${radius} 0 0,0 ${centerX + radius},${centerY - radius} Z`;
      }
    } else {
      // Fases gibosas y crecientes
      const isWaxing = phase < 4;
      const ellipseWidth = radius * 2 * (isWaxing ? (1 - illumination * 2) : (illumination * 2 - 1));

      if (isWaxing && illumination < 0.5) {
        // Creciente
        return `M ${centerX},${centerY - radius} A ${Math.abs(ellipseWidth)},${radius} 0 0,1 ${centerX},${centerY + radius} A ${radius},${radius} 0 0,1 ${centerX},${centerY - radius}`;
      } else if (isWaxing && illumination > 0.5) {
        // Gibosa creciente
        return `M ${centerX},${centerY - radius} A ${Math.abs(ellipseWidth)},${radius} 0 0,0 ${centerX},${centerY + radius} A ${radius},${radius} 0 0,1 ${centerX},${centerY - radius}`;
      } else if (!isWaxing && illumination > 0.5) {
        // Gibosa menguante
        return `M ${centerX},${centerY - radius} A ${Math.abs(ellipseWidth)},${radius} 0 0,1 ${centerX},${centerY + radius} A ${radius},${radius} 0 0,1 ${centerX},${centerY - radius}`;
      } else {
        // Menguante
        return `M ${centerX},${centerY - radius} A ${Math.abs(ellipseWidth)},${radius} 0 0,0 ${centerX},${centerY + radius} A ${radius},${radius} 0 0,1 ${centerX},${centerY - radius}`;
      }
    }
  }, [illumination, phase, size]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Glow effect */}
      {showGlow && (
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: size * 1.5,
            height: size * 1.5,
            background: 'radial-gradient(circle, rgba(220,220,220,0.3) 0%, rgba(220,220,220,0) 70%)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* La Luna */}
      <svg width={size} height={size} className="relative z-10">
        <defs>
          {/* Gradiente para dar textura a la luna */}
          <radialGradient id="moonGradient">
            <stop offset="0%" stopColor="#f0f0f0" />
            <stop offset="70%" stopColor="#d0d0d0" />
            <stop offset="100%" stopColor="#b0b0b0" />
          </radialGradient>

          {/* Patrón de cráteres */}
          <pattern id="craters" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="#c0c0c0" opacity="0.5" />
            <circle cx="25" cy="20" r="1.5" fill="#c0c0c0" opacity="0.5" />
            <circle cx="35" cy="5" r="1" fill="#c0c0c0" opacity="0.5" />
            <circle cx="5" cy="30" r="1.5" fill="#c0c0c0" opacity="0.5" />
          </pattern>

          {/* Máscara para los cráteres */}
          <mask id="crateMask">
            <circle cx={size / 2} cy={size / 2} r={size / 2} fill="white" />
          </mask>
        </defs>

        {/* Círculo base de la luna */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill="url(#moonGradient)"
        />

        {/* Cráteres */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill="url(#craters)"
          mask="url(#crateMask)"
          opacity="0.6"
        />

        {/* Sombra de la fase */}
        {shadowPath && (
          <path
            d={shadowPath}
            fill="#1a1a2e"
            opacity="0.9"
          />
        )}
      </svg>
    </div>
  );
};

export default Moon;
