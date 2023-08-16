import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./pages/notFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import AccomodationSheet from "./pages/accomodationSheet";
import About from "./pages/about";
import Layout from "./components/_layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Homepage />
      </Layout>
    ),
  },
  {
    path: "fiche-logement/:id",
    element: (
      <Layout>
        <AccomodationSheet />
      </Layout>
    ),
  },
  {
    path: "a-propos",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
