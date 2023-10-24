import React from 'react';

const Heading = ({ title }) => {
  return (
    <>
      <div className="bg-white w-40 mx-auto text-center mt-5 mb-7 py-1 border-2 border-gray-500 rounded-xl">
        <h4 className="text-gray-600">{title}</h4>
      </div>
    </>
  );
};

export default Heading;
