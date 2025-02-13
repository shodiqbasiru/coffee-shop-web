import { TEXT_PROPS } from "@/constant/default-props";
import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

function KnowledgeSection(): React.ReactElement {
  const items = [
    {
      url: "https://kopipetani.com/wp-content/uploads/2020/10/Java-1-678x381.jpg",
      title: "Arabica",
      description:
        'Arabica is a species of Coffea originally indigenous to the mountains of Yemen in the Arabian Peninsula, hence its name, and also from the southwestern highlands of Ethiopia and southeastern Sudan. It is also known as the "coffee shrub of Arabia", "mountain coffee" or "arabica coffee". Coffea arabica is believed to be the first species of coffee to be cultivated, and is by far the dominant cultivar, representing some 60% of global production.',
      isReverse: false,
    },
    {
      url: "https://media.barchart.com/contributors-admin/common-images/images/Soft%20Commodities/Coffee/shutterstock_1728806332.jpg",
      title: "Robusta",
      description:
        "Coffea canephora, commonly known as robusta coffee, is a species of coffee that has its origins in central and western sub-Saharan Africa. It is a species of flowering plant in the Rubiaceae family. Though widely known as Coffea robusta, the plant is scientifically identified as Coffea canephora, which has two main varieties, robusta and nganda.",
      position: "right",
      isReverse: true,
    },
  ];

  return (
    <Box py="16">
      {/* <Heading
        {...TEXT_PROPS.heading}
        color="secondaryColorText"
        fontSize={{ base: "heading", md: "88px" }}
        textAlign="center"
      >
        Arabica vs Robusta
      </Heading> */}

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="16"
        mt="16"
        w={{ base: "100%", md: "80%" }}
        mx="auto"
      >
        {items.map((item, index) => (
          <Box
            key={index}
            display="flex"
            w="100%"
            justifyContent="center"
            alignItems="center"
            flexDir={{
              base: "column",
              md: item.isReverse ? "row-reverse" : "row",
            }}
            gap={{ base: "16px", md: "64px" }}
          >
            <Box w={{ base: "100%", md: "50%" }}>
              <Box
                w={{ base: "300px", md: "500px" }}
                h={{ base: "300px", md: "500px" }}
                borderRadius="50%"
                overflow="hidden"
                margin={{
                  base: "0 auto",
                  md: item.isReverse ? "0 auto 0 0" : "0 0 0 auto",
                }}
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "0.3s ease-in",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>

            <Box
              w={{ base: "100%", md: "50%" }}
              padding={{ base: "0 16px", md: "0" }}
            >
              <Heading
                {...TEXT_PROPS.heading}
                color="secondaryColorText"
                textAlign={{
                  base: "left",
                  md: item.isReverse ? "right" : "left",
                }}
                fontSize={{ base: "heading", md: "58px" }}
                mb={{ base: "16px", md: "0" }}
              >
                {item.title}
              </Heading>
              <Box>
                <Heading
                  {...TEXT_PROPS.body}
                  color="secondaryColorText"
                  fontSize="20px"
                  textAlign={{
                    base: "left",
                    md: item.isReverse ? "right" : "left",
                  }}
                >
                  {item.description}
                </Heading>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default KnowledgeSection;
