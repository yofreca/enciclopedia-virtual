import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { type PlanetData } from '../../data/planetsData';

interface PlanetProps {
  data: PlanetData;
  onClick: () => void;
  speedMultiplier: number;
  isPaused: boolean;
}

const Planet = ({ data, onClick, speedMultiplier, isPaused }: PlanetProps) => {
  const planetRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const angleRef = useRef(Math.random() * Math.PI * 2); // Posición inicial aleatoria

  // Crear la geometría de la órbita
  const orbitLine = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * data.distance,
          0,
          Math.sin(angle) * data.distance
        )
      );
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [data.distance]);

  useFrame(() => {
    if (isPaused) return;

    // Rotación del planeta sobre su eje
    if (planetRef.current) {
      planetRef.current.rotation.y += data.rotationSpeed * speedMultiplier;
    }

    // Movimiento orbital
    if (orbitRef.current) {
      angleRef.current += data.orbitSpeed * speedMultiplier;
      const x = Math.cos(angleRef.current) * data.distance;
      const z = Math.sin(angleRef.current) * data.distance;
      orbitRef.current.position.set(x, 0, z);
    }
  });

  return (
    <group>
      {/* Línea de órbita */}
      <lineLoop geometry={orbitLine}>
        <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
      </lineLoop>

      {/* Planeta */}
      <group ref={orbitRef}>
        <mesh ref={planetRef} onClick={onClick}>
          <sphereGeometry args={[data.radius, 32, 32]} />
          <meshStandardMaterial
            color={data.color}
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>

        {/* Anillo para Saturno */}
        {data.name === 'Saturno' && (
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[data.radius * 1.5, data.radius * 2.5, 64]} />
            <meshStandardMaterial
              color="#C9A66B"
              side={THREE.DoubleSide}
              transparent
              opacity={0.8}
            />
          </mesh>
        )}
      </group>
    </group>
  );
};

export default Planet;
