import React from 'react';
import {Link} from 'react-router-dom'



function Header(props) {
    
    return(
     
        <div className='header'>

             <div className='name'>
               {props.name}
             </div>
            <b className='menu' onClick={props.menu}>menu</b>
             <div className={`${props.navClass}`} onClick={props.navigation}>
                <Link to="/about" className='link'onClick={props.about}>
                    About
                </Link>
                <Link to="/portfolio " className='link'onClick={props.portfolio}>
                    portfolio
                </Link>
                <Link to="/contact" className='link'onClick={props.contact}>
                    contact
                </Link>
             </div>
         
        </div>
    
    );
}

export default Header;