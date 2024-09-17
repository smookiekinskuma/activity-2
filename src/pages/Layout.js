import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to ="/About">About</Link>
                </li>
                <li>
                    <Link to ="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to ="/Counter">Counter</Link>
                </li>
                <li>
                    <Link to ="/Other">Other</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
}

export default Layout;