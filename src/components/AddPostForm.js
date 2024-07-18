"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; //PAS next/router
const fields = [
  {
    name: "title",
    placeholder: "Title",
  },
  {
    name: "content",
    placeholder: "Text",
  },
  {
    name: "createdBy",
    placeholder: "Pseudo",
  },
];

export const AddPostForm = () => {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  console.log(process.env.POSTS_API_KEY);
  const handleSubmit = async e => {
    console.log(formData);
    console.log("Submit");
    e.preventDefault();
    const res = await fetch("https://posts-api-yj1i.onrender.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token 1234ABCD2349`,
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    if (data.result) router.refresh();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add post</h3>
      {fields.map(field => (
        <input key={field.name} {...field} onChange={handleChange} />
      ))}
      <button type="submit">Send</button>
    </form>
  );
};
