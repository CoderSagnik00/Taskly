import '../css/Header.css'
import { Link } from 'react-router'

function Header() {
  return (
    <nav className='flex justify-between mx-10 my-5'>
      <h1 className="font-bold text-xl"><Link to='/'>Taskly</Link></h1>
      <ul className='flex space-x-5'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
      </ul>
    </nav>
  )
}

export default Header 