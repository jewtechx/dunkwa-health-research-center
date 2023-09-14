/* eslint-disable react-refresh/only-export-components */
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import SignIn from "../pages/auth/SignIn";
import Layout from "../navigation/layout/main-layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Buses from "../pages/buses/Buses";
import {
  BOOKINGS,
  BUSES,
  DASHBOARD,
  DRIVERS,
  MAIN_LAYOUT,
  PROFILE,
  SETTINGS,
  TRIPS,
} from "../constants/page-paths";
import Drivers from "../pages/drivers/Drivers";
import Trips from "../pages/trips/Trips";
import Bookings from "../pages/bookings/Bookings";
import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";

// const SignIn = React.lazy(() => import("../pages/SignIn"));
// const Layout = React.lazy(() => import("../navigation/layout/main-layout"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={MAIN_LAYOUT} element={<Layout />}>
        <Route path={DASHBOARD} element={<Dashboard />} />
        <Route path={BUSES} element={<Buses />} />
        <Route path={BOOKINGS} element={<Bookings />} />
        <Route path={DRIVERS} element={<Drivers />} />
        <Route path={TRIPS} element={<Trips />} />
        <Route path={SETTINGS} element={<Settings />} />
        <Route path={PROFILE} element={<Profile />} />
      </Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
