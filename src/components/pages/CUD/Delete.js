import React from "react";
import NavBar from "../../Nav";
import Options from "../../Options";

function Delete() {
  return (
    <div>
      <header
        className="bg-secondary-subtle rounded-5 rounded-top-0 border border-top-0 border-primary "
        style={{ width: "120vh", alignItems: "center", margin: "0 auto" }}
      >
        <NavBar />
      </header>{" "}
      <Options></Options>
    </div>
  );
}

export default Delete;
