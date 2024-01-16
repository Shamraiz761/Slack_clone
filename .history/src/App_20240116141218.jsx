import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
function App() {
  const [user,setUser] = useState(true);
  return (
    <div >
    <Router>
        {
          !user ? <Use: (
            <>
            <Header />
            <div className="flex ">
            <Sidebar className="overflow-y-hidden"/>
            <Routes >
              <Route
                path="/rooms/:id"
                 element={<Chat />}
    
              />
            </Routes>
           
            </div>
            </>
          )
        }
      
      </Router>
    </div>
  );
}

export default App;
