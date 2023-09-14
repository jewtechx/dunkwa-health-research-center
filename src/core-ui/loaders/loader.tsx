import * as React from "react";
import RingLoader from "react-spinners/PuffLoader";

const DataLoader = () => {
  return (
    <React.Fragment>
      <RingLoader size={60} color={"#F04444"} />
    </React.Fragment>
  );
};

export default DataLoader;
