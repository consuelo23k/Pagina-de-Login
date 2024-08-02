import { useState } from "react";

import "./login.css";

import { FaUser, FaLock } from "react-icons/fa";

const login = () => {
  const [username, setUsernsme] = useState("");
  const [password, setPassword] = useState("");

  const handleSumit = (event) => {
    event.preventDefault();

    alert("Enviando os dados:" + username + " - " + password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSumit}>
        <h1>Acesse o Sistema</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setUsernsme(e.targrt.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.targrt.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label htmlFor="">
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default login;
