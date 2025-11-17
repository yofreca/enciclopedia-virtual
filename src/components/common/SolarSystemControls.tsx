import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaRedo, FaPlus, FaMinus } from 'react-icons/fa';

interface ControlsProps {
  isPaused: boolean;
  onTogglePause: () => void;
  onReset: () => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
}

const SolarSystemControls = ({
  isPaused,
  onTogglePause,
  onReset,
  speed,
  onSpeedChange
}: ControlsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-space-800/90 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl z-10"
    >
      <div className="flex items-center gap-4">
        {/* Play/Pause */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onTogglePause}
          className="w-12 h-12 bg-cosmic-blue hover:bg-cosmic-blue/80 rounded-full flex items-center justify-center transition-colors"
          aria-label={isPaused ? 'Reproducir' : 'Pausar'}
        >
          {isPaused ? <FaPlay className="ml-1" /> : <FaPause />}
        </motion.button>

        {/* Speed controls */}
        <div className="flex items-center gap-2 px-4 border-l border-r border-white/20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSpeedChange(Math.max(0.1, speed - 0.5))}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
            aria-label="Disminuir velocidad"
          >
            <FaMinus size={12} />
          </motion.button>

          <div className="text-center min-w-[80px]">
            <div className="text-sm text-gray-400">Velocidad</div>
            <div className="text-lg font-bold">{speed.toFixed(1)}x</div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSpeedChange(Math.min(10, speed + 0.5))}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
            aria-label="Aumentar velocidad"
          >
            <FaPlus size={12} />
          </motion.button>
        </div>

        {/* Reset */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={onReset}
          className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Reiniciar"
        >
          <FaRedo />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SolarSystemControls;
