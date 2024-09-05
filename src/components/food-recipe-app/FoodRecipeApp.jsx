import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalContextProvider } from './GlobalContext';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import "./foodRecipeApp.css"

const FoodRecipeApp = () => {
  return (
    <BrowserRouter basename="/accordeon-fcc">
      <GlobalContextProvider>
        <div className="min-h-screen p-8 bg-white text-gray-600 text-lg">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='details/:id' element={<Details />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='*' element={<p>NotFound</p>}/>
          </Routes>
        </div>
      </GlobalContextProvider>
    </BrowserRouter>
  )
}

export default FoodRecipeApp