import React, { FunctionComponent } from "react";

type ButtonProps = {
  text: string;
};

const Button: FunctionComponent<ButtonProps> = ({ text }) => {
  return (
    <button>{text}</button>
  );
}

export default Button;