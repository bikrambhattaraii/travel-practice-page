import './navbar.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { MenuItems } from './menuItems';


export function Navbar(){
    

    return(
        
        <nav className='nav-items'>
            <h1 className='navbar-logo'>logo</h1>
            
        <ul className='nav-menu'>
            {MenuItems.map((item, index) => {
                return (
                <li key={index}>
            <a className={item.cName}
            href='/'>
        <i class={item.icon}></i>{item.title}
        </a>

        </li>    
       ); 
                    }    )    }
         <button className='btn'>Sign up</button>
        </ul>
        
        </nav>

    );
}
