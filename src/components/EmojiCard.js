import React from 'react';

const EmojiSelectorItem = ({ emoji, setEmoji }) => {
  return (
    <div className="p-4 sm:p-0">
      <div
        className="text-4xl cursor-pointer bg-white p-5 rounded-xl border border-solid border-gray-500 hover:scale-110 mb-4 shadow-box"
        onClick={() => {
          setEmoji(emoji);
        }}>
        {emoji}
      </div>
    </div>
  );
};

export default EmojiSelectorItem;
