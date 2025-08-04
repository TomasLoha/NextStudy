import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css";
//el SEO (conjunto de metadatos que ayudan a los bucadores a indexar y clasificar contenido)
// solo es necesario cuando deseamos que suceda y no sea personal o privado
export const metadata = {
    title: "mi tienda",
    description: "esta es una pagina de mi tienda",
    keywords: "tienda,ecommerce,online",
};
// contenedor de todo el programa

const roboto = Roboto({
    weight: ["300", "400", "500", "600"],
    style: ["italic", "normal"],
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html>
            {/* lo que no se especifique se configuta por metadata */}
            {/* esto no es necesario en nxjs ya que tien su propia forma de 
            enviar metadata */}
            {/* <head>
                <title>MI PAGINA</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </head> */}
            <body className={roboto.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
