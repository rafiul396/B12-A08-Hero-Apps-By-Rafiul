import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../App';
import Notfound from '../errors/Notfound';
import Home from '../pages/Home';
import Application from '../pages/Application';
import Installation from '../pages/Installation';
import Appdetails from '../components/Apps/Appdetails';
import AppNotFound from '../errors/AppNotFound';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
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
        path: "/appdetails/app",
        Component: Appdetails,
        errorElement: <h1>App not found</h1>
      },
      {
        path: "*",
        Component: Notfound
      },
      {
        path: "/appdetails/*",
        Component: AppNotFound
      }
    ]
  },

]);