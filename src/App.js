import { useState } from 'react';
import EmojiCard from './components/EmojiCard';
import ColorBox from './components/ColorBox';
import Heading from './components/Heading';
import Slider from './components/Slider';

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
              <EmojiCard emoji="🥺" setEmoji={setEmoji} />
              <EmojiCard emoji="🎁" setEmoji={setEmoji} />
              <EmojiCard emoji="🎯" setEmoji={setEmoji} />
              <EmojiCard emoji="👨‍🎓" setEmoji={setEmoji} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-evenly my-10">
              <EmojiCard emoji="🎈" setEmoji={setEmoji} />
              <EmojiCard emoji="🥇" setEmoji={setEmoji} />
              <EmojiCard emoji="💻" setEmoji={setEmoji} />
              <EmojiCard emoji="🥥" setEmoji={setEmoji} />
            </div>
          </div>

          <div className="md:w-1/2">
            <Heading title="Colors" />
            <div className="flex flex-wrap justify-evenly mx-auto mb-50">
              <ColorBox color="bg-sky-300" setEmojiColor={setEmojiColor} />
              <ColorBox color="bg-green-300" setEmojiColor={setEmojiColor} />
              <ColorBox color="bg-white" setEmojiColor={setEmojiColor} />
              <ColorBox color="bg-red-300" setEmojiColor={setEmojiColor} />
              <ColorBox color="bg-purple-300" setEmojiColor={setEmojiColor} />
            </div>
            <Heading title="Size" />
            <Slider min="50" max="100" setEmoji={setEmojiSize} />
            <Heading title="Rotation" />
            <Slider min="0" max="360" setEmoji={setEmojiRotate} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
