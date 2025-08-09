import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Messages from './pages/Messages.jsx'
import Quotes from './pages/Quotes.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col rakhi-bg">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
