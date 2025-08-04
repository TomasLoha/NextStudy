import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    return data;
}

async function Page({ params }) {
    const { id } = await params;
    const post = await loadPost(id);
    // console.log(params);
    return (
        <div>
            <h1>
                {post.id}. {post.title}
            </h1>
            <p>{post.body}</p>
            <hr />
            <h3>otras publicaciones</h3>
            <Suspense fallback={<h3>cargando publicaciones...</h3>}>
                <Posts></Posts>
            </Suspense>
        </div>
    );
}

export default Page;
