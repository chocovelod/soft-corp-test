import { FC, SVGAttributes } from "react";

const DotsIcons: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="110"
      height="6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="81" cy="3" r="3" fill="#C4C4C4" />
      <circle cx="107" cy="3" r="3" fill="#C4C4C4" />
      <circle cx="55" cy="3" r="3" fill="#C4C4C4" />
      <circle cx="29" cy="3" r="3" fill="#C4C4C4" />
      <circle cx="3" cy="3" r="3" fill="#C4C4C4" />
    </svg>
  );
};

export { DotsIcons };
