import { StrictMode } from 'react' 
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'leaflet/dist/leaflet.css'
import App from './App.jsx'
import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {' '}
    <Navbar/>
    <App />
    </BrowserRouter>
  
  </StrictMode>,
)
