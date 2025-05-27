import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Operations from "./components/pages/Opeations";
import Inventory from "./components/pages/Inventory";
import Create from "./components/pages/CUD/Create";
import Home from "./components/pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operacoes" element={<Operations />} />
        <Route path="/operacoes/criar" element={<Create />} />
        <Route path="/operacoes/editar" element={<Create />} />
        <Route path="/operacoes/excluir" element={<Create />} />
        <Route path="/inventario" element={<Inventory />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
