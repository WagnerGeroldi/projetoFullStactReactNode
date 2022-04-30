/* imports REACT*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Teste } from "./Pages/Teste";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/teste" element={<Teste/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
