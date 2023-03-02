import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="navBar">
        <p className="logo">✨</p>
        <div className="appList">
          <button className="appButton" onClick={() => {/*renderMfe("movies")*/}}>
            🍿
          </button>
          <button className="appButton" onClick={() => {/*renderMfe("about")*/}}>
            📝
          </button>
        </div>
      </div>
      <div className="hosted-app"></div>
    </div>
  );
}

type ContainerWindowType = typeof window & { isInContainer: boolean };
(window as ContainerWindowType).isInContainer = true;

export default App
