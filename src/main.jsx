import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ATVhome from './Component/ATVhome.jsx'
import Footer from './Component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ATVhome />
    
  </StrictMode>,
)
