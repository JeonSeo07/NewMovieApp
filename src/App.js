import React from 'react'
import Home from './routes/Home'
import About from './routes/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        {/* 주소창에 path안에 있는 것으로 바뀌면 해당 컴포넌트를 열어라. */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App