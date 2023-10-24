import React from 'react';

const Slider = ({ setEmoji, min, max }) => {
  return (
    <div className="w-5/6 mb-5 mx-auto">
      <input
        type="range"
        min={min}
        max={max}
        className="w-4/6 cursor-pointer"
        onChange={(e) => {
          setEmoji(e.target.value);
        }}></input>
    </div>
  );
};

export default Slider;
