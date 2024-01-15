
import React from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row flex-1 overflow-hidden">
        <Sidebar />
        {/* Other main content goes here */}
      </div>
    </div>
  )
}

export default App
