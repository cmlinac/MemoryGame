import React from 'react';
import '../css/Picture.css'

function Picture(props) {
  return (
    <img className="game-picture" src={props.src} onClick={props.onClick} alt={props.name}/>
  );
}

export default Picture;