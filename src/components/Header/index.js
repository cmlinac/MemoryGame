import React from 'react';
import './Header.css';

function Header(props) {
  return ( 
    <div>
      <div className="instructions text-left">
          {props.children}
      </div>
      <div className="score text-right">
        <p>Score: {props.score}</p>
        <p>High Score: {props.highScore}</p>
      </div>  
      <hr/>
    </div>);
}
 
export default Header;