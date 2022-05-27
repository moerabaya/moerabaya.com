import * as React from "react";

function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 52 81" {...props}>
      <g fill="#DAC6A6" fillRule="nonzero">
        <path d="M3.118 52.426L.544 55 26 80.456 51.456 55l-2.574-2.574L26 75.307z" />
        <path d="M24.135.853l-.014 78.28 3.744.014.014-78.28z" />
      </g>
    </svg>
  );
}

const MemoArrowDown = React.memo(ArrowDown);
export default MemoArrowDown;
