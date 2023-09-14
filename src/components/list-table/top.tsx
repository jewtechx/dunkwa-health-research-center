/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from "react";
import GridLayoutComponent from "../../core-ui/grid-layout";
import Search from "../../core-ui/search";
import {  ArrowDown2 } from "iconsax-react";
// import Search from "@core-ui/search";

interface TopTableComponentProps {
  limit: any;
  setLimit: any;
  refetch: any;
  setSkip: any;
  search: any;
  setSearch: any;
}

const TopTableComponent = ({
  limit = 10,
  setLimit,
  refetch,
  setSkip,
  search,
  setSearch,
}: TopTableComponentProps) => {
  return (
    <Fragment>
      <div className="mt-6 flex md:flex-row ml-3 md:ml-0 md:justify-between flex-wrap sm:flex-col items-center  mb-5">
        <div className="">
          {/* <Search /> */}
          <GridLayoutComponent className="w-80 md:w-96" columns={5}>
            <Search colspan={2} setValue={setSearch} value={search} />
            <div className="col-span-2"></div>
          </GridLayoutComponent>
        </div>
        <div className="">
          <div className="mt-1 rounded-none shadow-sm w-52  relative  flex flex-row items-center">
            <div className="absolute right-0 pr-4">
              <ArrowDown2 size={16} color="#6B7280" />
            </div>
            <select
              id="pagination"
              value={limit}
              onChange={(e) => {
                setLimit(parseInt(e.target.value));
                setSkip(0);
                refetch();
              }}
              className="rounded-md border py-2 before:mr-3 select flex px-4 text-gray-500 font-light border-gray-300 appearance-none w-full  sm:text-sm sm:leading-5"
            >
              <option value={10}>8 per page</option>
              <option value={50}>50 per page</option>
              <option value={100}>100 per page</option>
            </select>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TopTableComponent;
