import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { type PlanetData } from '../../data/planetsData';
import { sunData } from '../../data/planetsData';

interface PlanetInfoCardProps {
  planetData: PlanetData | typeof sunData | null;
  onClose: () => void;
}

const PlanetInfoCard = ({ planetData, onClose }: PlanetInfoCardProps) => {
  if (!planetData) return null;

  const isSun = planetData.name === 'Sol';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          className="bg-space-800 border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cosmic-blue to-cosmic-purple">
              {planetData.name}
            </h2>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Cerrar"
            >
              <FaTimes />
            </motion.button>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4">{planetData.info.description}</p>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-3">
            {isSun ? (
              <>
                <InfoItem label="Diámetro" value={planetData.info.diameter} />
                <InfoItem label="Temperatura" value={planetData.info.temperature} />
                <InfoItem label="Composición" value={(planetData.info as typeof sunData.info).composition} />
                <InfoItem label="Edad" value={(planetData.info as typeof sunData.info).age} />
              </>
            ) : (
              <>
                <InfoItem label="Diámetro" value={planetData.info.diameter} />
                <InfoItem label="Distancia al Sol" value={(planetData.info as PlanetData['info']).distanceFromSun} />
                <InfoItem label="Período orbital" value={(planetData.info as PlanetData['info']).orbitalPeriod} />
                <InfoItem label="Duración del día" value={(planetData.info as PlanetData['info']).dayLength} />
                <InfoItem label="Temperatura" value={(planetData.info as PlanetData['info']).temperature} />
                <InfoItem label="Lunas" value={(planetData.info as PlanetData['info']).moons} />
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white/5 rounded-lg p-3">
    <div className="text-xs text-gray-400 mb-1">{label}</div>
    <div className="text-sm font-semibold">{value}</div>
  </div>
);

export default PlanetInfoCard;
