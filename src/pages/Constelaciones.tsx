import { motion } from 'framer-motion';

const Constelaciones = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4 text-cosmic-gold">
          Constelaciones Animadas
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Próximamente: Cielo estrellado interactivo
        </p>
        <div className="text-gray-400">
          Esta sección presentará las principales constelaciones con animaciones,
          información mitológica y científica.
        </div>
      </motion.div>
    </div>
  );
};

export default Constelaciones;
