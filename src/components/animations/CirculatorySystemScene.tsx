import { useState } from 'react';
import { motion } from 'framer-motion';
import CirculatorySystemViewer from './CirculatorySystemViewer';
import HeartViewer from './HeartViewer';
import CirculatorySystemInfo from '../common/CirculatorySystemInfo';
import {
  circulatoryParts,
  bloodCirculation,
  circulatoryFacts,
} from '../../data/circulatorySystemData';

const CirculatorySystemScene = () => {
  const [selectedPartId, setSelectedPartId] = useState<string | null>('heart');
  const [viewMode, setViewMode] = useState<'full' | 'heart'>('full');

  const selectedPart = circulatoryParts.find((p) => p.id === selectedPartId) || null;

  const handlePartClick = (partId: string) => {
    setSelectedPartId(partId);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-space-900 via-[#0a0520] to-space-900">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              backgroundColor: i % 2 === 0 ? '#E74C3C' : '#3498DB',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
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
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-blue-500 text-center">
          Sistema Circulatorio
        </h1>
        <p className="text-gray-400 text-center mt-2 text-sm">
          Haz clic en las partes para explorar
        </p>
      </motion.div>

      {/* Botones de cambio de vista */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="fixed top-24 left-1/2 transform -translate-x-1/2 z-10 flex gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setViewMode('full')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all border ${
            viewMode === 'full'
              ? 'bg-red-500 text-white border-red-500 shadow-lg'
              : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10'
          }`}
        >
          Vista Completa
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setViewMode('heart')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all border ${
            viewMode === 'heart'
              ? 'bg-red-500 text-white border-red-500 shadow-lg'
              : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10'
          }`}
        >
          Vista del Corazón
        </motion.button>
      </motion.div>

      {/* Visor principal */}
      <div className="absolute inset-0 flex items-center justify-center pt-32 pb-32">
        {viewMode === 'full' ? (
          <CirculatorySystemViewer
            selectedPart={selectedPartId}
            onPartClick={handlePartClick}
          />
        ) : (
          <HeartViewer selectedPart={selectedPartId} onPartClick={handlePartClick} />
        )}
      </div>

      {/* Panel de información derecha */}
      <CirculatorySystemInfo part={selectedPart} />

      {/* Panel de información de circulación (izquierda abajo) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="fixed bottom-8 left-8 max-w-sm z-10"
      >
        <div className="bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl">
          <h3 className="text-sm font-bold mb-3 text-red-400">
            Tipos de Circulación
          </h3>

          {/* Circulación Sistémica */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <h4 className="text-xs font-semibold text-white">
                {bloodCirculation.systemic.name}
              </h4>
            </div>
            <p className="text-xs text-gray-300 mb-1">
              {bloodCirculation.systemic.description}
            </p>
            <p className="text-xs text-gray-400 italic">
              {bloodCirculation.systemic.path}
            </p>
          </div>

          {/* Circulación Pulmonar */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <h4 className="text-xs font-semibold text-white">
                {bloodCirculation.pulmonary.name}
              </h4>
            </div>
            <p className="text-xs text-gray-300 mb-1">
              {bloodCirculation.pulmonary.description}
            </p>
            <p className="text-xs text-gray-400 italic">
              {bloodCirculation.pulmonary.path}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Panel de datos curiosos (centro abajo) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-2xl z-10"
      >
        <h3 className="text-sm font-bold mb-3 text-cosmic-blue text-center">
          Datos Curiosos del Sistema Circulatorio
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {circulatoryFacts.slice(0, 3).map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-xs text-gray-300 text-center"
            >
              <span className="text-red-400 font-bold">•</span> {fact}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Indicador de latido del corazón */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed top-24 right-8 bg-space-800/80 backdrop-blur-md border border-red-500/30 rounded-xl p-3 shadow-lg z-10"
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-3 h-3 rounded-full bg-red-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <span className="text-xs text-gray-300">
            <span className="text-red-400 font-bold">72</span> latidos/min
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default CirculatorySystemScene;
