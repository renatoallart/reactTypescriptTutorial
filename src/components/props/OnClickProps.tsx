import React from "react";
interface IOnClickProps {
  handleClick: (id: number) => void;
}

export function OnClickProps({ handleClick }: IOnClickProps) {
  return (
    <div>
      <h1>Log on console</h1>
      <button onClick={() => handleClick(3)}>Click</button>
    </div>
  );
}
