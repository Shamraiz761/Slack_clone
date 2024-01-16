import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <div className="flex ">
        <Sidebar />
        <RoutesclassName="ml-[400px]">
          <Route
            path="/rooms/:id"
             element={<Chat />}
          />
        </RoutesclassName=>

        </div>
      </Router>
    </div>
  );
}

export default App;
