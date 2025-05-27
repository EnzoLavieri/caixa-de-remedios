import { Button } from "react-bootstrap";

function Form() {
  return (
    <div class="m-5 p-4 w-50 mx-auto bg-light rounded-5">
      <div className="row">
        <div className="col-md-3 mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            placeholder="Nebacetim"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="nome" className="form-label">
            Marca
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            placeholder="Medley"
          />
        </div>
        <div className="col-md-2 mb-3">
          <label htmlFor="quantidade" className="form-label">
            Quantidade
          </label>
          <input
            type="text"
            className="form-control"
            id="quantidade"
            placeholder="2"
          />
        </div>
        <div class="col-md-2 mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Tipo
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Selecione</option>
            <option value="1">Pilula</option>
            <option value="2">Liquido</option>
            <option value="3">Spray</option>
            <option value="4">Pomada</option>
          </select>
        </div>{" "}
        <div class="col-md-2 mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Validade
          </label>
          <input
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            placeholder="Dia/Mes/Ano"
          ></input>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-9 mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Descrição
          </label>
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            placeholder="Remédio para infecção"
          />
        </div>
        <div className="col-md-3 d-flex justify-content-end align-items-end">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Genérico
            </label>
          </div>
        </div>
      </div>

      <Button>Adicionar</Button>
    </div>
  );
}

export default Form;
