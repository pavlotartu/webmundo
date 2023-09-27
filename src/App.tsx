import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
