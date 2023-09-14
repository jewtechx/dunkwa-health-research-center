import { Fragment } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    0: "#3F83F6",
    "1.0": "#3F83F6",
  },
  shadowBlur: 5,
});

const LoadingComponent = () => {
  return (
    <Fragment>
      <TopBarProgress />
    </Fragment>
  );
};

export default LoadingComponent;
