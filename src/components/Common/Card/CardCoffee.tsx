import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { BUTTON_PROPS, TEXT_PROPS } from "@/constant/default-props";

export interface CoffeeCardProps {
  imgUrl: string;
  title: string;
  description: string;
  price: string;
  objPosition?: string;
}

function CardCoffee(item: CoffeeCardProps): React.ReactElement {
  return (
    <Card maxW="400px" w="100%" overflow="hidden" borderRadius="24px">
      <CardHeader padding="0" overflow="hidden" h="300px">
        <Image
          src={item?.imgUrl}
          alt={item?.title}
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition={item?.objPosition}
          _hover={{
            transform: "scale(1.05)",
            transition: "0.3s ease-in",
            cursor: "pointer",
          }}
        />
      </CardHeader>
      <CardBody>
        <Heading
          {...TEXT_PROPS.subHeading}
          color="secondaryColorText"
          fontSize="24px"
          mt="4"
        >
          {item?.title}
        </Heading>
        <Text {...TEXT_PROPS.body} color="secondaryColorText" mt="4">
          {item?.description}
        </Text>
      </CardBody>
      <CardFooter>
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          w="100%"
        >
          <Text
            {...TEXT_PROPS.body}
            fontWeight="bold"
            fontSize="20px"
            color="secondaryColorText"
          >
            {item?.price}
          </Text>

          <Button {...BUTTON_PROPS.buttonPrimary}>Order Now</Button>
        </Box>
      </CardFooter>
    </Card>
  );
}

CardCoffee.defaultProps = {
  objPosition: "center",
};

export default CardCoffee;
