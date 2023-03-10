import { FC, SVGAttributes } from "react";

const PercentIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="47.5"
        fill="#3E9CDC"
        stroke="#286690"
        stroke-width="5"
      />
      <path
        d="M59.786 57.964a2.59 2.59 0 0 1-2.572 2.572 2.59 2.59 0 0 1-2.571-2.572 2.59 2.59 0 0 1 2.571-2.571 2.59 2.59 0 0 1 2.572 2.571ZM44.357 42.536a2.59 2.59 0 0 1-2.571 2.571 2.59 2.59 0 0 1-2.572-2.571 2.59 2.59 0 0 1 2.572-2.572 2.59 2.59 0 0 1 2.571 2.572ZM64.93 57.964a7.716 7.716 0 0 0-7.715-7.714 7.716 7.716 0 0 0-7.714 7.714 7.716 7.716 0 0 0 7.714 7.715 7.716 7.716 0 0 0 7.715-7.715ZM63 36.107c0-.703-.583-1.286-1.286-1.286H58.5c-.402 0-.783.201-1.025.523L36.261 63.629c-.16.221-.261.483-.261.764 0 .703.583 1.286 1.286 1.286H40.5c.402 0 .783-.201 1.025-.523L62.739 36.87c.16-.22.261-.482.261-.763Zm-13.5 6.429a7.716 7.716 0 0 0-7.714-7.715 7.716 7.716 0 0 0-7.715 7.715 7.716 7.716 0 0 0 7.715 7.714 7.716 7.716 0 0 0 7.714-7.714Z"
        fill="#fff"
      />
    </svg>
  );
};

export { PercentIcon };