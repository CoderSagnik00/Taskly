import '../css/Header.css'
import { Link } from 'react-router'
import Logo from '../assets/taskly-logo.jpeg'

function Header() {
  return (
    <nav className='flex justify-between mx-10 my-5'>
      <Link to='/'><img src={Logo} alt="Taskly" className='size-10 rounded-full' /></Link>
      <ul className='flex space-x-5'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
      </ul>
    </nav>
  )
}

export default Header 