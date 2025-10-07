import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../App';
import Notfound from '../errors/Notfound';
import Home from '../pages/Home';
import Application from '../pages/Application';
import Installation from '../pages/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Notfound/>,
    children: [
      {
        index: true,
        path: "/",
        Component : Home
      },
      {
        path: "/apps",
        Component: Application
      },
      {
        path: "/installation",
        Component: Installation
      }
    ]
  },
]);