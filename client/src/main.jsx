import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Table from './pages/LeadsTable.jsx'
import MainPage from './pages/MainPage.jsx'
import { BrowserRouter,Router ,Routes,Route} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<App/>}/>
         <Route path='/table' element={<Table/>}/>
      </Routes>
  
   
  </BrowserRouter>
)
