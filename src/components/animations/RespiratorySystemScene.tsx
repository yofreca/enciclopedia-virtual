import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RespiratorySystemViewer from './RespiratorySystemViewer';
import RespiratorySystemInfo from '../common/RespiratorySystemInfo';
import {
  respiratoryParts,
  breathingCycle,
  gasExchange,
  respiratoryFacts,
} from '../../data/respiratorySystemData';

const RespiratorySystemScene = () => {
  const [selectedPartId, setSelectedPartId] = useState<string | null>('lungs');
  const [breathingPhase, setBreathingPhase] = useState<'inhalation' | 'exhalation'>(
    'inhalation'
  );
  const [breathCount, setBreathCount] = useState(0);

  const selectedPart = respiratoryParts.find((p) => p.id === selectedPartId) || null;

  const handlePartClick = (partId: string) => {
    setSelectedPartId(partId);
  };

  // Ciclo de respiración
  useEffect(() => {
    const interval = setInterval(() => {
      setBreathingPhase((prev) => {
        if (prev === 'inhalation') {
          return 'exhalation';
        } else {
          setBreathCount((c) => c + 1);
          return 'inhalation';
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-space-900 via-[#0a0520] to-space-900">
      {/* Fondo animado con partículas de aire */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1, 0.5],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-center">
          Sistema Respiratorio
        </h1>
        <p className="text-gray-400 text-center mt-2 text-sm">
          Haz clic en las partes para explorar
        </p>
      </motion.div>

      {/* Indicador de respiración */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-24 right-8 bg-space-800/80 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 shadow-lg z-10"
      >
        <div className="text-center mb-3">
          <motion.div
            className="w-16 h-16 mx-auto mb-2 rounded-full border-4 border-purple-400 flex items-center justify-center"
            animate={{
              scale: breathingPhase === 'inhalation' ? [1, 1.2, 1.2] : [1.2, 1, 1],
              borderColor:
                breathingPhase === 'inhalation'
                  ? ['#9B59B6', '#4ECDC4', '#4ECDC4']
                  : ['#4ECDC4', '#9B59B6', '#9B59B6'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="text-2xl">
              {breathingPhase === 'inhalation' ? '→' : '←'}
            </span>
          </motion.div>
          <h3 className="text-sm font-bold text-white mb-1">
            {breathingPhase === 'inhalation' ? 'Inhalando' : 'Exhalando'}
          </h3>
          <p className="text-xs text-gray-400">
            {breathCount} respiraciones
          </p>
        </div>
        <div className="text-xs text-gray-300">
          <p className="mb-1">
            <span className="text-cyan-400">O₂</span> = Oxígeno
          </p>
          <p>
            <span className="text-red-400">CO₂</span> = Dióxido de carbono
          </p>
        </div>
      </motion.div>

      {/* Visor principal */}
      <div className="absolute inset-0 flex items-center justify-center pt-24 pb-32">
        <RespiratorySystemViewer
          selectedPart={selectedPartId}
          onPartClick={handlePartClick}
        />
      </div>

      {/* Panel de información derecha */}
      <RespiratorySystemInfo part={selectedPart} />

      {/* Panel de ciclo respiratorio (izquierda abajo) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="fixed bottom-8 left-8 max-w-sm z-10"
      >
        <div className="bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl">
          <h3 className="text-sm font-bold mb-3 text-purple-400">
            Ciclo Respiratorio
          </h3>

          {/* Inhalación */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-cyan-400"
                animate={{
                  scale: breathingPhase === 'inhalation' ? [1, 1.5, 1] : 1,
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <h4 className="text-xs font-semibold text-white">
                {breathingCycle.inhalation.name}
              </h4>
            </div>
            <p className="text-xs text-gray-300 mb-2">
              {breathingCycle.inhalation.description}
            </p>
            <ul className="space-y-1">
              {breathingCycle.inhalation.steps.slice(0, 2).map((step, i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start">
                  <span className="text-cyan-400 mr-1">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exhalación */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-purple-400"
                animate={{
                  scale: breathingPhase === 'exhalation' ? [1, 1.5, 1] : 1,
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <h4 className="text-xs font-semibold text-white">
                {breathingCycle.exhalation.name}
              </h4>
            </div>
            <p className="text-xs text-gray-300 mb-2">
              {breathingCycle.exhalation.description}
            </p>
            <ul className="space-y-1">
              {breathingCycle.exhalation.steps.slice(0, 2).map((step, i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start">
                  <span className="text-purple-400 mr-1">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Panel de intercambio de gases (centro abajo) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-2xl z-10"
      >
        <h3 className="text-sm font-bold mb-3 text-cosmic-blue text-center">
          {gasExchange.name}
        </h3>
        <p className="text-xs text-gray-300 text-center mb-3">
          {gasExchange.description}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {gasExchange.process.slice(0, 4).map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="flex items-start text-xs text-gray-300"
            >
              <div className="bg-purple-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0">
                {index + 1}
              </div>
              <span>{step}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Dato curioso aleatorio */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="fixed top-24 left-8 bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-3 max-w-xs shadow-lg z-10"
      >
        <h4 className="text-xs font-bold text-purple-400 mb-2">
          Dato Curioso
        </h4>
        <p className="text-xs text-gray-300">
          {respiratoryFacts[Math.floor(Math.random() * respiratoryFacts.length)]}
        </p>
      </motion.div>
    </div>
  );
};

export default RespiratorySystemScene;
