import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBrain, FaHeartbeat, FaLungs } from 'react-icons/fa';

const CuerpoHumano = () => {
  const sistemas = [
    {
      title: 'Sistema Nervioso',
      icon: <FaBrain className="text-5xl mb-3" />,
      path: '/cuerpo-humano/nervioso',
      gradient: 'from-purple-500 to-indigo-600',
      description: 'Explora el cerebro y las neuronas'
    },
    {
      title: 'Sistema Circulatorio',
      icon: <FaHeartbeat className="text-5xl mb-3" />,
      path: '/cuerpo-humano/circulatorio',
      gradient: 'from-red-500 to-rose-600',
      description: 'Descubre el corazón y la sangre'
    },
    {
      title: 'Sistema Respiratorio',
      icon: <FaLungs className="text-5xl mb-3" />,
      path: '/cuerpo-humano/respiratorio',
      gradient: 'from-cyan-500 to-blue-600',
      description: 'Aprende sobre los pulmones'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">
          Atlas del Cuerpo Humano
        </h1>
        <p className="text-xl text-gray-300">
          Explora los sistemas del cuerpo humano de forma interactiva
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {sistemas.map((sistema, index) => (
          <motion.div
            key={sistema.path}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link to={sistema.path}>
              <div className={`bg-gradient-to-br ${sistema.gradient} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center text-center cursor-pointer`}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {sistema.icon}
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">{sistema.title}</h2>
                <p className="text-sm opacity-90">{sistema.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CuerpoHumano;
