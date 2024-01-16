import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
function App() {
  const [user,setUser] = useState(null);
  return (
    <div >
    
        {
          !user ? <h1>login</h1> : (
            
            <Header />
            <div className="flex ">
            <Sidebar className="overflow-y-hidden"/>
            <Routes >
              <Route
                path="/rooms/:id"
                 element={<Chat />}
    
              />
            </Routes>
            </Router>
            </div>

          )
        }
      
    
    </div>
  );
}

export default App;