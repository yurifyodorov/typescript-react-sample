import React, { FunctionComponent } from "react";

type CardProps = {
  title: string;
  paragraph: string;
};

const Card: FunctionComponent<CardProps> = ({ title, paragraph }) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);

export default Card;