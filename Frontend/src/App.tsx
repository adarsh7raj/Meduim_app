import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup.tsx'
import { Signin } from './pages/Signin.tsx'
import { Blog } from './pages/blog.tsx'
import {Blogs} from "./pages/blogs.tsx";
import { Publish } from './pages/publish.tsx';
import LandingPage from './pages/landing_page.tsx';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog  />} />
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/publish" element={<Publish/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App