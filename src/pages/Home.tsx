import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas, FaMoon, FaStar, FaHeartbeat } from 'react-icons/fa';

const Home = () => {
  const menuItems = [
    {
      title: 'Sistema Solar',
      description: 'Explora los planetas y el sol en 3D',
      icon: <FaGlobeAmericas className="text-6xl mb-4" />,
      path: '/sistema-solar',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Fases Lunares',
      description: 'Observa el ciclo lunar animado',
      icon: <FaMoon className="text-6xl mb-4" />,
      path: '/fases-lunares',
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      title: 'Constelaciones',
      description: 'Descubre las estrellas del firmamento',
      icon: <FaStar className="text-6xl mb-4" />,
      path: '/constelaciones',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Cuerpo Humano',
      description: 'Anatomía interactiva y animada',
      icon: <FaHeartbeat className="text-6xl mb-4" />,
      path: '/cuerpo-humano',
      gradient: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 z-10"
      >
        <h1 className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-pink">
          Enciclopedia Virtual
        </h1>
        <p className="text-2xl text-gray-300">
          Un viaje interactivo por el universo y el cuerpo humano
        </p>
      </motion.div>

      {/* Menu cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl z-10">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative"
          >
            <Link to={item.path}>
              <div className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 h-full flex flex-col items-center justify-center text-center cursor-pointer`}>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.icon}
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 text-center text-gray-400 z-10"
      >
        <p className="text-sm">
          Usa los botones para navegar entre las diferentes secciones
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
