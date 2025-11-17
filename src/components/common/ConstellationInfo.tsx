import { motion, AnimatePresence } from 'framer-motion';
import { type Constellation } from '../../data/constellationsData';
import { FaBook, FaCalendarAlt, FaGlobeAmericas, FaLightbulb } from 'react-icons/fa';

interface ConstellationInfoProps {
  constellation: Constellation | null;
}

const ConstellationInfo = ({ constellation }: ConstellationInfoProps) => {
  return (
    <AnimatePresence mode="wait">
      {constellation && (
        <motion.div
          key={constellation.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed right-8 top-32 bottom-28 w-96 bg-space-800/90 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl overflow-y-auto"
        >
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cosmic-blue to-cosmic-purple mb-2">
              {constellation.name}
            </h3>
            <p className="text-gray-400 italic text-lg">
              {constellation.nameEnglish}
            </p>
          </div>

          {/* Mitología */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-cosmic-purple/20 rounded-lg flex items-center justify-center">
                <FaBook className="text-cosmic-purple" />
              </div>
              <h4 className="text-lg font-bold text-white">Mitología</h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              {constellation.mythology}
            </p>
          </div>

          {/* Información rápida */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/5 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <FaCalendarAlt className="text-cosmic-blue text-sm" />
                <div className="text-xs text-gray-400">Mejor época</div>
              </div>
              <div className="text-sm font-semibold">{constellation.bestSeason}</div>
            </div>

            <div className="bg-white/5 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <FaGlobeAmericas className="text-cosmic-gold text-sm" />
                <div className="text-xs text-gray-400">Hemisferio</div>
              </div>
              <div className="text-sm font-semibold">{constellation.hemisphere}</div>
            </div>
          </div>

          {/* Datos curiosos */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-cosmic-gold/20 rounded-lg flex items-center justify-center">
                <FaLightbulb className="text-cosmic-gold" />
              </div>
              <h4 className="text-lg font-bold text-white">Datos curiosos</h4>
            </div>
            <ul className="space-y-2">
              {constellation.facts.map((fact, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-2 text-sm text-gray-300"
                >
                  <span className="text-cosmic-blue mt-0.5">•</span>
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Número de estrellas */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic-blue">
                {constellation.stars.length}
              </div>
              <div className="text-sm text-gray-400">
                estrellas principales
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConstellationInfo;
