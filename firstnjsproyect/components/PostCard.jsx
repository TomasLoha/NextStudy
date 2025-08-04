"use client";
import Link from "next/link";
//RCC REACT CLIENT COMPONENT
function PostCard({ post }) {
    return (
        <div className="bg-gray-950 p-10">
            <Link href={`/post/${post.id}`}>
                <h3 className="text-xl font-bold mb-4">
                    {post.id}. {post.title}
                </h3>
            </Link>
            <p className="text-slate-300">{post.body}</p>
            <Link href={`/post/${post.id}`}>
                <button>click</button>
            </Link>
        </div>
    );
}

export default PostCard;
