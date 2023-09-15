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
  ABOUT,
  BOOKINGS,
  BUSES,
  DASHBOARD,
  DRIVERS,
  MAIN_LAYOUT,
  OUR_TEAM,
  PROFILE,
  SETTINGS,
  TRIPS,
} from "../constants/page-paths";
import Drivers from "../pages/drivers/Drivers";
import Trips from "../pages/trips/Trips";
import Bookings from "../pages/bookings/Bookings";
import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";
import About from "../pages/about";
import AboutPhrc from "../pages/about/aboutPhrc";
import Mision_vision from "../pages/about/mission-vision";
import FoundingFathers from "../pages/about/foundingFathers";
import AdvisoryBoard from "../pages/about/advisoryBoard";
import ManagementCommitee from "../pages/about/managementCommitee";
import Partners from "../pages/about/partners";
import Affiliations from "../pages/about/affiliations";
import Organogram from "../pages/about/organogram";
import OurTeam from "../pages/our-team";
import SupportTeam from "../pages/our-team/support-team";

// const SignIn = React.lazy(() => import("../pages/SignIn"));
// const Layout = React.lazy(() => import("../navigation/layout/main-layout"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={MAIN_LAYOUT} element={<Layout />}>
        <Route path={DASHBOARD} element={<Dashboard />} />
        <Route path={ABOUT} element={<About />}>
           <Route path="about-us" element={<AboutPhrc/>}/>
           <Route path="mision-vision" element={<Mision_vision/>}/>
           <Route path="founding-fathers" element={<FoundingFathers/>}/>
           <Route path="advisory-board" element={<AdvisoryBoard/>}/>
           <Route path="management-commitee" element={<ManagementCommitee/>}/>
           <Route path="partners" element={<Partners/>}/>
           <Route path="affiliations" element={<Affiliations/>}/>
           <Route path="organogram" element={<Organogram/>}/>
        </Route>

        <Route path={OUR_TEAM} element={<OurTeam />}>
            <Route path="support-team" element={<SupportTeam />}/>
        </Route>
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
