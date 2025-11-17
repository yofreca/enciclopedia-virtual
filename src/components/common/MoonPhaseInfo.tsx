import { motion } from 'framer-motion';
import { type MoonPhase } from '../../data/moonData';
import { moonInfo } from '../../data/moonData';
import { FaMoon, FaClock, FaEye } from 'react-icons/fa';

interface MoonPhaseInfoProps {
  phase: MoonPhase;
}

const MoonPhaseInfo = ({ phase }: MoonPhaseInfoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 w-80 bg-space-800/90 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl"
    >
      {/* Phase name */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white mb-1">
          {phase.name}
        </h2>
        <p className="text-sm text-gray-400 italic">{phase.nameEnglish}</p>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        {phase.description}
      </p>

      {/* Quick info */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <FaMoon className="text-cosmic-blue" />
          </div>
          <div>
            <div className="text-gray-400">Iluminación</div>
            <div className="font-semibold">{(phase.illumination * 100).toFixed(0)}%</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <FaEye className="text-cosmic-purple" />
          </div>
          <div>
            <div className="text-gray-400">Visibilidad</div>
            <div className="font-semibold">{phase.visibility}</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <FaClock className="text-cosmic-pink" />
          </div>
          <div>
            <div className="text-gray-400">Mejor momento</div>
            <div className="font-semibold text-xs">{phase.bestTime}</div>
          </div>
        </div>
      </div>

      {/* Moon general info */}
      <div className="pt-4 border-t border-white/10">
        <h3 className="text-sm font-bold text-gray-400 mb-3">Datos de la Luna</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-white/5 rounded-lg p-2">
            <div className="text-gray-400">Diámetro</div>
            <div className="font-semibold">{moonInfo.diameter}</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2">
            <div className="text-gray-400">Distancia</div>
            <div className="font-semibold text-xs">{moonInfo.distanceFromEarth}</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2">
            <div className="text-gray-400">Período orbital</div>
            <div className="font-semibold">{moonInfo.orbitalPeriod}</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2">
            <div className="text-gray-400">Gravedad</div>
            <div className="font-semibold text-xs">{moonInfo.gravity}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MoonPhaseInfo;
