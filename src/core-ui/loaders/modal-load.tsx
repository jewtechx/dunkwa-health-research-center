import * as React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const DataLoader = () => {
  return (
    <React.Fragment>
      <div
        aria-live="assertive"
        className="fixed z-10 inset-0 bg-black bg-opacity-20 flex justify-center items-center px-4 py-6 pointer-events-none sm:p-6 sm:items-center"
      >
        <PulseLoader size={30} color={"#a40e1b"} />
      </div>
    </React.Fragment>
  );
};

export default DataLoader;
