import Link from "next/link";
import "./navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/">
                <h1>Navbar</h1>
            </Link>
            <ul>
                <li>
                    <Link href="http:/">Home</Link>
                </li>
                <li>
                    <Link href="http:/about">About</Link>
                </li>
                <li>
                    <Link href="http:/tienda">Tienda</Link>
                </li>
                <li>
                    <Link href="http:/post">Post</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
