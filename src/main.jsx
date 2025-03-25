import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoutesPages from './routes/route'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesPages />
  </StrictMode>
)
