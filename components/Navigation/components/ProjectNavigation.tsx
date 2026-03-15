"use client";

import Link from "next/link";
import { AnimatedView } from "components";
import useGlobalization from "hooks/useGlobalization";

import Nav from "../Nav.styled";

type Props = {
  previous?: string;
  next?: string;
  title?: string;
};

const ProjectNavigationBar = ({ previous, next, title }: Props) => {
  const { translate } = useGlobalization();

  return (
    <Nav $isOpen={false} className="text-center">
      <AnimatedView vertical="-75" className="h-full">
        <div className="container m-auto flex h-full items-center justify-stretch">
          <div className="flex-1 text-start">
            <Link
              href={"/"}
              className="inline-block rounded-[3px] px-3 py-3 pb-4 align-middle text-xl leading-3 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-50 dark:hover:bg-neutral-900"
              style={{ fontVariant: "all-small-caps" }}
            >
              <svg
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="me-2 mt-[1px] inline-block size-[10px] *:fill-neutral-900 dark:*:fill-neutral-50 max-sm:m-0 max-sm:size-[16px]"
              >
                <path
                  d="M5.00048 4.05732L8.30048 0.757324L9.24315 1.69999L5.94315 4.99999L9.24315 8.29999L8.30048 9.24266L5.00048 5.94266L1.70048 9.24266L0.757812 8.29999L4.05781 4.99999L0.757812 1.69999L1.70048 0.757324L5.00048 4.05732Z"
                  fill="black"
                />
              </svg>
              <span className="max-sm:hidden">
                {translate("navigation.close", "Close")}
              </span>
            </Link>
          </div>
          <span className="me-auto inline-block flex-1 rounded-[3px] px-3 py-3 pb-3 text-center align-middle text-lg leading-3 text-neutral-900 dark:text-neutral-50">
            {title}
          </span>

          <div className="flex flex-1 justify-end gap-3 text-end">
            {previous && (
              <Link
                href={`/work/${previous}`}
                className="me- inline-block rounded-[3px] px-3 py-3 pb-4 align-middle text-xl leading-3 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-50 dark:hover:bg-neutral-900"
                style={{ fontVariant: "all-small-caps" }}
              >
                <span className="max-sm:hidden">
                  {translate("navigation.previous", "Previous")}
                </span>
                <span className="hidden max-sm:inline">
                  {translate("navigation.previous", "Previous")}
                </span>
              </Link>
            )}
            {next && (
              <Link
                href={`/work/${next}`}
                className="inline-block rounded-[3px] px-3 py-3 pb-4 align-middle text-xl leading-3 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-50 dark:hover:bg-neutral-900"
                style={{ fontVariant: "all-small-caps" }}
              >
                <span className="max-sm:hidden">
                  {translate("navigation.next", "Next")}
                </span>
                <span className="hidden max-sm:inline">
                  {translate("navigation.next", "Next")}
                </span>
              </Link>
            )}
          </div>
        </div>
      </AnimatedView>
    </Nav>
  );
};

export default ProjectNavigationBar;
