import { useEffect } from "react";

//ref 이외의 요소를 클릭했을때 실행하는 함수

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      console.log("eeeeeeeeeeeee", e.target);
      if (!ref.current || ref.current.contains(e.target)) {
        //ref의 값이 없거나 ref의 값중에 클릭한 요소가 있다면 return 반환
        return;
      }
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
