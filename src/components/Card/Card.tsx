import * as React from "react";
import './Card.css';

const Card: React.FC<any> = (props) => {
  const classes = "card " + props.className; 
  return <div className={classes}>{props.children}</div>;
};

export default Card;
