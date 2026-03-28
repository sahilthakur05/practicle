import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuestionPage from './pages/QuestionPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:slug" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
