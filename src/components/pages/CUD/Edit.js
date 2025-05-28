import React, { useEffect, useState } from "react";
import NavBar from "../../Nav";
import Options from "../../Options";
import Form from "../../Form";

function Edit() {
  const [values, setValues] = useState([]);

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
          setValues([]); // Evita crash
        }
      })
      .catch((error) => console.error("Erro ao buscar medicamentos:", error));
  }, []);

  console.log(values);

  return (
    <div>
      <NavBar />
      <Options />

      <select
        className="form-select"
        size="1"
        aria-label="Selecione um medicamento"
        style={{ width: "15rem", alignContent: "center", margin: "20px auto" }}
      >
        <option value="">Selecione um medicamento</option>
        {values.map((medicamento) => (
          <option key={medicamento.name} value={medicamento.name}>
            {medicamento.name}
          </option>
        ))}
      </select>
      <Form />
    </div>
  );
}

export default Edit;
