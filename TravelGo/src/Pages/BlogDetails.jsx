import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  // Handle missing state (direct URL access)
  if (!state) {
    // Redirect the user or display a fallback message
    navigate('/blogs'); // Redirect to the blogs list or homepage
    return null; // Avoid rendering if no state is present
  }

  const { image, date, title, description, author } = state;

  return (
    <div className='min-h-[550px] pt-20'>
      <div className='h-[300px] overflow-hidden'>
        <img 
          src={image} 
          alt="" 
          className='mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110' 
        />
      </div>
      <div className="container pb-14">
        <p className='text-slate-600 text-sm py-3'>
          written by {author} on date {date}
        </p>
        <h1 className='text-2xl font-semibold mb-10'>{title}</h1>
        <p>{description}</p>
      </div>
      <BlogsComp />
    </div>
  );
}

export default BlogDetails;
