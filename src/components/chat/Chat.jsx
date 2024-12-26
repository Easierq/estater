import "./chat.scss";

import { useState } from "react";
// import { useContext, useEffect, useRef, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import apiRequest from "../../lib/apiRequest";
// import { format } from "timeago.js";
// import { SocketContext } from "../../context/SocketContext";
// import { useNotificationStore } from "../../lib/notificationStore";

function Chat({ chats }) {
  const [chat, setChat] = useState(false);
  // const currentUser = null
  // const { currentUser } = useContext(AuthContext);
  // const { socket } = useContext(SocketContext);

  // const messageEndRef = useRef();

  // const decrease = useNotificationStore((state) => state.decrease);

  // useEffect(() => {
  //   messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [chat]);

  // const handleOpenChat = async (id, receiver) => {
  //   try {
  //     const res = await apiRequest("/chats/" + id);
  //     if (!res.data.seenBy.includes(currentUser.id)) {
  //       decrease();
  //     }
  //     setChat({ ...res.data, receiver });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const text = formData.get("text");

  //   if (!text) return;
  //   try {
  //     const res = await apiRequest.post("/messages/" + chat.id, { text });
  //     setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
  //     e.target.reset();
  //     socket.emit("sendMessage", {
  //       receiverId: chat.receiver.id,
  //       data: res.data,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   const read = async () => {
  //     try {
  //       await apiRequest.put("/chats/read/" + chat.id);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   if (chat && socket) {
  //     socket.on("getMessage", (data) => {
  //       if (chat.id === data.chatId) {
  //         setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
  //         read();
  //       }
  //     });
  //   }
  //   return () => {
  //     socket.off("getMessage");
  //   };
  // }, [socket, chat]);

  return (
    <div className="chat">
      <div className="chat-container">
        <div className="messages">
          <h1>Messages</h1>
          <div
            className="message"
            onClick={() => setChat(!chat)}
            // onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src="/noavatar.jpg" alt="" />
            <span>isiaq</span>
            <p>How are you doing</p>
          </div>
          <div
            className="message"
            // onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src="/noavatar.jpg" alt="" />
            <span>isiaq</span>
            <p>How are you doing</p>
          </div>
          <div
            className="message"
            // onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src="/noavatar.jpg" alt="" />
            <span>isiaq</span>
            <p>How are you doing</p>
          </div>
        </div>
        {/* {chat && ( */}
        <div className={chat ? "chatBox active" : "chatBox"}>
          <div className="top">
            <div className="user">
              <span
                onClick={() => {
                  setChat(!chat);
                }}
              >
                xx
              </span>
              <img src="noavatar.jpg" alt="" />
              wale
            </div>
            <span className="close" onClick={() => setChat(!chat)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>How you dey</p>
              <span>1 hour ago</span>
            </div>
            {/* <div ref={messageEndRef}></div> */}
          </div>
          <form className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default Chat;
