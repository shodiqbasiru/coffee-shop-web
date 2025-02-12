import { Container } from "@chakra-ui/react";
import React from "react";

function PageContainer({
  children,
  ...rest
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Container
      maxW={{ base: "100%", lg: "xxl" }}
      px={{ base: "0", lg: "88px" }}
      {...rest}
    >
      {children}
    </Container>
  );
}

export default PageContainer;
