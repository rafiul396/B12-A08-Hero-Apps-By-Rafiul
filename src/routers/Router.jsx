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
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch('/appdata.json'),
        Component: Home
      },
      {
        path: "/apps",
        loader: () => fetch('/appdata.json'),
        Component: Application
      },
      {
        path: "/installation",
        Component: Installation
      },
      // {
      //   path: "/appdetails/:appId",
      //   loader: () => fetch('/appdata.json'),
      //   Component: Appdetails
      // },
      {
        path: "/appdetails/:appId",
        loader: async ({ params }) => {
          const res = await fetch('/appdata.json');
          const data = await res.json();
          const app = data.find(a => a.id === parseInt(params.appId));
          if (!app) {
            throw new Response("Not Found", { status: 404 });
          }
          return app;
        },
        Component: Appdetails
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