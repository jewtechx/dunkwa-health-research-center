import React, { useState } from "react";
import AddBookings from "./modals/AddBookings";
import { Add } from "iconsax-react";
import { Icon } from "@iconify/react";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

import classNames from "../../helpers/classNames";
import ListTableComponent from "../../components/list-table";
import { fakeBookingData } from "./fakeBookingData";
import { colPropType } from "../../core-ui/table/types";
import { Menu, Transition } from "@headlessui/react";
import { DatePicker } from "antd";

const stats = [
  {
    name: "All Tickets",
    stat: "200,000",
    changeType: "increase",
    change: "4.05%",
  },
  {
    name: "Tickets Booked",
    stat: "26,000",
    changeType: "increase",
    change: "4.05%",
  },
  {
    name: "Available Tickets",
    stat: "12",
    changeType: "increase",
    change: "4.05%",
  },
];

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

function Bookings() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = React.useState<number>(10);
  const [skip, setSkip] = React.useState<number>(0);
  const [end, setEnd] = React.useState<number>(0);

  const handleClose = () => {
    setShowModal(false);
  };
  const cols: colPropType[] = [
    {
      title: "Vehicle Number",
      align: "center",
      type: "value",
      rows: [{ text: { accessor: ["vehicleNumber"] } }],
    },
    {
      title: "Insurance",
      align: "center",
      type: "value",
      rows: [
        { text: { accessor: ["insuranceFrom"] } },
        { text: { accessor: ["insuranceTo"], className: "text-gray-400" } },
      ],
    },
    {
      title: "Roadworthy",
      align: "center",
      type: "value",
      rows: [{ text: { accessor: ["roadworthy"] } }],
    },
    {
      title: "Model",
      subTitle: "(Color)",
      align: "center",
      type: "value",
      rows: [
        { text: { accessor: ["model"] } },
        { text: { accessor: ["color"], className: "text-gray-400" } },
      ],
    },
    {
      title: "Year of Make",
      align: "center",
      subTitle: "(Seats)",
      type: "value",
      rows: [
        { text: { accessor: ["yearOfMake"] } },
        { text: { accessor: ["numberOfSeats"], className: "text-gray-400" } },
      ],
    },
    {
      title: "Status",
      type: "value",
      align: "center",
      rows: [
        {
          status: {
            accessor: ["status"],
            statusItems: [
              {
                label: "Inactive",
                value: "Inactive",
                className: "bg-red-100 text-red-800 px-3 font-medium py-1",
              },
              {
                label: "Active",
                value: "Active",
                className: "bg-green-100 text-green-800 px-3 font-medium py-1",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Assigned Driver",
      align: "center",
      type: "value",
      rows: [{ text: { accessor: ["assignedDriver"] } }],
    },
    {
      title: "Actions",
      align: "center",
      type: "value",
      rows: [{ text: { accessor: ["assignedDriver"] } }],
    },
  ];

  return (
    <>
      <div className="bg-background w-screen shadow-md  pb-20">
        <div className="bg-white px-10 lg:px-28 flex items-center justify-between py-6 ">
          <header>
            <div className="">
              <h1 className="text-3xl font-medium leading-tight tracking-tight text-gray-900">
                Bookings
              </h1>
            </div>
          </header>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="text-white flex items-center  bg-primary px-4 py-2 rounded-lg "
            >
              <Add className="h-5 w-5" aria-hidden="true" />
              Add New Booking
            </button>
          </div>
        </div>

        {/* Button groups */}
        <span className=" inline-flex rounded-md px-10 lg:px-28 pt-10">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            12 months
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            30 days
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            7 days
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            24 hours
          </button>
        </span>

        <div className="flex flex-col lg:flex-row lg:justify-between px-10 lg:px-28 lg:max-w-full lg:gap-x-6 lg:overflow-x-auto pt-10 gap-y-5">
          {stats.map((item) => (
            <div
              key={item.name}
              className="bg-white md:min-w-[250px] rounded-lg shadow-md p-4"
            >
              <div className="flex items-center justify-between">
                <dt className="text-sm font-normal text-gray-500">
                  {item.name}
                </dt>
                <EllipsisVerticalIcon className="w-5 h-5" color="#757575" />
              </div>
              <dd className="mt-1 pt-5 pb-3 flex items-baseline justify-between">
                <div className="flex items-baseline text-2xl font-semibold text-black">
                  {item.stat}
                </div>
                <div
                  className={classNames(
                    item.changeType === "increase"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800",
                    "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium ml-2"
                  )}
                >
                  {item.changeType === "increase" ? (
                    <ArrowUpIcon
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownIcon
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                      aria-hidden="true"
                    />
                  )}
                  <span className="sr-only">
                    {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                    by
                  </span>
                  {item.change}
                </div>
              </dd>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-full lg:px-28">
          <div className="bg-white  rounded-xl  shadow-xl mt-5 lg:px-10 py-12 overflow-x-auto pb-16">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-5 bg-gray-100 px-1 border pr-3 rounded-lg">
                <button className="bg-white my-1 px-3 py-1 rounded-lg">
                  All
                </button>
                <button className="text-lightgray">Booked</button>
                <button className="text-lightgray">Reserved</button>
                <button className="text-lightgray">Rescheduled</button>
                <button className="text-lightgray">Cancelled</button>
              </div>
              <div className="flex gap-x-4 items-center">
                <div>
                  <DatePicker size={"middle"} />
                </div>
                <div>
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
            <main className={""}>
              <ListTableComponent
                refetch={""}
                setLimit={setLimit}
                loading={loading}
                limit={limit}
                data={fakeBookingData || []}
                total={fakeBookingData?.length || 0}
                skip={skip}
                setSkip={setSkip}
                end={end}
                setEnd={setEnd}
                cols={cols}
                showPagination
                showTop
              />
            </main>
          </div>
        </div>
      </div>
      <AddBookings onClose={handleClose} visible={showModal} />
    </>
  );
}

export default Bookings;
