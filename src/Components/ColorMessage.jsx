import React from "react";

// pタグのスタイルを変更
const ColorMessage = (props) => {
  const { color, children } = props;
  const ContentStyle = {
    color,
    fontWeight: "bold"
  };
  return <p style={ContentStyle}>{children}</p>;
};

export default ColorMessage;
