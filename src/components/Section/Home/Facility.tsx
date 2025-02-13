import React from "react";
import {
  Box,
  Button,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import { BUTTON_PROPS, TEXT_PROPS } from "@/constant/default-props";
import PageContainer from "@/components/Common/Container/Container";
// import GalleryFacility from "@/components/Common/Gallery/GalleryFacility";
// import { facilityItems } from "@/components/Common/Gallery/failities";
import F1 from "@/images/falility/1.jpg";
import F2 from "@/images/falility/2.jpg";
import F3 from "@/images/falility/3.jpg";
import F4 from "@/images/falility/4.jpg";

function FacilitySection(): React.ReactElement {
  const falities = [
    {
      url: F1,
      tab: "Bar",
      title: "Bar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc tincidunt ultricies",
    },
    {
      url: F2,
      tab: "Working Space",
      title: "Working Space",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc tincidunt ultricies",
    },
    {
      url: F3,
      tab: "Live Music",
      title: "Live Music",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc tincidunt ultricies",
    },
    {
      url: F4,
      tab: "Private Room",
      title: "Private Room",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc tincidunt ultricies",
    },
  ];

  return (
    <Box py="64px">
      <Heading
        {...TEXT_PROPS.heading}
        color="secondaryColorText"
        fontSize={{ base: "heading", md: "58px" }}
        textAlign="center"
        mb="32px"
      >
        Our Facilities
      </Heading>

      <PageContainer>
        <Box
          bg="bgPrimary"
          color="mainColorText"
          borderRadius="14px"
          overflow="hidden"
        >
          <Tabs variant="unstyled" isFitted position="relative" zIndex="1">
            <TabList height={"50px"}>
              {falities.map((item, index) => (
                <Tab
                  key={index}
                  {...TEXT_PROPS.body}
                  maxW="200px"
                  maxH={"50px"}
                  color="alternativeColorText"
                  bgColor="bgAlternative"
                  sx={{
                    _selected: {
                      bgColor: "mainColorText",
                      color: "secondaryColorText",
                      opacity: ".8",
                    },
                  }}
                >
                  {item.tab}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {falities.map((item, index) => (
                <TabPanel
                  key={index}
                  padding="0"
                  display="flex"
                  alignItems="flex-end"
                  height="700px"
                >
                  <Box
                    bgImage={`url(${item.url})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    position="absolute"
                    inset="0"
                    zIndex="-1"
                    bgColor="bgPrimary"
                    opacity="0.5"
                  />
                  <Box bgColor="bgPrimary" p="32px" maxW="600px" opacity="0.8">
                    <Heading
                      {...TEXT_PROPS.heading}
                      color="mainColorText"
                      mb="16px"
                    >
                      {item.title}
                    </Heading>
                    <Box {...TEXT_PROPS.body} color="mainColorText">
                      {item.description}
                    </Box>

                    <Box mt="16px" textAlign="right">
                      <Button {...BUTTON_PROPS.buttonPrimary}>Read More</Button>
                    </Box>
                  </Box>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </PageContainer>
    </Box>
  );
}

export default FacilitySection;
