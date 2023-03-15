import '../styles/homepage.css'
// import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Homepage = ({blogs}) => {
    const navigate = useNavigate()
   
    return ( 
        <main className="homepage">
        <h1>My Blogs</h1>
        {blogs.map((blogs, index)=>(
            <div className="blogcontainer">
            <Link to={`/blog/${blogs.id}/${blogs.title}`} key={index} className='blog'>
              <p>{blogs.title}</p>
              <p>By: {blogs.author}</p>
              <p>{blogs.body}</p>
            </Link>

            </div> 
        ))}
        <div className="no-blog">
            <p >Oops!!! No Blog Available</p>
        </div>
                   
        <button className='new-blog' onClick={() => { navigate('/create') }}>Create New Blog</button>
        
    </main>
     );
}
 
export default Homepage;

