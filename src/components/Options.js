import { Link } from "react-router-dom";

function Options() {
  return (
    <div>
      <ul class="nav justify-content-center fs-4 m-2">
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
          <Link
            to={"/operacoes/editar"}
            class="nav-link active"
            aria-current="page"
          >
            Editar
          </Link>
        </li>

        <li class="editRemedio">
          <Link
            to={"/operacoes/excluir"}
            class="nav-link active"
            aria-current="page"
          >
            Excluir
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Options;
