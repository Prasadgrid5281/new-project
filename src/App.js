import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Destinations from "./components/destinations/Destinations";
import Discount from "./components/discounts/Discount";
import Header from "./components/header/Header";
import Hero from "./components/hero-section/Hero";
import Stats from "./components/statistics/Stats";
import Contact from "./components/contact/Contact";
import Testimonial from "./components/testimonials/Testimonial";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Membership from "./components/Membership";
import Schedules from "./components/Schedules";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Destinations />
      <Discount />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "membership",
        element: <Membership />,
      },
      {
        path: "schedules",
        element: <Schedules />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

export default App;
