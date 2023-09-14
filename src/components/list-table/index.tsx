/* eslint-disable @typescript-eslint/no-explicit-any */
import TableCell from "../../core-ui/table/cell";
import React, { Fragment } from "react";
import { colPropType, TableHeadType } from "../../core-ui/table/types";
import Pagination from "../../core-ui/table/pagination";
import GridLayoutComponent from "../../core-ui/grid-layout";
import Search from "../../core-ui/search";
import { PageLoader } from "../../core-ui/loaders";
import EmptyComponent from "../../assets/svg/EmptyComponent";
import TopTableComponent from "./top";

const TableHead = ({ cols }: TableHeadType) => {
  return (
    <thead>
      <tr>
        {cols.map((col, i) => (
          <th
            key={i}
            className={`px-6 py-3 border-b border-gray-200 bg-white text-${
              col?.align || "left"
            } text-xs leading-4 font-medium text-gray-900 tracking-wider`}
            style={{ textAlign: "center" }} // Add this line
          >
            {col.title}
            <span className="">{col.subTitle}</span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

interface TopTableComponentProps {
  limit: any;
  setLimit: any;
  refetch: any;
  setSkip: any;
  colspan?: any;
}

// const PageLimiter = ({
//   limit = 10,
//   setLimit,
//   refetch,
//   setSkip,
//   colspan = 1,
// }: TopTableComponentProps) => {
//   return (
//     <div className={`col-span-${colspan}`}>
//       <div className="mt-1 rounded-none shadow-sm col-span-1 flex flex-row items-center">
//         <select
//           data-testid="table-component-pagination"
//           id="pagination"
//           value={limit}
//           onChange={(e) => {
//             setLimit(parseInt(e.target.value));
//             setSkip(0);
//             refetch();
//           }}
//           className="form-select rounded-none font-light border-gray-300 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
//         >
//           <option value={10}>10 per page</option>
//           <option value={50}>50 per page</option>
//           <option value={100}>100 per page</option>
//         </select>
//       </div>
//     </div>
//   );
// };

export interface TableComponentProps {
  showTop?: any;
  showPagination?: any;
  search?: any;
  setSearch?: any;
  limit?: any;
  skip?: any;
  end?: any;
  refetch?: any;
  setLimit?: any;
  setSkip?: any;
  setEnd?: any;
  data: any[];
  total?: any;
  cols: colPropType[];
  loading?: boolean;
  NoDataComponent?: JSX.Element;
}

const ListTableComponent = ({
  refetch,
  limit,
  setLimit,
  data,
  total,
  setEnd,
  skip,
  setSkip,
  cols,
  showTop,
  showPagination,
  search,
  setSearch,
  loading,
  NoDataComponent,
}: TableComponentProps) => {
  return (
    <>
      {showTop && (
        <div className="mb-3">
          <TopTableComponent
            search={search}
            setSearch={setSearch}
            limit={limit}
            refetch={refetch}
            setLimit={setLimit}
            setSkip={setSkip}
          />
        </div>
      )}
      <div
        data-testid="list-table-component"
        className="min-w-[16rem] mx-3 md:mx-0  overflow-x-auto border-[0.5px] border-gray-300 shadow-lg  rounded-lg"
      >
        <div className="flex flex-col">
          <div className="-my-2 py-2">
            <div className="align-middle inline-block min-w-full sm:rounded-none">
              {loading ? (
                <div className="font-light w-full h-full flex flex-col justify-center items-center">
                  <PageLoader />
                </div>
              ) : total ? (
                <table className="min-w-full">
                  <TableHead cols={cols} />

                  <tbody className="bg-white">
                    {data?.map((dataItem, i) => (
                      <tr
                        key={i}
                        className={`${
                          i === 0
                            ? "bg-gray-50"
                            : i % 2 === 0
                            ? "bg-gray-50"
                            : ""
                        }`}
                      >
                        {cols.map((col, j) => (
                          <TableCell key={j} colItem={col} data={dataItem} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
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
            </div>
          </div>
        </div>
        {showPagination && (
          <Pagination
            height="16"
            limit={limit}
            setSkip={setSkip}
            skip={skip}
            total={total}
          />
        )}
      </div>
    </>
  );
};

export default ListTableComponent;
