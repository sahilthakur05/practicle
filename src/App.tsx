import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuestionPage from './pages/QuestionPage'
import DailyPractice from './pages/DailyPractice'
import DailyPracticePage from './pages/DailyPracticePage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:slug" element={<QuestionPage />} />
        <Route path="/daily" element={<DailyPractice />} />
        <Route path="/daily/:day" element={<DailyPracticePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
