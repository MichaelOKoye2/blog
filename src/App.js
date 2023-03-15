import Viewblog from "./pages/Viewblog";
import Header from "./components/header";
import Homepage from "./pages/Homepage";
import Newblog from './pages/Newblog';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import { useState } from "react";
import Error404 from "./pages/Error404";

const App = () => {
  const [blogs, setBlogs] = useState(
    [
      {
        id:1,
        title: 'My first blog',
        author: 'Michael',
        body: 'This is an example of my first blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quis eveniet iure vero deserunt obcaecati facere assumenda doloribus eos omnis.'
    },

    {
        id:2,
        title: 'My second blog',
        author: 'Michael',
        body: 'This is an example of my first blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quis eveniet iure vero deserunt obcaecati facere assumenda doloribus eos omnis.'
    },

    {
         id:3,
         title: 'My third blog',
         author: 'Michael',
         body: 'This is an example of my third blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quis eveniet iure vero deserunt obcaecati facere assumenda doloribus eos omnis.'
    }
]
  )

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog])
  }

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id))
  }

    
  return (
    <BrowserRouter>
      <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage blogs={blogs}/>}/>

      <Route path="/create" element={<Newblog updateBlog={addBlog} blogs={blogs} />} />

      <Route path="/Viewblog/:id/:/blogs_title" element={<Viewblog blogs={blogs} updateBlog={deleteBlog}/>} />

      <Route path="/about" element={<About />}/>
      <Route path="/*" element={<Error404 />}/>
    </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;

// github.com/iyin0/hiit-classes
