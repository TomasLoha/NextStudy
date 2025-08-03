import Link from "next/link";

export const metadata = {
    title: "not found",
};

export default function NotFound() {
    return (
        <section>
            <h1>404</h1>
            <p>Pagina no encontrada</p>
            <Link href="/">volver</Link>
        </section>
    );
}
