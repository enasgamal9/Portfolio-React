import React from 'react';
import './Btn.css';

const Btn = (props) => {
  return (
    <button id="contactBtn" type="button" class="btn">{props.content}</button>
  );
};

export default Btn;