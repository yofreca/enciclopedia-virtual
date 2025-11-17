import { motion } from 'framer-motion';
import { type Constellation } from '../../data/constellationsData';

interface ConstellationSelectorProps {
  constellations: Constellation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const ConstellationSelector = ({
  constellations,
  selectedId,
  onSelect,
}: ConstellationSelectorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="fixed top-20 left-8 max-w-xs z-10"
    >
      <div className="bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-2xl">
        <h3 className="text-sm font-bold mb-3 text-cosmic-blue text-center">
          Constelaciones
        </h3>
        <div className="flex flex-col gap-2">
          {constellations.map((constellation) => (
            <motion.button
              key={constellation.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelect(constellation.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all text-left ${
                selectedId === constellation.id
                  ? 'bg-cosmic-blue text-white border border-cosmic-blue shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-transparent'
              }`}
            >
              {constellation.name}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ConstellationSelector;
