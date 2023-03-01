import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Nav from "./components/Nav";
import About from "./components/About"
import Post from "./components/Post"
import Comment from "./components/Comment"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="app-outer"></div>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
