import { FC, SVGAttributes } from "react";

const ArrowIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="21"
      height="21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.934 12.348a.307.307 0 0 1-.09.206l-.446.446a.308.308 0 0 1-.205.09.308.308 0 0 1-.206-.09l-3.509-3.509-3.509 3.51a.308.308 0 0 1-.205.088A.29.29 0 0 1 6.56 13l-.447-.446a.307.307 0 0 1-.089-.206c0-.071.036-.151.09-.205l4.16-4.16a.308.308 0 0 1 .205-.09c.072 0 .152.036.206.09l4.16 4.16c.054.054.09.134.09.205Z"
        fill="none"
      />
    </svg>
  );
};

export { ArrowIcon };
