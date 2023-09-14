import { useEffect } from "react";
import { useState } from "react";
import { useQueryStrings } from ".";

const tabErrors = [undefined, null, ""];

const useTab = (initial: string) => {
  const [tab, setTab] = useState("");
  const query = useQueryStrings();

  useEffect(() => {
    if (initial) setTab(initial);
  }, [initial]);

  useEffect(() => {
    if (tabErrors.includes(query.get("tab"))) setTab(initial);
    else setTab(query.get("tab") as string);
  }, [query, tab, initial]);

  return { tab, setTab };
};

export default useTab;
