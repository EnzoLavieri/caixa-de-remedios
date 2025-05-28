import React, { useEffect, useState } from "react";
import NavBar from "../../Nav";
import Options from "../../Options";
import { Button } from "react-bootstrap";

function Edit() {
  const [values, setValues] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    brand: "",
    quantity: "",
    type: "",
    expirationDate: "",
    description: "",
    level: "",
    generic: false,
  });

  useEffect(() => {
    fetch("http://127.0.0.1:3333/api/medicaments")
      .then((res) => res.json())
      .then((val) => {
        if (Array.isArray(val)) {
          setValues(val);
        } else if (Array.isArray(val.medicaments)) {
          setValues(val.medicaments);
        } else {
          console.error("Formato de resposta inesperado:", val);
          setValues([]);
        }
      })
      .catch((error) => console.error("Erro ao buscar medicamentos:", error));
  }, []);

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    const selectedMed = values.find((med) => med.id === selectedId);
    if (selectedMed) {
      setFormData({
        id: selectedMed.id || "",
        name: selectedMed.name || "",
        brand: selectedMed.brand || "",
        quantity: selectedMed.quantity || "",
        type: selectedMed.type || "",
        expirationDate: selectedMed.expirationDate || "",
        description: selectedMed.description || "",
        level: selectedMed.level || "",
        generic: selectedMed.generic || false,
      });
    } else {
      setFormData({
        id: "",
        name: "",
        brand: "",
        quantity: "",
        type: "",
        expirationDate: "",
        description: "",
        level: "",
        generic: false,
      });
    }
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    if (!formData.id) {
      alert("Selecione um medicamento para atualizar.");
      return;
    }

    fetch(`http://127.0.0.1:3333/api/medicaments/${formData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao atualizar medicamento");
        return res.json();
      })
      .then((data) => {
        alert("Medicamento atualizado com sucesso!");
      })
      .catch((error) => {
        alert("Erro: " + error.message);
      });
  };

  return (
    <div>
      <NavBar />
      <Options />

      <select
        className="form-select"
        onChange={handleSelectChange}
        value={formData.id}
        style={{ width: "15rem", alignContent: "center", margin: "20px auto" }}
      >
        <option value="">Selecione um medicamento</option>
        {values.map((medicamento) => (
          <option key={medicamento.id} value={medicamento.id}>
            {medicamento.name}
          </option>
        ))}
      </select>

      <div className="m-5 p-4 w-50 mx-auto bg-light rounded-5">
        <div className="row">
          <div className="col-md-3 mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.brand}
              onChange={handleChange}
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
              value={formData.quantity}
              onChange={handleChange}
              min={1}
            />
          </div>

          <div className="col-md-2 mb-3">
            <label htmlFor="type" className="form-label">
              Tipo
            </label>
            <select
              className="form-select"
              id="type"
              value={formData.type}
              onChange={handleChange}
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
              value={formData.expirationDate}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2 mb-3">
            <label htmlFor="level" className="form-label">
              Nível
            </label>
            <select
              className="form-select"
              id="level"
              value={formData.level}
              onChange={handleChange}
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
                checked={formData.generic}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="generic">
                Genérico
              </label>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Button onClick={handleSubmit}>Atualizar</Button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
