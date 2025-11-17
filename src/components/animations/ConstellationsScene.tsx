import { useState } from 'react';
import { motion } from 'framer-motion';
import ConstellationViewer from './ConstellationViewer';
import ConstellationSelector from '../common/ConstellationSelector';
import ConstellationInfo from '../common/ConstellationInfo';
import { constellations } from '../../data/constellationsData';

const ConstellationsScene = () => {
  const [selectedId, setSelectedId] = useState<string | null>(constellations[0].id);

  const selectedConstellation = constellations.find((c) => c.id === selectedId) || null;

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Visor de constelaciones (fondo) */}
      <div className="absolute inset-0">
        <ConstellationViewer selectedConstellation={selectedConstellation} />
      </div>

      {/* Selector de constelaciones (parte superior) */}
      <ConstellationSelector
        constellations={constellations}
        selectedId={selectedId}
        onSelect={handleSelect}
      />

      {/* Panel de información (derecha) */}
      <ConstellationInfo constellation={selectedConstellation} />

      {/* Instrucciones (centro abajo) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-space-800/70 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-md"
      >
        <h3 className="text-sm font-bold mb-2 text-cosmic-blue text-center">
          Cómo explorar
        </h3>
        <ul className="text-xs text-gray-300 space-y-1">
          <li>• Selecciona una constelación en el panel izquierdo</li>
          <li>• Las estrellas doradas son las principales</li>
          <li>• Pasa el cursor sobre las estrellas para resaltarlas</li>
          <li>• Lee la información mitológica en el panel derecho</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ConstellationsScene;
