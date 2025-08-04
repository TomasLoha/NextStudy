"use client";

//RCC REACT CLIENT COMPONENT
function PostCard({ post }) {
    return (
        <div>
            <h3>
                {post.id}. {post.title}
            </h3>
            <p>{post.body}</p>
            <button
                onClick={() => {
                    alert("boton funcionando");
                }}
            >
                click
            </button>
        </div>
    );
}

export default PostCard;
