import { useState } from "react";

const usePagination = (getLimit = 10) => {
  const [limit, setLimit] = useState(getLimit);
  const [skip, setSkip] = useState(0);

  return { limit, setLimit, skip, setSkip };
};

export default usePagination;
