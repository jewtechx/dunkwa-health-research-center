import { toast } from "react-hot-toast";
import {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { useLocation, useNavigate } from "react-router";
import { useQueryStrings } from "../../../hooks";
import { addpageToRoute } from "./broker";

interface Props {
  total: number;
  limit: number;
  skip: number;
  height: string;
  setSkip: Dispatch<SetStateAction<number>>;
}

// const Pagination: FC<Props> = ({ total, limit, setSkip, skip }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const query = useQueryStrings();
//   const [page, setPage] = useState(0);
//   const [enteredPage, setEnteredPage] = useState(1);

//   useEffect(() => {
//     if (["", undefined, null].includes(query.get("page"))) {
//       setPage(1); //set page
//       setEnteredPage(1); //set entered page
//       setSkip(0); // set skip
//     } else {
//       const pageNumber = parseInt(query.get("page") as string) as number;
//       setPage(pageNumber);
//       setEnteredPage(pageNumber); //set entered page
//       setSkip((pageNumber - 1) * limit);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [limit, query.get("page"), setSkip]);

//   return (
//     <Fragment>
//       <nav
//         className=" py-3 flex items-center justify-between border-t border-gray-200"
//         aria-label="Pagination"
//       >
//         <div className="hidden sm:block">
//           <p className="text-sm text-gray-700">
//             Showing Page{" "}
//             <input
//               type={"number"}
//               value={enteredPage}
//               onChange={(e) => {
//                 setEnteredPage(parseInt(e?.target?.value));
//               }}
//               onKeyDown={(e) => {
//                 if (e.code === "Enter") {
//                   //check if value entered is between the specified pages and set else throw error if its outside
//                   if (
//                     enteredPage > 0 &&
//                     enteredPage <= Math.ceil(total / limit)
//                   ) {
//                     setSkip(enteredPage * limit);
//                     setPage(enteredPage);
//                     navigate(addpageToRoute(location, enteredPage.toString()));
//                   } else {
//                     return toast.error(
//                       "Please enter a value between 1 and " +
//                         Math.ceil(total / limit)
//                     );
//                   }
//                 }
//               }}
//               className={
//                 "border border-gray-300 appearance-none w-20 text-center"
//               }
//             />{" "}
//             of <span className="font-medium">{Math.ceil(total / limit)}</span>
//           </p>
//         </div>
//         <div className="flex-1 flex justify-between sm:justify-end">
//           <button
//             type="button"
//             onClick={() => {
//               const newPage = page - 1;
//               setPage(newPage);
//               setEnteredPage(newPage);
//               navigate(addpageToRoute(location, newPage.toString()));
//             }}
//             disabled={skip === 0}
//             className={`inline-flex items-center w-24 px-3 py-3 border text-sm leading-4 bg-primary font-medium rounded-none text-white ${
//               skip > 0
//                 ? "bg-primary text-gray-600 hover:text-gray-400 focus:outline-none focus:border-green-700"
//                 : "bg-gray-100 text-gray-400 cursor-not-allowed focus:outline-none border-transparent "
//             }  focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150`}
//             // className="relative inline-flex items-center px-4 py-2  text-sm font-medium rounded-none text-white bg-red-600 hover:bg-red-700"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width={17}
//               height={17}
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span className={"font-light "}>Previous</span>
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               const newPage = page + 1;
//               setSkip(page * limit);
//               setPage(newPage);
//               setEnteredPage(newPage);
//               navigate(addpageToRoute(location, newPage.toString()));
//             }}
//             disabled={skip + limit >= total}
//             className={`inline-flex items-center ml-3 w-24 justify-center py-3 border bg-primary text-sm leading-4 font-medium rounded-none text-white ${
//               skip + limit < total
//                 ? "bg-primary text-gray-600 hover:text-gray-400 focus:outline-none focus:border-green-700"
//                 : "bg-gray-100 text-gray-400 cursor-not-allowed focus:outline-none border-transparent "
//             }  focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150`}
//             // className="ml-3 relative inline-flex items-center px-4 py-2  text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
//           >
//             <div className={"flex flex-row"}>
//               <span className={"font-light mr-1"}>Next</span>

//               <svg
//                 width={17}
//                 height={17}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="feather feather-chevrons-right"
//               >
//                 <path d="M13 17L18 12 13 7" />
//                 <path d="M6 17L11 12 6 7" />
//               </svg>
//             </div>
//           </button>
//         </div>
//       </nav>
//     </Fragment>
//   );
// };

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

const Pagination: FC<Props> = ({ total, limit, setSkip, skip , height}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQueryStrings();
  const [page, setPage] = useState(0);
  const [enteredPage, setEnteredPage] = useState(1);

  useEffect(() => {
    if (["", undefined, null].includes(query.get("page"))) {
      setPage(1); //set page
      setEnteredPage(1); //set entered page
      setSkip(0); // set skip
    } else {
      const pageNumber = parseInt(query.get("page") as string) as number;
      setPage(pageNumber);
      setEnteredPage(pageNumber); //set entered page
      setSkip((pageNumber - 1) * limit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, query.get("page"), setSkip]);
  return (
    <nav className={`flex items-center h-${height} bg-white justify-between  border-gray-200 px-4 pb-5 sm:px-0`}>
      <div className="flex w-0 flex-1 justify-start">
        <div className="flex items-center flex-row-reverse hover:bg-gray-100 border mx-3 mt-4 rounded-md pr-3 py-1 border-gray-400">
          <a
            href="#"
            className="inline-flex rounded-md   items-center pl-1  text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Previous
          </a>
          <ArrowLongLeftIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="hidden   md:flex md:gap-x-1">
        <a
          href="#"
          className="inline-flex items-center mt-4 py-2 hover:bg-gray-100 hover:rounded-md border-transparent px-4  text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          1
        </a>
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        <a
          href="#"
          className="inline-flex items-center mt-4 py-2 hover:bg-gray-100 hover:rounded-md text-gray-500 rounded-md px-4  text-sm bg-gray-100"
          aria-current="page"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex items-center mt-4 py-2 hover:bg-gray-100 hover:rounded-md border-transparent px-4  text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          3
        </a>
        <span className="inline-flex items-center mt-4 py-2  border-transparent px-4  text-sm font-medium text-gray-500">
          ...
        </span>
        <a
          href="#"
          className="inline-flex items-center mt-4 py-2 hover:bg-gray-100 hover:rounded-md border-transparent px-4  text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          8
        </a>
        <a
          href="#"
          className="inline-flex items-center mt-4 py-2 hover:bg-gray-100 hover:rounded-md  border-transparent px-4  text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          9
        </a>
        <a
          href="#"
          className="inline-flex items-center mt-4 py-2 hover:bg-gray-100 hover:rounded-md border-transparent px-4  text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          10
        </a>
      </div>
      <div className="flex w-0 flex-1 justify-end">
        <div className="flex items-center border mr-3 mt-4 rounded-md hover:bg-gray-100 px-2 py-1 border-gray-400">
          <a
            href="#"
            className="inline-flex rounded-md   items-center pl-1  text-sm font-medium text-gray-500 hover:border-gray-300"
          >
            Next
          </a>
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
    </nav>
  );
};

export default Pagination;
