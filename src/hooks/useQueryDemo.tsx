import { mockTableData } from "@constants/mocktabledata";
import { setTimeout } from "timers";
import React, { useEffect, useState } from "react";

function useQueryDemo(getValues:boolean = true) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  const getData = () => {
    setTimeout(() => {
      setData(getValues ? mockTableData : [])
      setLoading(false)
    }, 3000);
  }

  useEffect(() => {
    getData()
  }, []);

  return { data, loading }
}

export default useQueryDemo;
