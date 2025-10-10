import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../App';
import Notfound from '../errors/Notfound';
import Home from '../pages/Home';
import Application from '../pages/Application';
import Installation from '../pages/Installation';
import Appdetails from '../pages/Appdetails';
import AppNotFound from '../errors/AppNotFound';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <AppNotFound />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/apps",
        Component: Application
      },
      {
        path: "/installation",
        Component: Installation
      },
      {
        path: "/appdetails/:appId",
        Component: Appdetails
      },
      {
        path: "*",
        Component: Notfound
      }
    ]
  },

]);