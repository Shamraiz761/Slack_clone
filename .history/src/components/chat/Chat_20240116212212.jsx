import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import firebase from "firebase/compat/app";
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
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [id]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (id && input.trim() !== "") {
      try {
        await db.collection("rooms").doc(id).collection("messages").add({
          message: input.trim(),
          username: "Shamraiz",
          userImage:
            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput(""); // Clear the input field after sending the message
      } catch (error) {
        console.error("Error sending message:", error.message);
      }
    }
  };

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
      <div className="m-5 overflow-y-scroll " style={{maxHeight:'70vh'}}>
        {messages.map((message) => (
          <div className="flex flex-row  mb-5 ">
            <img src={message.userImage} className="h-12 w-12 rounded-full" />
            <div className="ml-2 flex flex-col">
              <span className="  font-semibold">{message.username}</span>
              <span className=" text-sm ">{message.message}</span>
            </div>
          </div>
        ))}
      </div>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-1/2 mx-3 rounded-md border shadow-md  px-3 py-2"
          placeholder="type"
        />
        <button
          className="bg-green-500 text-white px-6 font-medium py-2.5 mt-2 text-sm rounded-md "
          onClick={sendMessage}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
