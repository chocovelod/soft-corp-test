import { FC, SVGAttributes } from "react";

const CopyIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.813 4.609 13.33 1.127c-.413-.413-1.239-.76-1.83-.76h-10C.908.368.429.848.429 1.44v17.858c0 .591.48 1.07 1.071 1.07h15c.591 0 1.071-.479 1.071-1.07V6.439c0-.591-.346-1.417-.759-1.83Zm-4.956-2.723c.19.067.38.167.458.245l3.493 3.494c.078.078.179.267.246.457h-4.197V1.886Zm4.286 17.053H1.857V1.796h8.572V6.44c0 .592.48 1.072 1.071 1.072h4.643v11.428ZM4.714 9.296v.715c0 .2.157.357.357.357h7.858c.2 0 .357-.156.357-.357v-.715c0-.2-.156-.357-.357-.357H5.07c-.2 0-.357.157-.357.357Zm8.215 2.5H5.07c-.2 0-.357.157-.357.358v.714c0 .2.157.357.357.357h7.858c.2 0 .357-.156.357-.357v-.714c0-.201-.156-.357-.357-.357Zm0 2.858H5.07c-.2 0-.357.156-.357.357v.714c0 .201.157.357.357.357h7.858c.2 0 .357-.156.357-.357v-.714c0-.201-.156-.357-.357-.357Z"
        fill="#272733"
      />
    </svg>
  );
};

export { CopyIcon };
