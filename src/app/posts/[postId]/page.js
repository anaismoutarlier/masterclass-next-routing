// Dynamic routes docs: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
import React from "react";
// import { posts } from "@/static";
import Link from "next/link";
export default async function PostPage({ params: { postId } }) {
  //   const numPostId = Number(postId);
  //   const post = posts.find(post => post.id === numPostId);

  const res = await fetch(
    `https://posts-api-yj1i.onrender.com/posts/${postId}`,
    {
      headers: {
        apikey: process.env.POSTS_API_KEY,
      },
    }
  );
  const { result, post } = await res.json();

  if (!result || !post) return <div className="main">No post found</div>;
  return (
    <div className="main">
      <div className="post">
        <h1>{post.title}</h1>
        <h2>{post.content}</h2>
        <h5>{post.createdBy}</h5>
        <div>
          <h4>Commentaires</h4>
          {post.comments.map(comment => (
            <Link
              href={`/posts/${postId}/comments/${comment.id}`}
              key={comment.id}
            >
              {comment.content} - {comment.createdBy}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
