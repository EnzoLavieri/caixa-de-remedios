import NavBar from "../../Nav";
import Options from "../../Options";
import Form from "../../Form";

function Create() {
  return (
    <div>
      <header
        className="bg-secondary-subtle rounded-5 rounded-top-0 border border-top-0 border-primary "
        style={{ width: "120vh", alignItems: "center", margin: "0 auto" }}
      >
        <NavBar />
      </header>{" "}
      <Options />
      <Form></Form>
    </div>
  );
}

export default Create;
