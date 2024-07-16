import React from "react";
import { posts } from "@/static";

export default function Comment({ params: { postId, commentId } }) {
  const numPostId = Number(postId);
  const numCommentId = Number(commentId);

  const comment = posts
    .find(post => post.id === numPostId)
    ?.comments?.find(comment => comment.id === numCommentId);

  return (
    <div className="main">
      <h1>{comment.content}</h1>
      <h2>{comment.createdBy}</h2>
    </div>
  );
}
