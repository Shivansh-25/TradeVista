import React from "react";

const GrayBox = ({ component: Component, text: Heading }) => {
  return (
    <div className="h-[34vh] w-[12vw] rounded-md flex-col bg-gray overflow-auto flex items-center p-2">
      <div>
        <h2 className="underline text-sm">{Heading}</h2>
      </div>
      <Component />
    </div>
  );
};

export default GrayBox;
