function Form() {
  return (
    <div>
      <div class="input-group input-group-lg margin-custom fs-1">
        <span class="input-group-text" id="inputGroup-sizing-lg">
          Nome
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
      <div class="input-group input-group-lg margin-custom">
        <span class="input-group-text" id="inputGroup-sizing-lg">
          Descricao
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
      <div class="input-group input-group-lg margin-custom">
        <span class="input-group-text" id="inputGroup-sizing-lg">
          Quantiedade
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
    </div>
  );
}

export default Form;
