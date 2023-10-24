import React from 'react';

const EmojiSelectorItem = ({ emoji, setEmoji }) => {
  return (
    <div
      className="text-4xl cursor-pointer bg-white p-5 rounded-xl border border-solid border-gray-500 hover:scale-110"
      onClick={() => {
        setEmoji(emoji);
      }}>
      {emoji}
    </div>
  );
};

export default EmojiSelectorItem;
