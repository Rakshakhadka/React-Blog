import React, { useState, useEffect } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Function to fetch posts from the API
    const fetchPosts = async () => {
      try {
        // Replace 'https://api.example.com/posts' with the actual API endpoint
        const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        setPosts(data); // Update the state with the fetched posts
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    // Call the fetchPosts function when the component mounts
    fetchPosts();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="posts">
      {/* Map over the posts and display them */}
      {posts.map((post) => (
        <Post key={post.id} img={post.imageUrl} />
      ))}
    </div>
  );
}

// Assume you have a Post component
const Post = ({ img }) => (
  <div className="post">
    <img src={img} alt="Post" />
  </div>
);
