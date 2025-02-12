import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

import { TEXT_PROPS } from "@/constant/default-props";
import beanCoffee from "@/assets/icons/bean.svg";
import CardCoffee from "@/components/Common/Card/CardCoffee";

function BestCoffeeSection(): React.ReactElement {
  const bestCoffeeItem = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cappuccino Coffee",
      description:
        "Cappuccino is a coffee drink that today is composed of double espresso and hot milk, with the surface topped with foamed milk.",
      price: "$4.99",
      objPosition: "center",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1575883446992-61cb2d7d301c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZmZlZSUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Coffee Latte",
      description:
        "Caffe latte is a coffee drink made with espresso and steamed milk. The word comes from the Italian caffè e latte, caffelatte or caffellatte, which means 'coffee & milk'.",
      price: "$3.99",
      objPosition: "bottom",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1505156520151-3ba2f845e717?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Americano Coffee with Milk",
      description:
        "Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.",
      price: "$2.99",
      objPosition: "bottom",
    },
  ];

  return (
    <Box textAlign="center" py="16" position="relative" minH="100vh">
      <Image
        src={beanCoffee}
        alt="bean-coffee"
        position="absolute"
        top="0"
        right="0"
        opacity="0.1"
        transform="translate(30%, -30%)"
        width="900px"
        zIndex="1"
      />

      <Image
        src={beanCoffee}
        alt="bean-coffee"
        position="absolute"
        bottom="0"
        left="0"
        opacity="0.1"
        transform={{
          base: "translate(-30%, 30%)",
          md: "translate(-30%, 40%)",
        }}
        width="900px"
        zIndex="1"
      />
      <Box position="relative" zIndex="2">
        <Heading
          {...TEXT_PROPS.heading}
          color="mainColorText"
          fontSize={{ base: "heading", md: "48px" }}
          mb="24px"
        >
          Our Best Coffee
        </Heading>

        <Box
          display="flex"
          gap="16px"
          flexWrap="wrap"
          justifyContent="center"
          p="16px"
        >
          {bestCoffeeItem.map((item, index) => (
            <CardCoffee key={index} {...item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default BestCoffeeSection;
