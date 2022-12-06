import { useState } from "react";

import "./App.css";

function App() {
  const [emoji, setEmoji] = useState("🥺");

  return (
    <>
      <div className="title-container">
        <h1 className="title">Emoji Kit</h1>
      </div>
      <div className="main-emoji-container">
        <div className="main-emoji-item">{emoji}</div>
      </div>
      <div className="emoji-container">
        <div
          className="emoji"
          onClick={() => {
            setEmoji("🥺");
          }}
        >
          🥺
        </div>

        <div
          className="emoji"
          onClick={() => {
            setEmoji("🎁");
          }}
        >
          🎁
        </div>

        <div
          className="emoji"
          onClick={() => {
            setEmoji("🎯");
          }}
        >
          🎯
        </div>

        <div
          className="emoji"
          onClick={() => {
            setEmoji("👨‍🎓");
          }}
        >
          👨‍🎓
        </div>

        <div
          className="emoji"
          onClick={() => {
            setEmoji("💻");
          }}
        >
          💻
        </div>
      </div>
    </>
  );
}

export default App;
