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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="fixed top-20 left-8 max-w-md z-10"
    >
      <div className="bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-2 shadow-2xl">
        <div className="grid grid-cols-2 gap-1.5">
          {moonPhases.map((phase, index) => (
            <motion.button
              key={phase.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPhaseSelect(index)}
              className={`flex flex-col items-center gap-1 p-1.5 rounded-lg transition-all ${
                currentPhase === index
                  ? 'bg-cosmic-blue/30 border border-cosmic-blue'
                  : 'bg-white/5 hover:bg-white/10 border border-transparent'
              }`}
            >
              <div className="transform scale-[0.35]">
                <Moon
                  phase={phase.id}
                  illumination={phase.illumination}
                  size={60}
                  showGlow={false}
                />
              </div>
              <span className="text-[10px] text-center leading-tight">
                {phase.name.split(' ')[0]}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-2 relative h-1 bg-white/10 rounded-full overflow-hidden">
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
