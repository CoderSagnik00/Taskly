import '../css/Header.css'

function Header() {
  return (
    <nav className='flex justify-between mx-10 my-5'>
        <h1 className="font-bold text-xl">Taskly</h1>
        <ul className='flex space-x-5'>
            <li>Home</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default Header 