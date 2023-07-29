import React from 'react'
import { Champions } from '../contexts/Info'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from '../pages/Main'
import { WinYear } from '../components/WinYear'
import { WinInfo } from '../components/WinInfo'
import { Header } from '../pages/Header'

export const AppRouter = () => {
  return (
    

    <Champions.Provider value={{}}>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Main/>}>
                <Route path='winyear' element={<WinYear/>}/>
                <Route path='wininfo' element={<WinInfo/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </Champions.Provider>

  )
}
