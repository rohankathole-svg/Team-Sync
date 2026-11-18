import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import DasboardLayout from "../layouts/DasboardLayout";
import { useDispatch } from "react-redux";
import { currentLoggedEmployee } from "../../features/auth/state/auth/authAction";
import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import { commonRoutes } from "./commonRoutes";
import RoleBasedROUTE from "../protectedRoutes/RoleBasedRoute.jsx";
import RoleBasedRoute from "../protectedRoutes/RoleBasedRoute.jsx";
import { adminRoutes } from "./adminRoutes";
import { employeeRoutes } from "./employeeRoutes";

const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(currentLoggedEmployee());
    })();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DasboardLayout />,
          children: [
            ...commonRoutes,
            {
              element:<RoleBasedRoute allowedRoles={"admin"}/>,
              children:adminRoutes,
            },
            {
              element:<RoleBasedRoute allowedRoles={"employee"}/>,
              children:employeeRoutes,
            },

          ],
          
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
