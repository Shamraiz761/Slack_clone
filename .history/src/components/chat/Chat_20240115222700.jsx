import React from "react";
import { useParams } from "react-router-dom";
function Chat() {
  const { id } = useParams();
  return (
    <div className="">
      <div className="shadow-md px-5 flex justify-between items-center">
        <div>
          <span>#general</span>
        </div>
        <div>
          <span>Details</span>
        </div>
      </div>
      
    </div>
  );
}

export default Chat;
