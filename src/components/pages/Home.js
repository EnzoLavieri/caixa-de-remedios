import NavBar from "../Nav";
function Home() {
  return (
    <div>
      <div class="card m-5 p-4 w-50 mx-auto  rounded-5">
        <img src="/cardImg.png" class="card-img-top rounded-5" alt="..." />
        <div class="card-body">
          <h1 class="card-title text-center m-3">
            Bem vindo a caixa de remedios!
          </h1>
          <p class="card-text">
            Aqui você pode gerenciar seus medicamentos, registrar operações e
            manter o controle do seu inventário de forma simples e eficiente.
            Explore as opções abaixo para começar a organizar todos seus
            medicamentos.
          </p>
          <NavBar></NavBar>
        </div>
      </div>
    </div>
  );
}

export default Home;
