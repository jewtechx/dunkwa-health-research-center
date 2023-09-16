import { ArrowDown3, Location } from "iconsax-react";
import { ReactNode } from "react";
import { BiLogoLinkedin, BiPhoneCall, BiSolidDownArrow } from "react-icons/bi";

interface items {
  name: string;
  href: string;
  icon: ReactNode | JSX.Element;
  dropdownItems: any;
}

const navigation: items[] = [
  {
    name: "HOME",
    href: "/",
    icon: null,
    dropdownItems: null,
  },
  {
    name: "ABOUT US",
    href: "#",
    icon: <ArrowDown3 className="w-4 h-4"/>,
    dropdownItems: [
      { name: "About PHRC", href: "/about/about-us" },
      { name: "Our Mission, Vision & Vs", href: "/about/mision-vision" },
      { name: "Founding Fathers", href: "/about/founding-fathers" },
      { name: "Advisory Board", href: "/about/advisory-board" },
      { name: "Management Commitee", href: "/about/management-commitee" },
      { name: "Partners", href: "/about/partners" },
      { name: "Affiliations", href: "/about/affiliations" },
      { name: "Organogram", href: "/about/organogram" },
    ],
  },
  {
    name: "OUR TEAM",
    href: "#",
    icon: <ArrowDown3 className="w-4 h-4"/>,
    dropdownItems: [
      { name: "Science Team", href: "/our-team/science-team" },
      { name: "Support Team", href: "/our-team/support-team" },
      // Add more dropdown items as needed
    ],
  },
  {
    name: "GROUPS",
    href: "#",
    icon: <ArrowDown3 className="w-4 h-4"/>,
    dropdownItems: [
      { name: "Clinical Science", href: "/groups/#" },
      { name: "Biomedical Science", href: "/groups/#" },
      { name: "Data Science", href: "/groups/#" },
      { name: "Social & Population Science", href: "/groups/#" },
      { name: "Environmental Science", href: "/groups/#" },
      { name: "Health Systems", href: "/groups/#" },
      { name: "Neglected Tropical Diseases", href: "/groups/#" },
      { name: "Review Board", href: "/groups/review-board" },
      // Add more dropdown items as needed
    ],
  },

  {
    name: "FACILITIES",
    href: "#",
    icon: <ArrowDown3 className="w-4 h-4"/>,
    dropdownItems: [
      { name: "Health Facilities", href: "/#" },
      { name: "Data Centre/ICT", href: "/#" },
      { name: "Biomedical Laboratory", href: "/#" },
      { name: "Pharmacy", href: "/#" },
      { name: "Clinical Trial Centre", href: "/#" },
      { name: "Field Sites", href: "/#" },
      { name: "Archives", href: "/#" },
      { name: "Hospitality", href: "/#" },
      // Add more dropdown items as needed
    ],
  },
  {
    name: "RESEARCH",
    href: "#",
    icon: <ArrowDown3 className="w-4 h-4"/>,
    dropdownItems: [
      { name: "2022:Titles", href: "/#" },
      // Add more dropdown items as needed
    ],
  },
  {
    name: "DOCUMENTS",
    href: "#",
    icon: <ArrowDown3 className="w-4 h-4"/>,
    dropdownItems: [
      { name: "Research Reports", href: "/documents/#" },
      { name: "Publications", href: "/documents/#" },
      { name: "Annual Reports", href: "/documents/annual-reports" },
      { name: "Gallery", href: "/documents/gallery  " },
      // Add more dropdown items as needed
    ],
  },
  {
    name: "CONTACT US",
    href: "#",
    icon: <ArrowDown3 className="w-4 h-4"/>,
    dropdownItems: [
      { name: "Contact Us", href: "/contact/contact-us" },
      { name: "FAQ", href: "/contact/faq" },
      // Add more dropdown items as needed
    ],
  },
];


const footerNavigation = {

  contact: [
    {icon:<Location className="w-4 h-4"/>, name: 'Address:', value: 'Ghana' },
    { icon:<BiPhoneCall/> ,name: 'Phone', value: '+233 (0) 50 469 8534' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}


export const footerNavLinks = footerNavigation
export default navigation;