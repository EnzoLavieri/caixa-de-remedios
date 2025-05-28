import { Button } from "react-bootstrap";
import NavBar from "../Nav";
import Options from "../Options";

function Operations() {
  return (
    <div>
      <header
        className="bg-secondary-subtle rounded-5 rounded-top-0 border border-top-0 border-primary "
        style={{ width: "120vh", alignItems: "center", margin: "0 auto" }}
      >
        <NavBar />
      </header>
      <div class="card  p-4 w-50 mx-auto  rounded-5 text-center m-5">
        <h3>Selecione umas das tres opces a baixo para fazer uma acao </h3>
        <Options />
      </div>
    </div>
  );
}

export default Operations;
