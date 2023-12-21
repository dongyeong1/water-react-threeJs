import React, { useEffect, useRef } from "react";

export const useUpdateEffect = (effect, dependencies) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) effect();
    else didMount.current = true;
  }, dependencies);
};
