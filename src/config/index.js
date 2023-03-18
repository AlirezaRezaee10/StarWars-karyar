import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";
import Characters from "../pages/Characters";

export default function SiteRoutes() {
    const router = createBrowserRouter([
        {
            path: '/:pageId',
            element: <Home />
        },
        {
            path:'/characters/:id',
            element: <Characters />
        },
        {
            path: '*',
            element: <Navigate to='/1' />
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}
