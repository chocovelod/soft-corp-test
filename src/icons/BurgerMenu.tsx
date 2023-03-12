import { FC, SVGAttributes } from "react";

const BurgerMenu: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 18h16M4 12h16M4 6h16"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export { BurgerMenu };
