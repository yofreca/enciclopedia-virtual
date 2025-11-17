import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Moon from './Moon';
import MoonControls from '../common/MoonControls';
import MoonTimeline from '../common/MoonTimeline';
import MoonPhaseInfo from '../common/MoonPhaseInfo';
import { moonPhases } from '../../data/moonData';

const MoonPhasesScene = () => {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const currentPhase = moonPhases[currentPhaseIndex];

  // Animación automática del ciclo lunar
  useEffect(() => {
    if (isPaused) return;

    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;

      // Cambiar de fase cada 3 segundos (dividido por la velocidad)
      if (deltaTime > 3000 / speed) {
        setCurrentPhaseIndex((prev) => (prev + 1) % moonPhases.length);
        lastTimeRef.current = currentTime;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, speed]);

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
    lastTimeRef.current = 0;
  };

  const handleReset = () => {
    setCurrentPhaseIndex(0);
    setIsPaused(false);
    setSpeed(1);
    lastTimeRef.current = 0;
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    lastTimeRef.current = 0;
  };

  const handlePhaseSelect = (phaseIndex: number) => {
    setCurrentPhaseIndex(phaseIndex);
    setIsPaused(true);
    lastTimeRef.current = 0;
  };

  const handleNextPhase = () => {
    setCurrentPhaseIndex((prev) => (prev + 1) % moonPhases.length);
    setIsPaused(true);
    lastTimeRef.current = 0;
  };

  const handlePrevPhase = () => {
    setCurrentPhaseIndex((prev) => (prev - 1 + moonPhases.length) % moonPhases.length);
    setIsPaused(true);
    lastTimeRef.current = 0;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-space-900 via-space-800 to-space-900 relative overflow-hidden">
      {/* Estrellas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Timeline superior */}
      <MoonTimeline
        currentPhase={currentPhaseIndex}
        onPhaseSelect={handlePhaseSelect}
      />

      {/* Luna central */}
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          key={currentPhaseIndex}
          initial={{ scale: 0.8, opacity: 0, rotateY: -180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <Moon
            phase={currentPhase.id}
            illumination={currentPhase.illumination}
            size={400}
            showGlow={true}
          />
        </motion.div>
      </div>

      {/* Panel de información lateral */}
      <MoonPhaseInfo phase={currentPhase} />

      {/* Controles inferiores */}
      <MoonControls
        isPaused={isPaused}
        onTogglePause={handleTogglePause}
        onReset={handleReset}
        speed={speed}
        onSpeedChange={handleSpeedChange}
        onNextPhase={handleNextPhase}
        onPrevPhase={handlePrevPhase}
      />

      {/* Indicador de fase actual (versión móvil) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-32 left-1/2 transform -translate-x-1/2 md:hidden bg-space-800/90 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3"
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{currentPhase.name}</div>
          <div className="text-sm text-gray-400">{currentPhase.nameEnglish}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default MoonPhasesScene;
