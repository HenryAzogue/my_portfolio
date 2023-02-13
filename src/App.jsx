import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Works from './component/Works';
import { Header } from './component/Header/Header';

function App() {

  return (
    <HashRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/inicio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyectos" element={<Works />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
