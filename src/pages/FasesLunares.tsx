import { motion } from 'framer-motion';

const FasesLunares = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-300">
          Fases Lunares Animadas
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Próximamente: Visualización del ciclo lunar completo
        </p>
        <div className="text-gray-400">
          Esta sección mostrará las 8 fases lunares con animaciones suaves
          y controles interactivos para explorar cada fase.
        </div>
      </motion.div>
    </div>
  );
};

export default FasesLunares;
