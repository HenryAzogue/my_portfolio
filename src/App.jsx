import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Works from "./Page/Works";

import { Header } from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
export default App;
