import React from 'react';
import EmojiCard from './../components/EmojiCard';

const EmojiDisplayView = ({ emoji, emojiColor, emojiSize, emojiRotate, setEmoji }) => {
  return (
    <div>
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
  );
};

export default EmojiDisplayView;
