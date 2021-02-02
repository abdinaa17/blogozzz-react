import { Link } from "react-router-dom"
import "./Navbar.css"



const Navbar = () => {
   
    return ( 
            <nav className="Navbar">
                 <div className="Navbar-logo"><Link to="/">Blogozzz</Link></div>
                 <ul className="Navbar-links">
                     <li><Link to="/create">New Blog</Link></li>
                     <li><Link to="#">Contact</Link></li>
                 </ul>
            </nav>
     );
}
 
export default Navbar;