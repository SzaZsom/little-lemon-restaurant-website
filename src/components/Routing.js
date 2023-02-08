import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import BookingPage from "./pages/BookingPage"
import Nav from './Nav'
import Footer from './Footer'
import AboutPage from './pages/AboutPage'
import ConfirmationPage from './pages/ConfirmationPage'

function Routing({ availableTimes, dispatch }) {
  return (
    <Router>
        <Nav />
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateTimes={dispatch} />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/confirmation" element={<ConfirmationPage />}></Route>
        </Routes>
        <Footer />
    </Router>
  )
}

export default Routing