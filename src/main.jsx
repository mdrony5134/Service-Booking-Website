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
import CategoryService from "./pages/CategoryService.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import WorkerProfile from "./pages/WorkerProfile.jsx";
import WorkerList from "./pages/WorkerList.jsx";
import ClientDashboard from "./pages/ClientDashboard.jsx";
import ChatBot from "./components/ChatBot.jsx";
import BookingInfo from "./pages/BookingInfo.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import PaymentFaild from "./pages/PaymentFaild.jsx";
import NotFound from "./pages/NotFound.jsx";

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
        path: "/categoryservice",
        element: <CategoryService />,
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
        path: "/serviceDetails",
        element: <ServiceDetails />,
      },
      // {
      //   path: "/clientProfile",
      //   element: <ClientProfile />,
      // },
      {
        path: "/workerProfile",
        element: <WorkerProfile />,
      },
      {
        path: "/workerList",
        element: <WorkerList />,
      },
      {
        path: "/clientProfile",
        element: <ClientDashboard />,
      },
      {
        path: "/chatbot",
        element: <ChatBot />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/bookingInfo",
        element: <BookingInfo />,
      },
      {
        path: "/paymentSuccess",
        element: <PaymentSuccess />,
      },
      {
        path: "/paymentFaild",
        element: <PaymentFaild />,
      },
      {
        path: "/trailCard",
        element: <trailCard />,
      },
      {
        path: "/notFoundWorker",
        element: <NotFound />,
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
