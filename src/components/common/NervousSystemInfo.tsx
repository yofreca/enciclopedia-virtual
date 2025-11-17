import { motion, AnimatePresence } from 'framer-motion';
import { type NervousSystemPart } from '../../data/nervousSystemData';

interface NervousSystemInfoProps {
  part: NervousSystemPart | null;
}

const NervousSystemInfo = ({ part }: NervousSystemInfoProps) => {
  return (
    <AnimatePresence mode="wait">
      {part && (
        <motion.div
          key={part.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 right-8 max-w-sm z-10"
        >
          <div className="bg-space-800/80 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-2xl">
            {/* Header con color de la parte */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: part.color,
                  boxShadow: `0 0 10px ${part.color}`,
                }}
              />
              <h3 className="text-xl font-bold text-white">{part.name}</h3>
            </div>

            {/* Descripción */}
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              {part.description}
            </p>

            {/* Función */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-cosmic-blue mb-2">Función</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{part.function}</p>
            </div>

            {/* Datos curiosos */}
            <div>
              <h4 className="text-sm font-semibold text-cosmic-purple mb-2">
                Datos curiosos
              </h4>
              <ul className="space-y-2">
                {part.facts.map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-xs text-gray-300 flex items-start"
                  >
                    <span
                      className="mr-2 mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: part.color }}
                    />
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

export default NervousSystemInfo;
