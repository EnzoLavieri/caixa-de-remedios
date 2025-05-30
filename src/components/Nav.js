import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <ul class="nav justify-content-center p-4 fs-4 ">
        <li class="nav-item">
          <Link to={"/"} class="nav-link active" aria-current="page">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/operacoes"} class="nav-link active" aria-current="page">
            Operacoes
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/inventario"} class="nav-link">
            Inventario
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
