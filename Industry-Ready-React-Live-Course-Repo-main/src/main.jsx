import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // You can change the name "App" to anything if it is a default export and if not, then use {} and inside it write exact name which you used while creating the component.  

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />
  // {/* </StrictMode>, */}
)
