import React from "react";
// import { posts } from "@/static";
import { Post, AddPostForm } from "@/components";

export default async function AllPosts() {
  //SERVEUR_____________________________________________
  const res = await fetch("https://posts-api-yj1i.onrender.com/posts", {
    cache: "no-cache",
    headers: {
      apikey: process.env.POSTS_API_KEY,
    },
  });
  const { result, posts } = await res.json();
  console.log("Posts: ", posts);
  if (!result) return null;
  //CLIENT____________________________________________
  return (
    <div className="main">
      <AddPostForm />
      <div className="list">
        {result &&
          posts.length &&
          posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
}
