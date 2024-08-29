import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ServiceForm from "./pages/ServiceForm.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";
import BookService from "./pages/BookService.jsx";
import Login from "./pages/Login.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import ReviewBooking from "./pages/ReviewBooking.jsx";
import About from "./pages/About.jsx";
// import { Router } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/serviceForm",
        element: <ServiceForm />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/bookservice",
        element: <BookService />,
      },
      {
        path: "/review-booking",
        element: <ReviewBooking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
