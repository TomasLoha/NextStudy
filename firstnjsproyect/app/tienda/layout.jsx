import Link from "next/link";
function TiendaLayout({ children }) {
    return (
        <>
            <nav>
                <h3>Seccion de la tienda</h3>
            </nav>
            <ul>
                <li>
                    <Link href="/tienda/categoria">categorias</Link>
                </li>
                <li>
                    <Link href="/tienda/categoria/computadora">
                        Computadoras
                    </Link>
                </li>
            </ul>
            {children}
        </>
    );
}

export default TiendaLayout;
