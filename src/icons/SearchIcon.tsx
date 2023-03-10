import { FC, SVGAttributes } from "react";

const SearchIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M55.929 47.929c0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9 9 4.038 9 9Zm10.285 16.714c0-.683-.281-1.346-.743-1.808l-6.89-6.89a14.11 14.11 0 0 0 2.49-8.016c0-7.815-6.328-14.143-14.142-14.143-7.815 0-14.143 6.328-14.143 14.143 0 7.814 6.328 14.142 14.143 14.142a14.11 14.11 0 0 0 8.015-2.49l6.89 6.87a2.522 2.522 0 0 0 1.809.763 2.59 2.59 0 0 0 2.571-2.571Z"
        fill="#fff"
      />
    </svg>
  );
};

export { SearchIcon };
