import React, { useState, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./components/context/authContext";
import { SpeedInsights } from "@vercel/speed-insights/react";

import NavbarComponent from "./components/components/NavbarComponent";
import Footer from "./components/components/Footer";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";
import Partners from "./components/pages/Partners";

import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/BlogPost";

import JoinUs from "./components/pages/JoinUs";

import Newsletter from "./components/pages/Newsletter";

import Team from "./components/pages/Team";

import Edizione2022 from "./components/pages/Edizione2022";
import Edizione2023 from "./components/pages/Edizione2023";

import Events from "./components/pages/Events";

import PrivacyPolicy from "./components/pages/PrivacyPolicy";

import Login from "./components/pages/Login";
import Write from "./components/pages/Write";

import Location from "./components/pages/Location";
import MissionandVision from "./components/pages/MissionandVision";

import Awards2023 from "./components/pages/Awards2023";
import Awards2022 from "./components/pages/Awards2022";

import Countdown2024 from "./components/pages/Countdown2024";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeManager />,
    errorElement: (
      <>
        <NavbarComponent />
        <ErrorPage />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tedxsapienzau",
        element: <Home />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogPost />,
      },
      {
        path: "/mission&vision",
        element: <MissionandVision />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/edizioni",
        element: <Events />,
      },
      {
        path: "/eventi/edizione2022",
        element: <Edizione2022 />,
      },
      {
        path: "/eventi/edizione2023",
        element: <Edizione2023 />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/eventi/awards2023",
        element: <Awards2023 />,
      },
      {
        path: "/eventi/awards2022",
        element: <Awards2022 />,
      },
      {
        path: "/eventi/countdown2024",
        element: <Countdown2024 />,
      },

      {
        path: "/joinus",
        element: <JoinUs />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

function HomeManager() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  return (
    <>
      <NavbarComponent windowSize={windowSize} />
      {/* <ScrollToTop /> */}
      <Outlet context={[windowSize, setWindowSize]} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
      <SpeedInsights />
    </AuthContextProvider>
  );
}

export default App;
