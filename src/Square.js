import { useState } from "react";

function Square(props) {
  const [value, setValue] = useState("");
  return (
    <button
      className="square"
      onClick={() => {
        //   goi den ham onClick tren Board
        props.onClick();
      }}
    >
      {props.value}
    </button>
  );
}

export default Square;