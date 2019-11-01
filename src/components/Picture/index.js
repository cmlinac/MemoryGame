import React from 'react';
import './Picture.css'

function Picture(props) {
  return (
    //<div className="picture-container rounded">
      <img className="game-picture rounded" src={props.src} onClick={() =>props.onClick(props.value)} alt={props.name} style={{backgroundColor: props.name}}/>
    //</div>
  );
}

export default Picture;