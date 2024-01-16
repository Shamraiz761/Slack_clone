import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
function Chat() {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
    }
    db.collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamps", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [id]);

  console.log(messages);

  return (
    <div className="w-full ">
      <div className="shadow-md px-5 py-3 flex justify-between items-center">
        <div>
          <span className="font-semibold text-sm"># {roomDetails?.name}</span>
        </div>
        <div>
          <span>Details</span>
        </div>
      </div>
      <div className="ml-3 mt-3 ">
        {messages.map((message) => (
          <div className="flex flex-row items-center ">
            <img src={message.userImage} className="h-10 w-10 rounded-full"/>
            <span className="ml-2 text-sm font-medium">{message.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
