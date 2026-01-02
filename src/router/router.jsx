import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Error from "../pages/Home/Error/Error";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import About from "../pages/About/About";
import Story from "../pages/About/Pages/Story";
import Mission from "../pages/About/Pages/Mission";
import Success from "../pages/About/Pages/Success";
import Terms from "../pages/About/Pages/Terms";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    // ErrorBoundary: Error,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/service-center.json"),
      },
      {
        path: "about",
        Component: About,
        children: [
            {
                index: true,
                Component: Story
            },
            // {
            //     path: "story",
            //     Component: Story
            // },
            {
                path: "mission",
                Component: Mission
            },
            {
                path: "success",
                Component: Success
            },
            {
                path: "team",
                Component: Terms
            }
        ]
      }
    ],
  },
//   second steps....
  {
    path: "/",
    Component: AuthLayout,
    // ErrorBoundary: Error,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
