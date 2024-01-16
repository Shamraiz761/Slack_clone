import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
function Chat() {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect (() => {
    if(id){
        db.collection('rooms').doc(id).onSnapshot(snapshot => (
            setRoomDetails(snapshot.data())
        ))
    }
  }, [])

  console.log(roomDetails);
  return (
    <div className="w-full ">
      <div className="shadow-md px-5 py-3 flex justify-between items-center">
        <div>
          <span className="font-semibold text-sm"># {roomDetails.name}</span>
        </div>
        <div>
          <span>Details</span>
        </div>
      </div>
      <div>

      </div>
      
    </div>
  );
}

export default Chat;
