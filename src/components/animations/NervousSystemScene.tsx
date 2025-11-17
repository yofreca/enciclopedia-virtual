import { useState } from 'react';
import { motion } from 'framer-motion';
import NervousSystemViewer from './NervousSystemViewer';
import NervousSystemInfo from '../common/NervousSystemInfo';
import SynapseAnimation from './SynapseAnimation';
import { nervousSystemParts, synapseInfo, nervousSystemFacts } from '../../data/nervousSystemData';

const NervousSystemScene = () => {
  const [selectedPartId, setSelectedPartId] = useState<string | null>('brain');
  const [showSynapseInfo, setShowSynapseInfo] = useState(false);

  const selectedPart = nervousSystemParts.find((p) => p.id === selectedPartId) || null;

  const handlePartClick = (partId: string) => {
    setSelectedPartId(partId);
    setShowSynapseInfo(false);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-space-900 via-[#0a0520] to-space-900">
      {/* Fondo de partículas nerviosas */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
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
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-pink text-center">
          Sistema Nervioso
        </h1>
        <p className="text-gray-400 text-center mt-2 text-sm">
          Haz clic en las partes para explorar
        </p>
      </motion.div>

      {/* Visor principal del sistema nervioso */}
      <div className="absolute inset-0 flex items-center justify-center pt-24 pb-32">
        <NervousSystemViewer
          selectedPart={selectedPartId}
          onPartClick={handlePartClick}
        />
      </div>

      {/* Panel de información derecha */}
      <NervousSystemInfo part={selectedPart} />

      {/* Panel de datos generales (izquierda abajo) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 left-8 max-w-xs z-10"
      >
        <div className="bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl">
          <h3 className="text-sm font-bold mb-3 text-cosmic-blue">
            Sobre el Sistema Nervioso
          </h3>
          <ul className="space-y-2">
            {nervousSystemFacts.slice(0, 4).map((fact, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-xs text-gray-300 flex items-start"
              >
                <span className="text-cosmic-blue mr-2 flex-shrink-0">•</span>
                <span>{fact}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Botón para ver sinapsis */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowSynapseInfo(!showSynapseInfo)}
        className="fixed bottom-8 right-8 bg-cosmic-purple/80 hover:bg-cosmic-purple text-white px-6 py-3 rounded-xl font-medium text-sm border border-white/20 backdrop-blur-md shadow-lg transition-all z-10"
      >
        {showSynapseInfo ? 'Ocultar Sinapsis' : 'Ver Sinapsis'}
      </motion.button>

      {/* Panel de sinapsis (centro abajo) */}
      {showSynapseInfo && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-space-800/90 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-2xl max-w-3xl z-20"
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-2">{synapseInfo.name}</h3>
            <p className="text-sm text-gray-300">{synapseInfo.description}</p>
          </div>

          {/* Animación de sinapsis */}
          <SynapseAnimation />

          {/* Proceso de transmisión */}
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-cosmic-blue mb-3">
              Proceso de transmisión
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {synapseInfo.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-cosmic-purple w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-xs text-gray-300">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Datos curiosos de sinapsis */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <h4 className="text-xs font-semibold text-cosmic-gold mb-2">
              Datos curiosos
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {synapseInfo.facts.map((fact, index) => (
                <p key={index} className="text-xs text-gray-400">
                  • {fact}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NervousSystemScene;
