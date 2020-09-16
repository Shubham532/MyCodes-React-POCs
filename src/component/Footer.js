import React , {Compi}from 'react';

import  './Footer.css'

const Footer = (props) => {

    return(
       <div className="footer-part">
        
            <hr/>
    <center><h3>&copy; {props.year} {props.month} ---  Shubham Saxena React  Training TI</h3></center>
            </div>

    )
}
export default Footer;