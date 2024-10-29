import React from 'react';
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryDetails from './components/CountryDetails';
import MainLayout from './Layouts/MainLayout';

function App() {

      const router = createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path = '/' element={<MainLayout/>}>
            <Route exact path = '/' element={<HomePage/>}/>
            <Route path="/country/:id" element={<CountryDetails />} />
            </Route>
          </>

        )
    )
  return <RouterProvider router={router}/>
}

export default App;
