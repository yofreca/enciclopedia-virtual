import { motion } from 'framer-motion';

const SistemaRespiratorio = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-4 text-cyan-400">
          Sistema Respiratorio
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Próximamente: Visualización animada del sistema respiratorio
        </p>
        <div className="text-gray-400">
          Esta sección mostrará los pulmones, tráquea y bronquios con animaciones
          del ciclo respiratorio y el intercambio gaseoso.
        </div>
      </motion.div>
    </div>
  );
};

export default SistemaRespiratorio;
