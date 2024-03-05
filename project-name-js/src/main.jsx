import '@/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from 'recoil';

import RootC from '@/components/Root'
import ErrorC from '@/components/Error'
import TextInputC from '@/components/TextInput';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootC />,
    errorElement: <ErrorC />,
    children: [
      {
        path: "",
        element: <TextInputC />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)