import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                   <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/awbList'>AWB List</Link>
                </li>
                <li>
                    <Link to='/awbShortlist'>AWB Shortlist</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar