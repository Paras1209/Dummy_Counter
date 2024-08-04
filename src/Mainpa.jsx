import React from "react";
import "./Mainpa.css";
import { useState } from "react";

export default function Mainpa() {
  const [count, setCount] = useState(0);

  return (
    <main className="mid">
      <div className="card">
        <h1>Counter for your counting</h1>
        <h2 className="numb"> {count} </h2>
        <div className="butt">
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
          </div>
      </div>
    </main>
  );
}
