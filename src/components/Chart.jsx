import React, { useEffect, useState } from "react";

const Chart = ({ content, setContent }) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(content);
  }, [content]);

  return <div>{data}</div>;
};

export default Chart;
