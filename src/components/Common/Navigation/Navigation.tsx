import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BUTTON_PROPS, TEXT_PROPS } from "@/constant/default-props";
import { HamburgerIcon } from "@chakra-ui/icons";

function NavigationComponent(): React.ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = (
    <Box
      as="ul"
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      gap="2.5rem"
      listStyleType="none"
    >
      <Box {...TEXT_PROPS.body} as="li" fontSize="20px">
        Home
      </Box>
      <Box {...TEXT_PROPS.body} as="li" fontSize="20px">
        Menu
      </Box>
      <Box {...TEXT_PROPS.body} as="li" fontSize="20px">
        About
      </Box>
      <Box {...TEXT_PROPS.body} as="li" fontSize="20px">
        Facilities
      </Box>
    </Box>
  );

  const signInButton = <Button {...BUTTON_PROPS.buttonPrimary}>Sign In</Button>;

  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      p="16px 0"
      bg="transparent"
      color="mainColorText"
    >
      <Heading {...TEXT_PROPS.heading}>CoffeeShop</Heading>
      <Box display={{ base: "none", md: "flex" }}>{navLinks}</Box>
      <Box display={{ base: "none", md: "block" }}>{signInButton}</Box>
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        display={{ base: "flex", md: "none" }}
        borderRadius="0"
        onClick={onOpen}
      />

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">CoffeeShop</DrawerHeader>
          <DrawerBody>
            {navLinks}
            <Box mt="1rem">{signInButton}</Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default NavigationComponent;
