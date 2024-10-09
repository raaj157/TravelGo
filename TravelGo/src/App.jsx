import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import BlogDetails from './Pages/BlogDetails';
import Blogs from './Pages/Blogs';
import PlacesRoute from './Pages/PlacesRoute';
import NoPage from './Pages/NoPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Layout />} > 
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/places" element={<PlacesRoute />} />
      <Route path="*" element={<NoPage />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
