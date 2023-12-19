import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   
body{
    background-color: #1F2B4E;

}

:root {

/* fonts */
--caption-heavy: 'GmarketSansMedium';

/* font sizes */
--font-size-mini: 15px;
--caption-heavy-size: 12px;
--font-size-sm: 14px;
--font-size-xl: 20px;
--font-size-19xl: 38px;

/* Colors */
--text-white: #fff;
--indigo-850: #111933;
--color-gray-100: rgba(255, 255, 255, 0);
--color-gray-200: rgba(0, 0, 0, 0.56);
--color-dimgray: #5d6374;
--color-darkslategray-100: #1e4d5a;
--color-darkslategray-200: #333;
--color-gainsboro: #ddd;
--indigo-400: #4a66c3;

/* Gaps */
--gap-xs: 12px;
--gap-9xs: 4px;
--gap-5xs: 8px;
--gap-7xs: 6px;
--gap-3xs: 10px;

/* Paddings */
--padding-base: 16px;
--padding-5xs: 8px;
--padding-4xs: 9px;
--padding-xs: 12px;
--padding-mini: 15px;
--padding-3xs: 10px;
--padding-xl: 20px;
--padding-8xs: 5px;

/* Border radiuses */
--br-5xs: 8px;

/* Effects */
--light-shadow-6: 0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16);
}
`;
