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

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Descricao
        </label>
        <input
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
          placeholder="Remedio para infeccao"
        ></input>
      </div>
    </div>
  );
}

export default Form;
