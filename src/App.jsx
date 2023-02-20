import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Main/Home';
import About from './component/Main/About';
import Works from './component/Main/Works';
import Skills from './component/Main/Skills';
import Footer from './component/Footer/Footer';

import { Header } from './component/Header/Header';

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home"      element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/projects" element={<Works />} />
          <Route path='/skills'    element={<Skills />} />
        </Routes>
        <Home />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
