import { Link } from "react-router-dom";

function Options() {
  return (
    <div>
      <ul class="nav justify-content-center fs-4">
        <li class="createRemedio">
          <Link
            to={"/operacoes/criar"}
            class="nav-link active"
            aria-current="page"
          >
            Criar
          </Link>
        </li>
        <li class="editRemedio">
          <a class="nav-link" href="#">
            Editar
          </a>
        </li>

        <li class="delRemedio">
          <a class="nav-link ">Excluir</a>
        </li>
      </ul>
    </div>
  );
}

export default Options;
