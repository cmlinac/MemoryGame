import React from 'react';
import './Footer.css';

function Footer(props) {
  return (<div className="footer-text"><hr/>{props.children}</div>);
}
 
export default Footer;