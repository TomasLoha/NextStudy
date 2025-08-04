import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <h1>NavBar</h1>
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
