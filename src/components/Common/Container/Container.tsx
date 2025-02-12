import { Container } from "@chakra-ui/react";
import React from "react";

function PageContainer({
  children,
  ...rest
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Container maxW="xxl" px="42px" {...rest}>
      {children}
    </Container>
  );
}

export default PageContainer;
