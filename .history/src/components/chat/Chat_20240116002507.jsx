import React from "react";
import { useParams } from "react-router-dom";
function Chat() {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect (() => {})
  return (
    <div className="w-full ">
      <div className="shadow-md px-5 py-3 flex justify-between items-center">
        <div>
          <span className="font-semibold text-sm">#general</span>
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
