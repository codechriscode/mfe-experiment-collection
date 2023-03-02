import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

type ContainerWindowType = typeof window & { isInContainer: boolean };
(window as ContainerWindowType).isInContainer = true;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
