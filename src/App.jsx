import React, { useEffect, useState } from "react";
import ColorMessage from "./Components/ColorMessage";

// ボタンの関数を定義
const App = () => {
  const [num, setNum] = useState(0);
  const [showFlag, setShowFlag] = useState(false);
  const onClickbutton = () => {
    setNum(num + 1);
  };

  const onClickshowFlag = () => {
    setShowFlag(!showFlag);
  };

  useEffect(() => {
    if (num > 1) {
      if (num % 3 === 0) {
        showFlag || setShowFlag(true);
      } else {
        showFlag && setShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "green" }}>こんにちわ！</h1>
      <ColorMessage color="blue">私の名前は鶴原雄基です！</ColorMessage>
      <button onClick={onClickbutton}>カウントアップ！</button>
      <br />
      <button onClick={onClickshowFlag}>ON / OFF</button>
      <p>{num}</p>
      {showFlag && <p>('Д')</p>}
    </>
  );
};

export default App;
