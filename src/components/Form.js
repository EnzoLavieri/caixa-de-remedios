import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Form() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [generic, setGeneric] = useState(false);

  const handleSubmit = async () => {
    const dados = {
      name,
      brand,
      description,
      quantity: parseInt(quantity),
      type,
      level,
      generic,
      expirationDate,
    };

    console.log("Dados enviados:", dados);

    try {
      const response = await fetch("http://127.0.0.1:3333/api/medicaments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      const resultado = await response.json();
      console.log("Resposta da API:", resultado);

      setName("");
      setBrand("");
      setQuantity("");
      setType("");
      setExpirationDate("");
      setDescription("");
      setLevel("");
      setGeneric(false);
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  return (
    <div className=" p-4 w-50 mx-auto bg-light rounded-5">
      <div className="row">
        <div className="col-md-3 mb-3">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nebacetim"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="brand" className="form-label">
            Marca
          </label>
          <input
            type="text"
            className="form-control"
            id="brand"
            placeholder="Medley"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantidade
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            placeholder="2"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-3">
          <label htmlFor="type" className="form-label">
            Tipo
          </label>
          <select
            className="form-select"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Pill">Pílula</option>
            <option value="Liquid">Líquido</option>
            <option value="Spray">Spray</option>
            <option value="Ointment">Pomada</option>
            <option value="Tablet">Comprimido</option>
          </select>
        </div>
        <div className="col-md-2 mb-3">
          <label htmlFor="expirationDate" className="form-label">
            Validade
          </label>
          <input
            type="text"
            className="form-control"
            id="expirationDate"
            placeholder="Dia/Mês/Ano"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-8 mb-3">
          <label htmlFor="description" className="form-label">
            Descrição
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Remédio para infecção"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-3">
          <label htmlFor="level" className="form-label">
            Nível
          </label>
          <select
            className="form-select"
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Full">Cheio</option>
            <option value="Half Full">Meio Cheio</option>
            <option value="Half">Pela metade</option>
            <option value="Less than half">Menos da metade</option>
            <option value="Almost empty">Quase vazio</option>
          </select>
        </div>
        <div className="col-md-2 align-items-center">
          <div className="form-check mt-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="generic"
              checked={generic}
              onChange={(e) => setGeneric(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="generic">
              Genérico
            </label>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Button onClick={handleSubmit}>Adicionar</Button>
      </div>
    </div>
  );
}

export default Form;
