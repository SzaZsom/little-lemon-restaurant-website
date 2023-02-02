import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import BookingPage from "./pages/BookingPage"
import Nav from './Nav'
import Footer from './Footer'
import AboutPage from './pages/AboutPage'

function Routing({ availableTimes, dispatch }) {
  return (
    <Router>
        <Nav />
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
        <Footer />
    </Router>
  )
}

export default Routing