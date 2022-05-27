import * as React from "react";

function ArrowLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
      <path
        d="M2.044 24.771L.231 22.945 20.2 2.985H9.217V.454h15.327v15.328h-2.528V4.807z"
        fill="#DAC6A6"
        fillRule="nonzero"
      />
    </svg>
  );
}

const MemoArrowLink = React.memo(ArrowLink);
export default MemoArrowLink;
