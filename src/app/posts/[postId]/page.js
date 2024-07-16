// Dynamic routes docs: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
import React from "react";
import { posts } from "@/static";
import Link from "next/link";
export default function PostPage({ params: { postId } }) {
  const numPostId = Number(postId);
  const post = posts.find(post => post.id === numPostId);

  if (!post) return <div className="main">No post found</div>;
  return (
    <div className="main">
      <div className="post">
        <h1>{post.title}</h1>
        <h2>{post.content}</h2>
        <h5>{post.createdBy}</h5>
        <div>
          <h4>Commentaires</h4>
          {post.comments.map(comment => (
            <Link href={`/posts/${postId}/comments/${comment.id}`}>
              {comment.content} - {comment.createdBy}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
