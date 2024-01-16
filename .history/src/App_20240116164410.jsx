import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
import User from "./user/User";
function App() {
  const [user,setUser] = useState(false);
  const [state,dispatch] = useStateValu
  return (
    <div >
    <Router>
        {
          !user ? <User /> : (
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
