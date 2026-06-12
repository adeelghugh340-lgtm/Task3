import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Task3 from './components/Task3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Task3/> */}
  </StrictMode>,
)
