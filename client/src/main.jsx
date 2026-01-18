import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './font-size.css'
import './color.css'
import './margin.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
