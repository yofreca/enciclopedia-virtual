import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useState } from 'react';
import Sun from './Sun';
import Planet from './Planet';
import { planetsData, sunData } from '../../data/planetsData';
import { type PlanetData } from '../../data/planetsData';
import SolarSystemControls from '../common/SolarSystemControls';
import PlanetInfoCard from '../common/PlanetInfoCard';

const SolarSystemScene = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | typeof sunData | null>(null);

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsPaused(false);
    setSpeed(1);
    setSelectedPlanet(null);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
  };

  const handlePlanetClick = (planetData: PlanetData | typeof sunData) => {
    setSelectedPlanet(planetData);
  };

  return (
    <>
      <div className="w-full h-screen bg-space-900">
        <Canvas
          camera={{
            position: [0, 50, 80],
            fov: 60
          }}
        >
          {/* Estrellas de fondo */}
          <Stars
            radius={300}
            depth={60}
            count={5000}
            factor={7}
            saturation={0}
            fade
            speed={0.5}
          />

          {/* Controles de cámara */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={20}
            maxDistance={200}
            maxPolarAngle={Math.PI / 2 + 0.5}
            minPolarAngle={0.3}
          />

          {/* El Sol */}
          <Sun onClick={() => handlePlanetClick(sunData)} />

          {/* Los planetas */}
          {planetsData.map((planet) => (
            <Planet
              key={planet.name}
              data={planet}
              onClick={() => handlePlanetClick(planet)}
              speedMultiplier={speed}
              isPaused={isPaused}
            />
          ))}
        </Canvas>

        {/* Instrucciones */}
        <div className="absolute top-24 left-8 bg-space-800/80 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-xs">
          <h3 className="text-lg font-bold mb-2 text-cosmic-blue">Controles</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Clic derecho + arrastrar: Rotar cámara</li>
            <li>• Scroll: Zoom</li>
            <li>• Clic izquierdo: Ver información</li>
            <li>• Usa los controles para ajustar velocidad</li>
          </ul>
        </div>
      </div>

      {/* Controles UI */}
      <SolarSystemControls
        isPaused={isPaused}
        onTogglePause={handleTogglePause}
        onReset={handleReset}
        speed={speed}
        onSpeedChange={handleSpeedChange}
      />

      {/* Info Card */}
      {selectedPlanet && (
        <PlanetInfoCard
          planetData={selectedPlanet}
          onClose={() => setSelectedPlanet(null)}
        />
      )}
    </>
  );
};

export default SolarSystemScene;
