import { Link } from "react-router-dom"

export default function Navbar() {
    return <nav className="main_nav">
        <Link to="/Menu">Menu</Link>
        <Link to="/Online-Order">Online Ordering</Link>
        <Link to="/Careers">Career</Link>
        <Link to="/Locations">Locations</Link>
        <Link to="/Contact">Contact</Link>
  </nav>
}