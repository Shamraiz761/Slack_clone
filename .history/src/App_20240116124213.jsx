import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
function App() {
  const [user,setUser] = useState(null);
  return (
    <div >
      <Router>
        {
          !user ? <h1>login</h1> : (
            

          )
        }
      
      </Router>
    </div>
  );
}

export default App;
