import { motion } from 'framer-motion';
import Moon from '../animations/Moon';
import { moonPhases } from '../../data/moonData';

interface MoonTimelineProps {
  currentPhase: number;
  onPhaseSelect: (phase: number) => void;
}

const MoonTimeline = ({ currentPhase, onPhaseSelect }: MoonTimelineProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="fixed top-24 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 z-10"
    >
      <div className="bg-space-800/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
        <h3 className="text-center text-lg font-bold mb-4 text-gray-300">
          Selecciona una fase lunar
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {moonPhases.map((phase, index) => (
            <motion.button
              key={phase.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPhaseSelect(index)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                currentPhase === index
                  ? 'bg-cosmic-blue/30 border-2 border-cosmic-blue'
                  : 'bg-white/5 hover:bg-white/10 border-2 border-transparent'
              }`}
            >
              <div className="transform scale-50">
                <Moon
                  phase={phase.id}
                  illumination={phase.illumination}
                  size={80}
                  showGlow={false}
                />
              </div>
              <span className="text-xs text-center leading-tight">
                {phase.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-4 relative h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute h-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentPhase + 1) / moonPhases.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MoonTimeline;
