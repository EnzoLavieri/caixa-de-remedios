import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Opeations from "./components/pages/Opeations";
import Inventory from "./components/pages/Inventory";
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
        <Route path="/operacoes" element={<Opeations />} />
        <Route path="/inventario" element={<Inventory />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
