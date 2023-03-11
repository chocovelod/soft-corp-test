import { FC, SVGAttributes } from "react";

const PriceIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        strokeWidth="5"
      />
      <path
        d="M45.729 54.536v-1.929H48.3v-5.786h-.04c-.321.503-.623.724-1.105 1.146l-1.547-1.608 2.973-2.752h2.29v9h2.572v1.929h-7.714Zm10.285-5.143c0-3.656-2.21-8.357-6.428-8.357-4.219 0-6.429 4.7-6.429 8.357 0 3.656 2.21 8.357 6.429 8.357s6.428-4.7 6.428-8.357ZM66.3 54.536a5.153 5.153 0 0 0-5.143 5.143H38.015a5.153 5.153 0 0 0-5.143-5.143V44.25a5.153 5.153 0 0 0 5.142-5.143h23.143A5.153 5.153 0 0 0 66.3 44.25v10.286Zm2.572-16.715c0-.703-.583-1.285-1.286-1.285h-36c-.703 0-1.286.582-1.286 1.285v23.143c0 .703.583 1.286 1.286 1.286h36c.703 0 1.286-.583 1.286-1.286V37.821Z"
        fill="#fff"
      />
    </svg>
  );
};

export { PriceIcon };
