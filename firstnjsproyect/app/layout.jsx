import Link from "next/link";
import Navbar from "../components/Navbar";
// contenedor de todo el programa
export default function RootLayout({ children }) {
    return (
        <html>
            {/* lo que no se especifique se configuta por metadata */}
            <head>
                <title>MI PAGINA </title>
            </head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
