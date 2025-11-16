import { motion } from 'framer-motion';

const SistemaCirculatorio = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-4 text-red-400">
          Sistema Circulatorio
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Próximamente: Visualización animada del sistema circulatorio
        </p>
        <div className="text-gray-400">
          Esta sección mostrará el corazón, arterias y venas con animaciones
          del flujo sanguíneo y latidos cardíacos.
        </div>
      </motion.div>
    </div>
  );
};

export default SistemaCirculatorio;
