import '../styles/header.css'
import { Link } from 'react-router-dom';



const Header = () => {
    return ( 
        <header>
            {/* <h1>Fakebook</h1> */}
                <Link to={'/'} className='app-name'>Fakebook</Link>
                <div>
                    <Link to={'/about'} className='aboutlink'>About</Link>
                    <button className='exit'>Log out</button>
                </div>
             
        </header>
     );
}
 
export default Header;