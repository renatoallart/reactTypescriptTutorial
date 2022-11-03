import React from "react";

interface IStylesProps {
  style: React.CSSProperties;
}

export function StylesProps({ style }: IStylesProps) {
  return <div style={style}>StylesProps</div>;
}
