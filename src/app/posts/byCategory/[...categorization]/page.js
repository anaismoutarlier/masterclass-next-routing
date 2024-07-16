import React from "react";
import { posts } from "@/static";
import { Post } from "@/components";
export default function AllPostsByCategory({
  params: { categorization },
  searchParams,
}) {
  console.log(searchParams);
  const postsToDisplay = posts.filter(post =>
    categorization.every(
      el =>
        post.categorization
          .map(el => el.toLowerCase())
          .includes(el.toLowerCase()) &&
        (!searchParams.tag ||
          post.tags
            .map(el => el.toLowerCase())
            .includes(searchParams.tag.toLowerCase()))
    )
  );
  return (
    <div className="main">
      <div className="list">
        {postsToDisplay.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
