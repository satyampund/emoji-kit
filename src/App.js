import { useState } from 'react';

import EmojiCustomizationView from './views/EmojiCustomization';
import EmojiDisplayView from './views/EmojiDisplay';

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
            <EmojiDisplayView
              emoji={emoji}
              emojiColor={emojiColor}
              emojiSize={emojiSize}
              emojiRotate={emojiRotate}
              setEmoji={setEmoji}
            />
          </div>

          <div className="md:w-1/2">
            <EmojiCustomizationView
              setEmojiColor={setEmojiColor}
              setEmojiSize={setEmojiSize}
              setEmojiRotate={setEmojiRotate}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
