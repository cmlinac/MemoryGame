import React from 'react';
import './Picture.css'

function Picture(props) {
  return (
    <img className="game-picture" src={props.src} onClick={() =>props.onClick(props.value)} alt={props.name} style={{backgroundColor: props.name}}/>
  );
}

export default Picture;