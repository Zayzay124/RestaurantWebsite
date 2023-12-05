import { Link } from "react-router-dom"

export default function Navbar() {
    return <nav class="main_nav">
        <Link to="https://www.google.com/">Menu</Link>
        <Link to="/OO">Online Ordering</Link>
        <Link to="/home">Career</Link>
        <Link to="/Locations">Locations</Link>
        <Link to="/Contact">Contact</Link>
  </nav>
}
