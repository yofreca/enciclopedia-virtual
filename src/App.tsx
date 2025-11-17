import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import SistemaSolar from './pages/SistemaSolar';
import FasesLunares from './pages/FasesLunares';
import Constelaciones from './pages/Constelaciones';
import CuerpoHumano from './pages/CuerpoHumano';
import Cerebro from './pages/CuerpoHumano/Cerebro';
import SistemaNervioso from './pages/CuerpoHumano/SistemaNervioso';
import SistemaCirculatorio from './pages/CuerpoHumano/SistemaCirculatorio';
import SistemaRespiratorio from './pages/CuerpoHumano/SistemaRespiratorio';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sistema-solar" element={<SistemaSolar />} />
          <Route path="/fases-lunares" element={<FasesLunares />} />
          <Route path="/constelaciones" element={<Constelaciones />} />
          <Route path="/cuerpo-humano" element={<CuerpoHumano />} />
          <Route path="/cuerpo-humano/cerebro" element={<Cerebro />} />
          <Route path="/cuerpo-humano/nervioso" element={<SistemaNervioso />} />
          <Route path="/cuerpo-humano/circulatorio" element={<SistemaCirculatorio />} />
          <Route path="/cuerpo-humano/respiratorio" element={<SistemaRespiratorio />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
