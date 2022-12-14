import { useState } from 'react';

import './App.css';

function App() {
  const [emoji, setEmoji] = useState('🥺');
  const [emojiColor, setEmojiColor] = useState('white');
  const [emojiSize, setEmojiSize] = useState(90);
  const [emojiRotate, setEmojiRotate] = useState(0);

  return (
    <>
      <div className="title-container">
        <h1 className="title">Emoji Kit</h1>
      </div>

      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-6">
            <div
              className="main-emoji-container py-3 mx-auto mb-5"
              style={{
                backgroundColor: emojiColor,
                width: '12rem',
                transform: `rotate(${emojiRotate}deg)`,
              }}>
              <div className="main-emoji-item" style={{ fontSize: `${emojiSize}px` }}>
                {emoji}
              </div>
            </div>

            <div className=" row emoji-container mx-auto">
              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🥺');
                }}>
                🥺
              </div>

              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🎁');
                }}>
                🎁
              </div>

              <div
                className="col-lg-2  emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🎯');
                }}>
                🎯
              </div>

              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('👨‍🎓');
                }}>
                👨‍🎓
              </div>
            </div>

            <div className=" row emoji-container mx-auto">
              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🎈');
                }}>
                🎈
              </div>

              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🥇');
                }}>
                🥇
              </div>

              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('💻');
                }}>
                💻
              </div>

              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🥥');
                }}>
                🥥
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4">
            <div className="colors-title-container">
              <h4 className="colors-title">Colors</h4>
            </div>
            <div className="colors-container mx-auto">
              <div
                className="color-item bg-sky"
                onClick={() => {
                  setEmojiColor('#648de5');
                }}></div>

              <div
                className="color-item bg-green"
                onClick={() => {
                  setEmojiColor('#60d394');
                }}></div>

              <div
                className="color-item bg-white"
                onClick={() => {
                  setEmojiColor('#f7f7ff');
                }}></div>

              <div
                className="color-item bg-pink"
                onClick={() => {
                  setEmojiColor('#fe6d73');
                }}></div>

              <div
                className="color-item bg-purple"
                onClick={() => {
                  setEmojiColor('#bdb2ff');
                }}></div>
            </div>

            <div className="colors-title-container">
              <h4 className="colors-title">Size</h4>
            </div>
            <div className="size-container mx-auto">
              <input
                type="range"
                min="50"
                max="100"
                className="slider"
                onChange={(e) => {
                  setEmojiSize(e.target.value);
                }}></input>
            </div>

            <div className="colors-title-container">
              <h4 className="colors-title">Rotation</h4>
            </div>
            <div className="size-container mx-auto">
              <input
                type="range"
                max="360"
                className="slider"
                onChange={(e) => {
                  setEmojiRotate(e.target.value);
                }}></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
