import React, { useState, useEffect } from "react";

function Command() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(1);
  const val = ["DESIGNA GUNE"];
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(number => number + 1);
      setText(val[0].slice(0, number));
    }, 180);
    return () => clearInterval(interval);
  }, [val, number]);

  return (
    <>
      <div className="command">{text}</div>
    </>
  );
}

export default Command;
