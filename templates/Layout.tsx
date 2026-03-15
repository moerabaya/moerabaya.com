import React from "react";
import { Navigation } from "@/components";

import Main from "@/components/Main";
import { StyledComponentsRegistry } from "@/app/[locale]/styled-components-registry";

export default function Layout({ children }: React.PropsWithChildren<unknown>) {
  return (
    <StyledComponentsRegistry>
      <Navigation />
      <Main>{children}</Main>
    </StyledComponentsRegistry>
  );
}
