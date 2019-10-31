import React from 'react';

function Header(props) {
  return ( <div>Score={props.score} | High Score={props.highScore} | {props.children}<hr/></div> );
}
 
export default Header;