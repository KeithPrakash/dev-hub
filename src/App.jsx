import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Nav from "./components/Nav";
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
        </Routes>
      </div>
    </div>
  );
}

export default App
