import { Link } from "react-router-dom";
import "../Styles/Navbar.css"
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
            <img src="https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/main-logo-green.svg" alt="" />
                <h1>GreenWich Library</h1>
                
                
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/admin">Home</Link></li>
                    <li><Link to="/book-list">Book List</Link></li>
                    <li><Link to="/user-list">User List</Link></li>
                    <li><Link to="/add-books">Add Books</Link></li>
                    <li><Link to="/add-user">Add User</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;