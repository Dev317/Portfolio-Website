import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Project from './pages/Project'
import Experience from './pages/Experience'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProjectDisplay from './pages/ProjectDisplay'

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/project/:id" element={<ProjectDisplay />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
