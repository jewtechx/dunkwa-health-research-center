import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { Facebook, SearchNormal1, Setting2 } from "iconsax-react";

import classNames from "../../../helpers/classNames";
import topNavImg from "../../../assets/images/logo-02.png";

import navigation from "../../navigation";
import { SETTINGS } from "../../../constants/page-paths";
import { BiLogoFacebook,BiLogoLinkedin,BiLogoTwitter } from "react-icons/bi";

function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className="flex flex-col items-center mb-10 justify-center">
        <div>
          <img src={topNavImg} />
        </div>
        <div>
          <Disclosure as="nav" className="">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 -ml-40 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-x-10">
                      <div className="flex-shrink-0 ">
                        <Link to="/">
                          <h2 className="text-white">AppName</h2>
                        </Link>
                      </div>
                      <div className="hidden md:block relative">
                        <div className="flex items-baseline space-x-1">
                          {navigation.map((item, index) => (
                            <Fragment key={item.name}>
                              {/* Render NavLink */}
                              <NavLink
                                to={item.href}
                                className={classNames(
                                  "text-green-900 flex w-full items-center gap-x-1 hover:bg-green-800 hover:text-white",
                                  "rounded-md px-3 py-2 text-[13px] whitespace-nowrap font-bold"
                                )}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                              >
                                {item.name}
                                {item.icon}
                              </NavLink>
                              
                              {/* Render Dropdown inside a Transition */}
                              {item.dropdownItems && (
                                <Transition
                                  show={hoveredIndex === index}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <div onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)} className="origin-top-right border-t-2 border-green-900 absolute  -right-24  mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div
                                      className="py-1"
                                      role="menu"
                                      aria-orientation="vertical"
                                      aria-labelledby="options-menu"
                                    >
                                      {item.dropdownItems.map(
                                        (dropdownItem: any) => (
                                          <Link
                                            key={dropdownItem.name}
                                            to={dropdownItem.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                          >
                                            {dropdownItem.name}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </Transition>
                              )}
                              
                            </Fragment>
                          ))}
                          
                        </div>
                      </div>
                    </div>
                     {/* <div className="hidden md:block">
                      <div className="ml-4 gap-x-6 flex items-center md:ml-6">
                       {/* <button
                          type="button"
                          className="rounded-full  p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="sr-only">Search</span>
                          <SearchNormal1
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                        <Link
                          to={SETTINGS}
                          type="button"
                          className="rounded-full  p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="sr-only">Settings</span>
                          <Setting2 className="h-6 w-6" aria-hidden="true" />
                        </Link>{" "}
                        <button
                          type="button"
                          className="rounded-full  p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div> */}
 
                        <div className="flex gap-4 mr-2">
                          <a href="https://www.facebook.com" className="p-2 rounded-full shadow-lg"><BiLogoFacebook /></a>
                          <a href="https://www.twitter.com" className="p-2 rounded-full shadow-lg"><BiLogoTwitter /></a>
                          <a href="https://www.linkedin.com" className="p-2 rounded-full shadow-lg"><BiLogoLinkedin /></a>
                        </div>


                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-green-900 p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  {/* <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3"> */}
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                          {navigation.map((item, index) => (
                            <Fragment key={item.name}>
                              {/* Render NavLink */}
                              <NavLink
                                to={item.href}
                                className={classNames(
                                  "text-green-900 flex w-full items-center gap-x-1 hover:bg-green-800 hover:text-white",
                                  "rounded-md px-3 py-2 text-[13px] whitespace-nowrap font-bold"
                                )}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                              >
                                {item.name}
                                {item.icon}
                              </NavLink>
                              {/* Render Dropdown inside a Transition */}
                              {item.dropdownItems && (
                                <Transition
                                  show={hoveredIndex === index}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <div onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)} className="origin-top-right border-t-2 border-green-900 absolute  -right-24  mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div
                                      className="py-1"
                                      role="menu"
                                      aria-orientation="vertical"
                                      aria-labelledby="options-menu"
                                    >
                                      {item.dropdownItems.map(
                                        (dropdownItem: any) => (
                                          <Link
                                            key={dropdownItem.name}
                                            to={dropdownItem.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                          >
                                            {dropdownItem.name}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </Transition>
                              )}
                            </Fragment>
                          ))}
                        </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

export default Navbar;
