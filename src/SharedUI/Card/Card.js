import React from 'react';
import './Card.css';

const Card = (props) => {
  const cardClass = "card";
  return (
    <div className={cardClass}>
      {props.content}
    </div>
  );
};

export default Card;