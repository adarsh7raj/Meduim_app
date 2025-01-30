import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup.tsx'
import { Signin } from './pages/Signin.tsx'
import { Blog } from './pages/blog.tsx'
import {Blogs} from "./pages/blogs.tsx";
import { Publish } from './pages/publish.tsx';
import LandingPage from './pages/landing_page.tsx';
import {useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("JWT");
    setIsAuthenticated(!!token);
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuthenticated?<Navigate to={"/blogs"}/>:<LandingPage/>}/>
          <Route path="/landing" element={<LandingPage/>}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={isAuthenticated?<Blog/>:<LandingPage/>} />
          <Route path="/blogs" element={isAuthenticated?<Blogs/>:<LandingPage/>}/>
          <Route path="/publish" element={isAuthenticated?<Publish/>:<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App