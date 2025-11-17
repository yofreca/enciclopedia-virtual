import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { sunData } from '../../data/planetsData';

interface SunProps {
  onClick: () => void;
}

const Sun = ({ onClick }: SunProps) => {
  const sunRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.001;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y -= 0.0005;
      // Efecto de pulsación sutil
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      glowRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      {/* Luz del sol */}
      <pointLight position={[0, 0, 0]} intensity={2} distance={300} color="#FDB813" />
      <ambientLight intensity={0.1} />

      {/* Glow exterior */}
      <mesh ref={glowRef} onClick={onClick}>
        <sphereGeometry args={[sunData.radius * 1.2, 32, 32]} />
        <meshBasicMaterial
          color={sunData.color}
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>

      {/* El sol */}
      <mesh ref={sunRef} onClick={onClick}>
        <sphereGeometry args={[sunData.radius, 32, 32]} />
        <meshBasicMaterial color={sunData.color} />
      </mesh>
    </group>
  );
};

export default Sun;
