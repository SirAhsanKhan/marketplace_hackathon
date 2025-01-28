'use client'

/* eslint-disable react/no-unescaped-entities */
import { SetStateAction, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Blog2() {
  const [comments, setComments] = useState([
    { name: "Bill gates", text: "lets put it in microsoft" },
    { name: "elon musk", text: "i am gonna hire you in Space X" },
  ]);
  
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (name && commentText) {
      setComments([...comments, { name, text: commentText }]);
      setName(""); // Clear the name input
      setCommentText(""); // Clear the comment input
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Blog Title */}
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800">Exploring New Ways of Decorating</h1>

      {/* Blog Image */}
      <div className="mb-10 flex justify-center">
        <Image
          src="/blogbook.png"
          alt="Blog post 2 cover"
          width={600} 
          height={300} 
          className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      {/* Blog Content */}
      <div className="prose lg:prose-xl mx-auto mb-12 text-gray-700 leading-relaxed">
       <p>
  Welcome to Blog Post 2. This post will guide you through transforming your home into a haven of style and comfort. 
  Say goodbye to bland spaces and hello to personalized charm.
</p>
<p>
  Your home is your sanctuary, and creating an environment that reflects your personality is essential. From bold
  statement pieces to subtle details, every choice matters.
</p>
<p>
  Let’s dive into some inspiring ideas to elevate your living space. Explore modern trends like sustainable decor, 
  multifunctional furniture, and eco-friendly lighting to create a harmonious blend of aesthetics and practicality.
</p>
<p>
  Incorporating greenery is a timeless choice. Indoor plants not only purify the air but also add a touch of serenity 
  to your home. Pair them with natural materials like rattan or bamboo for an organic vibe.
</p>
<p>
  Finally, don’t forget to add your unique flair. Display cherished keepsakes, experiment with vibrant colors, 
  or create a gallery wall with your favorite art pieces. Make your space a reflection of you, and enjoy the
  transformation.
</p>
      </div>

      {/* Comment Section */}
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Comments</h2>

        {/* Existing Comments */}
        <div className="space-y-6 mb-8">
          {comments.map((comment, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded -lg shadow-sm transition-transform duration-300 hover:shadow-lg">
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