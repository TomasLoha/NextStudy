import Link from "next/link";
import "./navbar.css";
function Navbar() {
    return (
        <nav className="navbar py-10">
            <Link href="/">
                <h1 className="text-3xl font-bold">Navbar</h1>
            </Link>
            <ul className=" m-5 ">
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
