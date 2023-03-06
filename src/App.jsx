import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Main/Home';
import About from './component/Main/About';
import Works from './component/Main/Works';
import Skills from './component/Main/Skills';

import { Header } from './component/Header/Header';

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/projects" element={<Works />} />
          <Route path='/skills'   element={<Skills />} />
        </Routes>
        <Header />
      </div>
    </HashRouter>
  );
};

export default App;
