import React from "react";
import { useParams } from "react-router-dom";
function Chat() {
  const { id } = useParams();
  return (
    <div className="w-full ">
      <div className="shadow-md px-5 py-3 flex justify-between items-center">
        <div>
          <span className="">#general</span>
        </div>
        <div>
          <span>Details</span>
        </div>
      </div>
      
    </div>
  );
}

export default Chat;
