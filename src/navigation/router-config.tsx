/* eslint-disable react-refresh/only-export-components */
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import Layout from "../navigation/layout/main-layout";
import Dashboard from "../pages/dashboard/Dashboard";
import {
  ABOUT,
  CONTACT,
  DASHBOARD,
  DOCUMENTS,
  GROUPS,
  MAIN_LAYOUT,
  OUR_TEAM,

} from "../constants/page-paths";
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
import ScienceTeam from "../pages/our-team/science-team";
import Team_member_detail from "../pages/our-team/team-member-detail";
import Groups from "../pages/groups";
import Review_board from "../pages/groups/review-board";
import Documents from "../pages/documents";
import AnnualReports from "../pages/documents/annual-reports";
import Contact from "../pages/contact";
import FAQ from "../pages/contact/faq";
import ContactUs from "../pages/contact/contact-us";

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
            <Route path="science-team" element={<ScienceTeam />}/>
            <Route path="science-team/:id" element={<Team_member_detail />}/>
        </Route>

        <Route path={GROUPS} element={<Groups />}>
            <Route path="review-board" element={<Review_board />}/>
        </Route>

        <Route path={DOCUMENTS} element={<Documents />}>
            <Route path="annual-reports" element={<AnnualReports />}/>
        </Route>

        <Route path={CONTACT} element={<Contact />}>
            <Route path="contact-us" element={<ContactUs />}/>
            <Route path="faq" element={<FAQ />}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
