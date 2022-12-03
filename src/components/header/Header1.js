import {Link, useLocation} from 'react-router-dom';
import { FaBars, FaHome } from "react-icons/fa";
import "./header.css"
// import { ImHome3 } from "react-icons/im";
function Header1(props){
    const loaction = useLocation()
    const pathname = loaction.pathname;
    return(
        <div>
            <div className='sa'>
                <div className='logo'>
                    <div>GROCO</div>
                    <FaBars />
                </div>
                <div className='nav'>
                    <ul>
                        <li>
                            <Link to="/" className={pathname === '/' && 'active'} > <FaHome />Home </Link>
                        </li>
                        <li>
                            <Link to="/login" className={pathname === '/login' && 'active'}>login</Link>
                        </li>
                        <li>
                            <Link to="/register" className={pathname === '/register' && 'active'}>Register</Link>
                        </li>
                        <li>
                            <Link to="/category" className={(pathname === '/category'||pathname ==='/category/create') && 'active'}>Category</Link>
                        </li>
                        <li>
                            <Link to="/product" className={pathname === '/product' && 'active'}>product</Link>
                        </li>
                        <li>
                            <Link to="/about" className={pathname === '/about' && 'active'}>About</Link>
                        </li>
                        <li>
                            <Link to="*" className={pathname === '/*' && 'active'}>INVOICE</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='containBody'>{props.children}</div>
        </div>
        
    );
}
export default Header1;