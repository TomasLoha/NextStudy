import React from "react";
import PostCard from "@/components/PostCard";
import { resolve } from "styled-jsx/css";
//react{usestate, useeffect, render}

async function loandPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    //en caso de demora de datos:
    await new Promise((resolve) => setTimeout(resolve, 9000));
    return data;
}
//renderiza a servidor
//RSC REACT SERVER COMPONENT
async function PostPage() {
    const post = await loandPosts();
    // console.log(post);
    return (
        <div>
            {post.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    );
}

export default PostPage;
