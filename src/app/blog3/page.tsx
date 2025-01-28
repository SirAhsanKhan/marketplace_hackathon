"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState, SetStateAction } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Blog3() {
  const [comments, setComments] = useState([
    { name: "Priyanka chopra", text: "I found this post incredibly insightful. Keep up the excellent!" },
    { name: "nick jones", text: "This topic is truly captivating. I’d love to see a deeper exploration of it in the future." },
  ]);

  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleNameChange = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (name && commentText) {
      setComments([...comments, { name, text: commentText }]);
      setName("");
      setCommentText("");
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Blog Title */}
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800">Handmade Pieces That Took Time to Make</h1>

      {/* Blog Image */}
      <div className="mb-10 flex justify-center">
        <Image
          src="/blog.png"
          alt="Blog post 3 cover"
          width={600} 
          height={300}
          className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      {/* Blog Content */}
      <div className="prose lg:prose-xl mx-auto mb-12 text-gray-700 leading-relaxed">
        <p>
  Handmade creations embody a unique blend of artistry and dedication. Each piece is a testament to the creator's vision and skill, offering unmatched charm and individuality.
</p>
<p>
  These creations bring warmth, character, and a personal touch to any space. From intricate designs to simple yet meaningful items, they serve as a connection between the maker's story and the user's admiration.
</p>
<p>
  Incorporate handmade elements into your home or workspace to celebrate craftsmanship and create a distinctive, welcoming environment.
</p>
<p>
  Embrace the beauty of handmade items and let them enrich your everyday surroundings with their timeless appeal.
</p>

      </div>


      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Comments</h2>

      
        <div className="space-y-6 mb-8">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-sm transition-transform duration-300 hover:shadow-lg"
            >
              <h3 className="font-semibold text-gray-800">{comment.name}</h3>
              <p className="text-gray-600">{comment.text}</p>
            </div>
          ))}
        </div>

        {/* Add Comment */}
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Add a Comment</h3>
          <div className="space-y-4">
            <Input
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
              className="w-full border-gray-300 focus:ring-primary focus:border-primary"
            />
            <textarea
              value={commentText}
              onChange={handleCommentChange}
              className="w-full rounded-lg border-gray-300 shadow-sm p-3 focus:ring-primary focus:border-primary"
              rows={4}
              placeholder="Your Comment"
            />
            <Button
              type="submit"
              className="w-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300 rounded-lg shadow-md"
            >
              Comment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
