import { useState } from 'react';

// import './App.css';

function App() {
  const [emoji, setEmoji] = useState('🥺');
  const [emojiColor, setEmojiColor] = useState('bg-white');
  const [emojiSize, setEmojiSize] = useState(90);
  const [emojiRotate, setEmojiRotate] = useState(0);

  return (
    <>
      <div className="bg-white w-40 mx-auto text-center my-5 py-1.5 border-2 border-gray-500 rounded-md">
        <h1 className="text-grey text-3xl">Emoji Kit</h1>
      </div>

      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center">
          <div className="md:w-1/2 ">
            <div
              className={`border-2 border-solid border-gray-600 rounded-2xl py-3 mx-auto mb-9 ${emojiColor}`}
              style={{
                width: '12rem',
                transform: `rotate(${emojiRotate}deg)`,
              }}>
              <div style={{ fontSize: `${emojiSize}px` }}>{emoji}</div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-evenly">
              <div
                className="text-4xl cursor-pointer bg-white p-5 rounded-xl border border-solid border-gray-500 hover:scale-110"
                onClick={() => {
                  setEmoji('🥺');
                }}>
                🥺
              </div>

              <div
                className="text-4xl cursor-pointer bg-white p-5 rounded-xl border border-solid border-gray-500  hover:scale-110"
                onClick={() => {
                  setEmoji('🎁');
                }}>
                🎁
              </div>

              <div
                className="text-4xl cursor-pointer bg-white p-5 rounded-xl border border-solid border-gray-500 hover:scale-110"
                onClick={() => {
                  setEmoji('🎯');
                }}>
                🎯
              </div>

              <div
                className="text-4xl cursor-pointer bg-white p-5 rounded-xl border border-solid border-gray-500 hover:scale-110"
                onClick={() => {
                  setEmoji('👨‍🎓');
                }}>
                👨‍🎓
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-evenly my-10">
              <div
                className="text-4xl cursor-pointer bg-white p-5 rounded-xl border border-solid border-gray-500 hover:scale-110"
                onClick={() => {
                  setEmoji('🎈');
                }}>
                🎈
              </div>

              <div
                className="text-4xl cursor-pointer bg-white p-5 rounded-xl border border-solid border-gray-500 hover:scale-110"
                onClick={() => {
                  setEmoji('🥇');
                }}>
                🥇
              </div>

              <div
                className="text-4xl cursor-pointer bg-white p-5 rounded-xl border border-solid border-gray-500 hover:scale-110"
                onClick={() => {
                  setEmoji('💻');
                }}>
                💻
              </div>

              <div
                className="text-4xl cursor-pointer bg-white p-5 rounded-xl border border-solid border-gray-500 hover:scale-110"
                onClick={() => {
                  setEmoji('🥥');
                }}>
                🥥
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white w-40 mx-auto text-center my-5 py-1 border-2 border-gray-500 rounded-xl">
              <h4 className="text-gray-600">Colors</h4>
            </div>
            <div className="flex flex-wrap justify-evenly mx-auto mb-50">
              <div
                className="w-20 h-12 border border-solid border-gray-500 rounded-lg hover:scale-110 cursor-pointer bg-sky-300"
                onClick={() => {
                  setEmojiColor('bg-sky-300');
                }}></div>

              <div
                className="w-20 h-12 border border-solid border-gray-500 rounded-lg hover:scale-110 cursor-pointer bg-green-300"
                onClick={() => {
                  setEmojiColor('bg-green-300');
                }}></div>

              <div
                className="w-20 h-12 border border-solid border-gray-500 rounded-lg hover:scale-110 cursor-pointer bg-white"
                onClick={() => {
                  setEmojiColor('bg-white');
                }}></div>

              <div
                className="w-20 h-12 border border-solid border-gray-500 rounded-lg hover:scale-110 cursor-pointer bg-red-300"
                onClick={() => {
                  setEmojiColor('bg-red-300');
                }}></div>

              <div
                className="w-20 h-12 border border-solid border-gray-500 rounded-lg hover:scale-110 cursor-pointer bg-purple-300"
                onClick={() => {
                  setEmojiColor('bg-purple-300');
                }}></div>
            </div>

            <div className="bg-white w-40 mx-auto text-center my-5 py-1 border-2 border-gray-500 rounded-xl">
              <h4 className="text-gray-600">Size</h4>
            </div>
            <div className="w-5/6 mb-5 mx-auto">
              <input
                type="range"
                min="50"
                max="100"
                className="w-4/6 cursor-pointer"
                onChange={(e) => {
                  setEmojiSize(e.target.value);
                }}></input>
            </div>

            <div className="bg-white w-40 mx-auto text-center my-5 py-1 border-2 border-gray-500 rounded-xl">
              <h4 className="text-gray-600">Rotation</h4>
            </div>
            <div className="w-5/6 mb-5 mx-auto">
              <input
                type="range"
                max="360"
                className="w-4/6 cursor-pointer"
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
