import NavBar from "../Nav";

function Inventory() {
  return (
    <div>
      <div>
        <header
          className="bg-secondary-subtle rounded-5 rounded-top-0 border border-top-0 border-primary "
          style={{ width: "120vh", alignItems: "center", margin: "0 auto" }}
        >
          <NavBar />
        </header>{" "}
      </div>
    </div>
  );
}

export default Inventory;
