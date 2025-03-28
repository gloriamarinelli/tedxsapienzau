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

// import JoinUs from "./components/pages/JoinUs";

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

import Awards2024 from "./components/pages/Awards2024";
import Awards2023 from "./components/pages/Awards2023";
import Awards2022 from "./components/pages/Awards2022";

import Countdown2024 from "./components/pages/Countdown2024";

import HomeAwards24 from "./components/pages/HomeAwards24";
import SapienzaU from "./components/pages/SapienzaUDesktop";
import AssociazioneSapienzaU from "./components/components/AssociazioneSapienzaU";
import NavbarComponentNew from "./components/components/NavbarComponentNew";
import ParaDoxa2025 from "./components/pages/ParaDoxa2025";

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
        element: <ParaDoxa2025 />,
      },
      {
        path: "/tedxsapienzau",
        element: <ParaDoxa2025 />,
      },
      {
        path: "/sponsors",
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
        path: "/eventi/awards2024",
        element: <Awards2024 />,
      },

      {
        path: "/sapienzau",
        element: <AssociazioneSapienzaU />,
      },

      // {
      //   path: "/joinus",
      //   element: <JoinUs />,
      // },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "/paradoxa",
        element: <ParaDoxa2025 />,
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
      {/* <NavbarComponent windowSize={windowSize} /> */}
      <NavbarComponentNew />
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
