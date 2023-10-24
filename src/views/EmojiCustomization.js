import React from 'react';
import ColorBox from '../components/ColorBox';
import Slider from '../components/Slider';
import Heading from '../components/Heading';

const EmojiCustomizationView = ({ setEmojiColor, setEmojiSize, setEmojiRotate }) => {
  return (
    <div>
      <Heading title="Colors" />
      <div className="flex flex-wrap justify-evenly mx-auto mb-9">
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
  );
};

export default EmojiCustomizationView;
