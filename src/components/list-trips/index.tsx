/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from "react";
import { ITripData } from "./types";
import TripBody from "./body";
import Pagination from "../../core-ui/table/pagination/main";
import { PageLoader } from "../../core-ui/loaders";
import EmptyComponent from "../../assets/svg/EmptyComponent";
import { Menu, Transition } from "@headlessui/react";
import classNames from "../../helpers/classNames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { DatePicker } from "antd";
import { faBarChart, faBars } from "@fortawesome/free-solid-svg-icons";

const filterItems = [
  {
    name: "One-time",
    href: "#",
  },
  {
    name: "Recurring",
    href: "#",
  },
  {
    name: "All",
    href: "#",
  },
];

type ListTripsProps = {
  data: ITripData[];
  showPagination: boolean;
  showTop: boolean;
  limit: number;
  skip: number;
  setLimit: any;
  loading: boolean;
  setSkip: any;
  NoDataComponent?: JSX.Element;
  total: number;
};

function ListTrips({
  data,
  showPagination,
  showTop,
  limit,
  NoDataComponent,
  skip,
  loading,
  setSkip,
  total,
}: ListTripsProps) {
  return (
    <>
      <div className="mt-10 max-w-full  pb-10 lg:px-28">
        <div className="bg-white  rounded-xl  shadow-xl mt-5 overflow-y-auto max-h-[46rem] lg:px-10 py-12 overflow-x-auto">
          {showTop && (
            <div className="flex lg:justify-between gap-y-3  flex-wrap items-center">
              <div className="flex gap-x-2 md:gap-x-5 mx-2 bg-gray-100 px-1 border pr-3 rounded-lg">
                <button className="bg-white my-1 px-3 py-1 rounded-lg">
                  Upcoming
                </button>
                <button className="text-lightgray">Pending</button>
                <button className="text-lightgray">Recurring</button>
                <button className="text-lightgray">Cancelled</button>
              </div>
              <div className="flex gap-x-4 mx-2 md:mx-0 items-center">
                <div>
                  <DatePicker size={"middle"} />
                </div>
                <div className="">
                  <Menu>
                    <Menu.Button className="flex max-w-xs h-9 w-24 items-center border rounded-lg text-sm">
                      <div className="flex w-full justify-center items-center">
                        <span className="text-gray-400 pr-3">Filters</span>
                        <Icon
                          className="text-gray-400"
                          fontSize={24}
                          icon="octicon:filter-24"
                        />
                      </div>
                    </Menu.Button>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mr-20 transform -translate-x-1/2 z-10  w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {filterItems.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } block px-4 py-2 text-sm text-gray-700`}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          )}
          {loading ? (
            <div className="font-light w-full h-full flex flex-col justify-center items-center">
              <PageLoader />
            </div>
          ) : total ? (
            <main className={"mt-10"}>
              {data.map((trip, index) => (
                <TripBody key={index} data={trip} />
              ))}
            </main>
          ) : (
            <React.Fragment>
              {NoDataComponent ? (
                NoDataComponent
              ) : (
                <>
                  <div
                    style={{
                      height: "70vh",
                      width: "80vw",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                    className="font-light"
                  >
                    <EmptyComponent className="h-56 w-56" />
                    <span>Oops, no data available</span>
                  </div>
                </>
              )}
            </React.Fragment>
          )}
          {showPagination && (
            <Pagination
              height="1"
              limit={limit}
              setSkip={setSkip}
              skip={skip}
              total={total}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ListTrips;
