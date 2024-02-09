import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Toggle from "./components/Toggle";
import Accessability from "./components/Accessability/Accessability";
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Nav />
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      ></Toggle>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
