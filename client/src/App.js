import React, { useState, useEffect } from "react";
import NavbarComponent from "./components/components/NavbarComponent";
import Footer from "./components/components/Footer";
import Home from "./components/pages/Home";
import MissionandVision from "./components/pages/MissionandVision";
import ErrorPage from "./components/pages/ErrorPage";
import Partners from "./components/pages/Partners";
import Blog from "./components/pages/Blog";
import Join from "./components/pages/Join";
import Team from "./components/pages/Team";
import Edizione2022 from "./components/pages/Edizione2022";
import Edizione2023 from "./components/pages/Edizione2023";
import Statuto from "./components/pages/Statuto";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import BlogPost from "./components/pages/BlogPost";
import Write from "./components/pages/Write";
import Newsletter from "./components/pages/Newsletter";
import Location from "./components/pages/Location";
import Sustainability from "./components/pages/Sustainability";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/pages/Login";
import { AuthContextProvider } from "./components/context/authContext";
import Awards2023 from "./components/pages/Awards2023";
import Awards2022 from "./components/pages/Awards2022";
import RFW2023 from "./components/pages/RFW2023";
import NewsletterBrevo from "./components/pages/NewsletterBrevo";
import Workshop from "./components/pages/Workshop";

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
        path: "/join",
        element: <Join />,
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
        path: "/edizione2022",
        element: <Edizione2022 />,
      },
      {
        path: "/edizione2023",
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
        path: "/statuto",
        element: <Statuto />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "/newsletterBrevo",
        element: <NewsletterBrevo />,
      },
      {
        path: "/awards2023",
        element: <Awards2023 />,
      },
      {
        path: "/awards2022",
        element: <Awards2022 />,
      },
      {
        path: "/sustainability",
        element: <Sustainability />,
      },
      {
        path: "/rfw23",
        element: <RFW2023 />,
      },
      {
        path: "/workshop",
        element: <Workshop />,
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
      <Outlet context={[windowSize, setWindowSize]} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
