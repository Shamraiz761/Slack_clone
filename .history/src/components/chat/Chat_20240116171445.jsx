import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
function Chat() {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

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
      <div className="m-5">
        {messages.map((message) => (
          <div className="flex flex-row  ">
            <img src={message.userImage} className="h-12 w-12 rounded-full"/>
            <div className="ml-2 flex flex-col">
            <span className="  font-semibold">{message.username}</span>
            <span className=" text-sm ">{message.message}</span>

            </div>
          </div>
        ))}
      </div>
      <input type="text" value={(e) => {setInput(e.target.value)}}/>
    </div>
  );
}

export default Chat;
