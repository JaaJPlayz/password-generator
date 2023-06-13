import { useState } from "react";

function App() {
  const [passSize, setPassSize] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  const passwordGenerator = (size: number) => {
    let password = "";
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-_=~`|/:;"<>()?';

    for (let i = 0; i < size; i++) {
      password += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return password;
  };

  const handleGeneratePassword = () => {
    const size = parseInt(passSize);
    const password = passwordGenerator(size);
    setGeneratedPassword(password);
  };

  return (
    <>
      <div className="App">
        <header>
          <h1>🔒Gerador de Senhas Aleatórias</h1>
        </header>
        <label><h2>Escolha o tamanho da senha:</h2></label>
        <input
          type="number"
          placeholder="Tamanho da senha"
          value={passSize}
          onChange={(e) => setPassSize(e.target.value)}
        />
        <button onClick={handleGeneratePassword}>Gerar</button>
        <h3>Senha Gerada:</h3>
        <h4>{generatedPassword}</h4>
      </div>
    </>
  );
}

export default App;
