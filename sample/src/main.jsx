import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <p id="array">Array:</p>
    <button onClick={App}>Click here for array</button>
  </StrictMode>,
)