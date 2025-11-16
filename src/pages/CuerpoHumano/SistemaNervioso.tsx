import { motion } from 'framer-motion';

const SistemaNervioso = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-4 text-purple-400">
          Sistema Nervioso
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Próximamente: Visualización animada del sistema nervioso
        </p>
        <div className="text-gray-400">
          Esta sección mostrará el cerebro, la médula espinal y los nervios
          con animaciones de impulsos nerviosos y sinapsis.
        </div>
      </motion.div>
    </div>
  );
};

export default SistemaNervioso;
