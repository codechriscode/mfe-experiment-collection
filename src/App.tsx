import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const mfesHost = "https://codechriscode.github.io";

const mfeAddresses = {
  movies: "/mfe-movie-list/",
  chat: "/mfe-chat/",
};

type MfesType = keyof typeof mfeAddresses;

function App() {
  const [currentMfe, setCurrentMfe] = useState<MfesType | null>(null);

  function addScript(scriptUrl: string, link: boolean = false) {
    const mfeInject = document.createElement(link ? "link" : "script");
    mfeInject.setAttribute(link ? "href" : "src", scriptUrl);
    link && mfeInject.setAttribute("rel", "stylesheet");
    document.head.appendChild(mfeInject);
    console.log(mfeInject);
  }

  const getRealAddress = (addr: string, mfe: MfesType) => {
    return mfesHost + addr.slice(addr.indexOf(mfeAddresses[mfe]));
  };

  async function getScript(mfe: MfesType) {
    const page = await fetch(mfesHost + mfeAddresses[mfe]).then((r) =>
      r.text()
    );
    console.log(page);
    const doc = new DOMParser().parseFromString(page, "text/html");
    const provisionalScriptAddress = doc.getElementsByTagName("script")[0].src;

    const provisionalLinks = [...doc.getElementsByTagName("link")];
    const linkAddresses = provisionalLinks.map((l) =>
      getRealAddress(l.href, mfe)
    );

    const scriptAddress = getRealAddress(provisionalScriptAddress, mfe);
    linkAddresses.map((l) => addScript(l, true));

    return scriptAddress;
  }

  async function renderMfe(mfe: MfesType) {
    setCurrentMfe((prev: MfesType | null) => {
      prev && removeMfe(prev);
      return mfe;
    });
    const scriptFileAddress: string = await getScript(mfe);
    console.log(scriptFileAddress);
    addScript(scriptFileAddress);
  }

  function removeMfe(mfe: MfesType) {}

  return (
    <div className="App">
      <div className="navBar">
        <p className="logo">✨</p>
        <div className="appList">
          <button className="appButton" onClick={() => renderMfe("movies")}>
            🍿
          </button>
          <button className="appButton" onClick={() => renderMfe("chat")}>
            📝
          </button>
        </div>
      </div>
      <div id="hosted-app" className="hosted-app">
        <h1 style={{ marginLeft: "1em" }}>
          Bem-vindo/a!
          <br />
          Navegue a vontade entre widgets e paineis.
        </h1>
      </div>
    </div>
  );
}

type ContainerWindowType = typeof window & { isInContainer: boolean };
(window as ContainerWindowType).isInContainer = true;

export default App;
