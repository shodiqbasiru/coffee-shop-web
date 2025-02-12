import React from "react";
import { Box, Heading } from "@chakra-ui/react";

function NavigationComponent(): React.ReactElement {
  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      p="16px"
      bg="transparent"
      boxShadow="md"
      border="1px solid #fefefe"
      color="#fefefe"
    >
      <Heading as="h1" fontSize="28px" fontWeight="700">
        CoffeeShop
      </Heading>
      <Box as="ul" display="flex" gap="2.5rem" listStyleType="none">
        <Box as="li" fontSize="18px" fontWeight="200">
          Home
        </Box>
        <Box as="li" fontSize="18px" fontWeight="200">
          Menu
        </Box>
        <Box as="li" fontSize="18px" fontWeight="200">
          About
        </Box>
        <Box as="li" fontSize="18px" fontWeight="200">
          Facilities
        </Box>
      </Box>
      <Box>
        <Box as="button" bg="#fefefe" color="#000" padding="8px 16px" borderRadius="8px">
          Sign In
        </Box>
      </Box>
    </Box>
  );
}

export default NavigationComponent;
