import React, { useEffect, useRef } from "react";

export const useUpdateEffect = (effect, dependencies) => {
  const didMount = useRef(false);
  //useState state바뀌면->렌더링
  //useRef 바뀌어도 -> 렌더링이 되지 않습니다.

  useEffect(() => {
    if (didMount.current) effect();
    else didMount.current = true;
  }, dependencies);
};
