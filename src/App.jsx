import React, { useState } from 'react';
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryDetails from './components/CountryDetails';
import MainLayout from './Layouts/MainLayout';

function App() {
  const [isDark, setIsDark] = useState(false)

  if(isDark){
    document.body.classList.add("bg-[#121212]")
  }else{
    document.body.classList.remove("bg-[#121212]")

  }

      const router = createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path = '/' element={<MainLayout isDark={isDark} setIsDark={setIsDark} />}>
            <Route exact path = '/' element={<HomePage isDark={isDark} />}/>
            <Route path="/country/:id" element={<CountryDetails isDark={isDark} />} />
            </Route>
          </>

        )
    )
  return <RouterProvider router={router}/>
}

export default App;
