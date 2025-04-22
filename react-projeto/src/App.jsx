import { useState } from "react";

function App() {
  const [mensagem, mudarMensagem] = useState("ainda não foi clicado");
  return (
    <div>
      <h1>{mensagem}</h1>
      <button onClick={() => {
        mudarMensagem("foi clidado");
      }}> Mudar Mensagem </button>
    </div>
  );
}

export default App;
