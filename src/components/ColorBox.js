import React from 'react';

const ColorBox = ({ color, setEmojiColor }) => {
  return (
    <>
      <div
        className={`w-20 h-12 border border-solid border-gray-500 rounded-lg hover:scale-110 cursor-pointer ${color}`}
        onClick={() => {
          setEmojiColor(color);
        }}></div>
    </>
  );
};

export default ColorBox;
