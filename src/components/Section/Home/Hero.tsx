import React from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

import iconsCoffee from "@/assets/img/coffee.png";
import { TEXT_PROPS } from "@/constant/default-props";

function HeroSection(): React.ReactElement {
  return (
    <Box
      color="mainColorText"
      display="flex"
      position="relative"
      flexDir={{ base: "column-reverse", lg: "row" }}
    >
      <Box
        position="absolute"
        top="16px"
        right="16px"
        zIndex="1"
        transform={{ base: "translateX(15%)", lg: "translateX(35%)" }}
      >
        <Heading
          {...TEXT_PROPS.heading}
          fontSize={{ base: "108px", md: "288px" }}
          mb="4"
          color="#291303"
        >
          CoffeeShop
        </Heading>
        <Heading
          {...TEXT_PROPS.heading}
          fontSize={{ base: "108px", md: "288px" }}
          mb="4"
          color="#291303"
        >
          CoffeeShop
        </Heading>
      </Box>

      <Box
        width={{ base: "100%", lg: "calc(50% - 16px)" }}
        alignSelf="center"
        position="relative"
        zIndex="2"
      >
        <Heading
          {...TEXT_PROPS.heading}
          fontSize={{ base: "58px", md: "88px" }}
          mb="4"
          lineHeight="1.25"
          mt={{ base: "1.5rem", md: "0" }}
        >
          Savor the Art of Perfect Coffee
        </Heading>
        <Text
          {...TEXT_PROPS.body}
          fontSize={{ base: "16px", md: "18px" }}
          fontWeight="light"
          lineHeight="1"
        >
          Immerse yourself in the rich, bold flavors of our handcrafted
          blends—expertly crafted to awaken your senses, delight your palate,
          and elevate your day with every sip. Whether you need a morning boost
          or a soothing escape, our blends offer the perfect balance of taste
          and aroma for any moment.
        </Text>
        <Box mt="4">
          <Button
            bg="mainColorText"
            color="secondaryColorText"
            padding="8px 16px"
            borderRadius="0"
            width={{ base: "100%", md: "auto" }}
            height={{ base: "auto", md: "48px" }}
            mt="4"
            me="4"
          >
            Order Now
          </Button>
          <Button
            bg="transparent"
            color="mainColorText"
            padding="8px 16px"
            borderRadius="0"
            border="1px solid var(--chakra-colors-mainColorText)"
            width={{ base: "100%", md: "auto" }}
            height={{ base: "auto", md: "48px" }}
            mt="4"
            _hover={{ bg: "mainColorText", color: "secondaryColorText" }}
          >
            Explore More
          </Button>
        </Box>
      </Box>
      <Box
        flex="1"
        maxW={{ base: "400px", md: "800px" }}
        mt={{ base: "4rem", md: "0" }}
      >
        <Image
          src={iconsCoffee}
          alt="Coffee"
          width="100%"
          position="relative"
          zIndex="2"
          display="block"
        />
      </Box>
    </Box>
  );
}

export default HeroSection;
