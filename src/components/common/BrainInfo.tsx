import { motion, AnimatePresence } from 'framer-motion';
import { type BrainRegion } from '../../data/brainData';

interface BrainInfoProps {
  region: BrainRegion | null;
}

const BrainInfo = ({ region }: BrainInfoProps) => {
  return (
    <AnimatePresence mode="wait">
      {region && (
        <motion.div
          key={region.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 right-8 max-w-md z-10"
        >
          <div className="bg-space-800/80 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-2xl max-h-[calc(100vh-120px)] overflow-y-auto">
            {/* Header con color de la región */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: region.color,
                  boxShadow: `0 0 10px ${region.color}`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <h3 className="text-xl font-bold text-white">{region.name}</h3>
            </div>

            {/* Descripción */}
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              {region.description}
            </p>

            {/* Funciones */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-cosmic-blue mb-3">
                Funciones Principales
              </h4>
              <ul className="space-y-2">
                {region.functions.map((func, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-xs text-gray-300 flex items-start"
                  >
                    <span
                      className="mr-2 mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: region.color }}
                    />
                    <span>{func}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Datos curiosos */}
            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-3">
                Datos Curiosos
              </h4>
              <ul className="space-y-2">
                {region.facts.map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-xs text-gray-300 flex items-start"
                  >
                    <span className="text-cosmic-gold mr-2 flex-shrink-0">✦</span>
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrainInfo;
