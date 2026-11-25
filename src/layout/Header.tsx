import { Link } from 'react-router'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/poc">PoC</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default Header
