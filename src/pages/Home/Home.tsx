import React from "react";
import { Box } from "@chakra-ui/react";
import PageContainer from "@/components/Common/Container/Container";
import NavigationComponent from "@/components/Common/Navigation/Navigation";
import HeroSection from "@/components/Section/Home/Hero";

function Home(): React.ReactElement {
  return (
    <Box bg="bgPrimary" minH="100vh" padding="16px" overflowX="hidden">
      <PageContainer>
        <NavigationComponent />
        <HeroSection />
      </PageContainer>
    </Box>
  );
}

export default Home;
