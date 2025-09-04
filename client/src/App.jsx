import { useState } from 'react'

import MainPage from './pages/MainPage';
import { Toaster } from 'react-hot-toast';
function App() {
  

  return (
    <>
     <MainPage/>
       <Toaster position="top-right" />
    </>
  )
}

export default App
