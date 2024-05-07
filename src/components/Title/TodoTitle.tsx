import React from "react";

// const Title = ({ text, Tag }: { text: string; Tag: string }) => {
//   return <Tag>{text}</Tag>;
// };

const Title = ({ text }: { text: string }) => {
  return <h1 className="title">{text}</h1>;
};

export default Title;
