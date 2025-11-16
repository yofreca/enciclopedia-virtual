import { motion } from 'framer-motion';

const SistemaSolar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4 text-cosmic-blue">
          Sistema Solar Interactivo
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Próximamente: Visualización 3D del sistema solar
        </p>
        <div className="text-gray-400">
          Esta sección contendrá una representación interactiva en 3D del sistema solar
          con planetas, órbitas y controles de navegación.
        </div>
      </motion.div>
    </div>
  );
};

export default SistemaSolar;
