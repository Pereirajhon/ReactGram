import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch, BsHouseDoorFill, BsCamera} from 'react-icons/bs'

const Navbar = () => {

  return (
    <nav id='navbar'>
        <Link to ='/' id='logo'>ReactGram</Link>
        <form>
            <input type='text' placeholder='Buscar' />
            <button>
               <BsSearch/> 
            </button>
        </form>
        <ul id='nav-items'>
            <NavLink to='/'> <BsHouseDoorFill/> </NavLink>
            <NavLink> <BsCamera/> </NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='login'>Login</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar