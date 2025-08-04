"use client";
import Link from "next/link";
//RCC REACT CLIENT COMPONENT
function PostCard({ post }) {
    return (
        <div>
            <Link href={`/post/${post.id}`}>
                <h3>
                    {post.id}. {post.title}
                </h3>
            </Link>
            <p>{post.body}</p>
            <Link href={`/post/${post.id}`}>
                <button>click</button>
            </Link>
        </div>
    );
}

export default PostCard;
