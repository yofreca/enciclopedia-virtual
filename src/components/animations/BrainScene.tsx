import { useState } from 'react';
import { motion } from 'framer-motion';
import BrainViewer from './BrainViewer';
import BrainInfo from '../common/BrainInfo';
import {
  brainRegions,
  hemisphereInfo,
  brainFacts,
  neuralActivity,
} from '../../data/brainData';

const BrainScene = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>('frontal-lobe');

  const selectedRegion = brainRegions.find((r) => r.id === selectedRegionId) || null;

  const handleRegionClick = (regionId: string) => {
    setSelectedRegionId(regionId);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-space-900 via-[#0a0520] to-space-900">
      {/* Fondo de partículas neuronales */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              backgroundColor: i % 3 === 0 ? '#4A90E2' : i % 3 === 1 ? '#FF6B9D' : '#C77DFF',
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
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 text-center">
          Anatomía del Cerebro
        </h1>
        <p className="text-gray-400 text-center mt-2 text-sm">
          Haz clic en las regiones para explorar sus funciones
        </p>
      </motion.div>

      {/* Visor principal del cerebro */}
      <div className="absolute inset-0 flex items-center justify-center pt-24 pb-32">
        <BrainViewer
          selectedRegion={selectedRegionId}
          onRegionClick={handleRegionClick}
        />
      </div>

      {/* Panel de información derecha */}
      <BrainInfo region={selectedRegion} />

      {/* Panel de hemisferios (izquierda abajo) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 left-8 max-w-sm z-10"
      >
        <div className="bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl">
          <h3 className="text-sm font-bold mb-3 text-cosmic-blue">
            Hemisferios Cerebrales
          </h3>

          {/* Hemisferio Izquierdo */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: hemisphereInfo.left.color }}
              />
              <h4 className="text-xs font-semibold text-white">
                {hemisphereInfo.left.name}
              </h4>
            </div>
            <ul className="space-y-1">
              {hemisphereInfo.left.specializations.map((spec, i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start">
                  <span className="text-cosmic-blue mr-1">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hemisferio Derecho */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: hemisphereInfo.right.color }}
              />
              <h4 className="text-xs font-semibold text-white">
                {hemisphereInfo.right.name}
              </h4>
            </div>
            <ul className="space-y-1">
              {hemisphereInfo.right.specializations.map((spec, i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start">
                  <span className="text-pink-400 mr-1">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Panel de actividad neural (centro abajo) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-2xl z-0"
      >
        <h3 className="text-sm font-bold mb-3 text-cosmic-purple text-center">
          {neuralActivity.name}
        </h3>
        <p className="text-xs text-gray-300 text-center mb-3">
          {neuralActivity.description}
        </p>
        <div className="grid grid-cols-5 gap-2">
          {neuralActivity.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-cosmic-purple/30 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">
                {index + 1}
              </div>
              <p className="text-xs text-gray-300">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Panel de datos curiosos (arriba derecha) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
        className="fixed top-24 left-8 bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-xs shadow-lg z-10"
      >
        <h4 className="text-xs font-bold text-cosmic-gold mb-3">
          Datos del Cerebro Humano
        </h4>
        <ul className="space-y-2">
          {brainFacts.slice(0, 4).map((fact, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="text-xs text-gray-300 flex items-start"
            >
              <span className="text-cosmic-gold mr-2">✦</span>
              <span>{fact}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Indicador de regiones */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="fixed top-24 right-8 bg-space-800/60 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg z-10"
      >
        <h4 className="text-xs font-bold text-white mb-2">Regiones</h4>
        <div className="grid grid-cols-2 gap-2">
          {brainRegions.slice(0, 8).map((region) => (
            <motion.button
              key={region.id}
              onClick={() => handleRegionClick(region.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs transition-all ${
                selectedRegionId === region.id
                  ? 'bg-white/20 border border-white/30'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: region.color }}
              />
              <span className="text-white truncate text-left">
                {region.name.split(' ')[1] || region.name}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BrainScene;
