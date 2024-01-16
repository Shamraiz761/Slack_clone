
import React from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
  <div className="">
   <Router>
      <Header />
       <Sidebar />
<Routes>
  <Route   path='rooms/:id' element={<Chat}/>
</Routes>

       </Router>
    </div>
  )
}

export default App
