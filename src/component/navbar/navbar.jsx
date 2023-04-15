import './navbar.css';
import { Link } from 'react-router-dom';
import { MenuItems } from './menuItems';


export function Navbar(){
    

    return(
        
        <nav className='nav-items'>
            <h1 className='navbar-logo'>logo</h1>
            
        <ul className='nav-menu'>
            {MenuItems.map((item, index) => {
                return (
                <li key={index}>
            <Link className={item.cName}
            to={item.url}>
        <i class={item.icon}></i>{item.title}
        </Link>

        </li>    
       ); 
                    }    )    }
         <button className='btn'>Sign up</button>
        </ul>
        
        </nav>

    );
}
