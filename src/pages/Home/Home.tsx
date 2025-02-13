import React from "react";
import { Box } from "@chakra-ui/react";

import PageContainer from "@/components/Common/Container/Container";
import NavigationComponent from "@/components/Common/Navigation/Navigation";
import HeroSection from "@/components/Section/Home/Hero";
import BestCoffeeSection from "@/components/Section/Home/BestCoffee";
import KnowledgeSection from "@/components/Section/Home/Knowledge";
import FacilitySection from "@/components/Section/Home/Facility";

function Home(): React.ReactElement {
  return (
    <Box overflowX="hidden">
      <Box bg="bgPrimary" padding="16px">
        <PageContainer>
          <NavigationComponent />
          <HeroSection />
        </PageContainer>
      </Box>
      <Box bg="bgSecondary" overflow="hidden">
        <PageContainer>
          <BestCoffeeSection />
        </PageContainer>
      </Box>
      <Box bg="bgTertiary" overflow="hidden">
        <PageContainer>
          <KnowledgeSection />
        </PageContainer>
      </Box>
      <Box bg="bgSecondary" overflow="hidden">
        <FacilitySection />
      </Box>
    </Box>
  );
}

export default Home;
