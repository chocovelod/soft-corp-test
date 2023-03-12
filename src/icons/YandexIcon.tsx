import { FC, SVGAttributes } from "react";

const YandexIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="21"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.78 9.93c0-.983.083-1.608 2.138-3.13 1.701-1.259 7.155-5.563 7.155-5.563v7.185h4.147v10.34H5.075a1.294 1.294 0 0 1-1.295-1.284V9.93Z"
        fill="#3E9CDC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.073 8.422v4.163l-7.62 5.148 9.634-3.108V8.422h-2.014Z"
        fill="#000"
        fill-opacity=".2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.59 8.207c.446-.527 1.097-.713 1.454-.415.358.297.286.965-.16 1.492-.445.526-1.096.712-1.453.415-.358-.298-.286-.966.16-1.492Z"
        fill="#231F20"
      />
    </svg>
  );
};

export { YandexIcon };
