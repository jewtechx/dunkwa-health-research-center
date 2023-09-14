import { ArrowDown2, Location } from "iconsax-react";
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
    href: "/buses",
    icon: <ArrowDown2/>,
    dropdownItems: [
      { name: "About PHRC", href: "/option1" },
      { name: "Our Mission, Vision & Vs", href: "/option2" },
      { name: "Our Mission, Vision & Vs", href: "/option2" },
      { name: "Founding Fathers", href: "/option2" },
      { name: "Advisory Board", href: "/option2" },
      { name: "Management Commitee", href: "/option2" },
      { name: "Partners", href: "/option2" },
      { name: "Affiliations", href: "/option2" },
    ],
  },
  {
    name: "OUR TEAM",
    href: "/drivers",
    icon: <ArrowDown2/>,
    dropdownItems: [
      { name: "Science Team", href: "/option1" },
      { name: "Support Team", href: "/option2" },
      // Add more dropdown items as needed
    ],
  },
  {
    name: "GROUPS",
    href: "/bookings",
    icon: <ArrowDown2/>,
    dropdownItems: [
      { name: "Clinical Science", href: "/option1" },
      { name: "Biomedical Science", href: "/option2" },
      { name: "Data Science", href: "/option2" },
      { name: "Social & Population Science", href: "/option2" },
      { name: "Environmental Science", href: "/option2" },
      { name: "Health Systems", href: "/option2" },
      { name: "Neglected Tropical Diseases", href: "/option2" },
      { name: "Review Board", href: "/option2" },
      // Add more dropdown items as needed
    ],
  },

  {
    name: "FACILITIES",
    href: "/trips",
    icon: <ArrowDown2/>,
    dropdownItems: [
      { name: "Health Facilities", href: "/option1" },
      { name: "Data Centre/ICT", href: "/option2" },
      { name: "Biomedical Laboratory", href: "/option2" },
      { name: "Pharmacy", href: "/option2" },
      { name: "Clinical Trial Centre", href: "/option2" },
      { name: "Field Sites", href: "/option2" },
      { name: "Archives", href: "/option2" },
      { name: "Hospitality", href: "/option2" },
      // Add more dropdown items as needed
    ],
  },
  {
    name: "RESEARCH",
    href: "/trips",
    icon: <ArrowDown2/>,
    dropdownItems: [
      { name: "2022:Titles", href: "/option1" },
      // Add more dropdown items as needed
    ],
  },
  {
    name: "DOCUMENTS",
    href: "/trips",
    icon: <ArrowDown2/>,
    dropdownItems: [
      { name: "Research Reports", href: "/option1" },
      { name: "Publications", href: "/option2" },
      { name: "Annual Reports", href: "/option2" },
      { name: "Gallery", href: "/option2" },
      // Add more dropdown items as needed
    ],
  },
  {
    name: "CONTACT US",
    href: "/trips",
    icon: <ArrowDown2/>,
    dropdownItems: [
      { name: "Contact Us", href: "/option1" },
      { name: "FAQ", href: "/option2" },
      // Add more dropdown items as needed
    ],
  },
];


const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
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
