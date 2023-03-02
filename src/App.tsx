import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const mfeAddresses = {
  movies: "https://codechriscode.github.io/mfe-movie-list/",
  chat: "https://codechriscode.github.io/mfe-chat/",
};

type MfesType = keyof typeof mfeAddresses;


function App() {
  const [currentMfe, setCurrentMfe] = useState<MfesType | null>(null);

  return (
    <div className="App">
      <div className="navBar">
        <p className="logo">✨</p>
        <div className="appList">
          <button
            className="appButton"
            onClick={() => {
              /*renderMfe("movies")*/
            }}
          >
            🍿
          </button>
          <button
            className="appButton"
            onClick={() => {
              /*renderMfe("about")*/
            }}
          >
            📝
          </button>
        </div>
      </div>
      <div className="hosted-app">
        <h1 style={{ marginLeft: "1em" }}>
          Bem-vindo/a!<br/>Navegue a vontade entre widgets e paineis.
        </h1>
      </div>
    </div>
  );
}

type ContainerWindowType = typeof window & { isInContainer: boolean };
(window as ContainerWindowType).isInContainer = true;

export default App;
