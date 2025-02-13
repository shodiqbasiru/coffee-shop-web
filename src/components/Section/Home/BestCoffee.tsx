import React, { useRef } from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { BUTTON_PROPS, TEXT_PROPS } from "@/constant/default-props";
import beanCoffee from "@/assets/icons/bean.svg";
import beans from "@/assets/icons/beans.png";
import CardCoffee from "@/components/Common/Card/CardCoffee";
import NextButton from "@/components/Common/Button/NextButton";
import PrevButton from "@/components/Common/Button/PrevButton";

function BestCoffeeSection(): React.ReactElement {
  const swiperRef = useRef<SwiperType | null>(null);

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
    <Box
      textAlign="center"
      pt="32px"
      pb={{ base: "0", md: "32px" }}
      position="relative"
    >
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
          color="secondaryColorText"
          fontSize={{ base: "heading", md: "58px" }}
        >
          Our Best Coffee
        </Heading>

        <Text
          {...TEXT_PROPS.body}
          color="secondaryColorText"
          mb="24px"
          opacity="0.8"
          w={{ base: "100%", md: "50%" }}
          mx="auto"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quas quis eaque excepturi maxime architecto assumenda laboriosam
          officia voluptatem aut, facere dolorem provident adipisci dolor!
        </Text>

        <Box
          display="flex"
          justifyContent="space-between"
          pt="16px"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box w={{ base: "100%", md: "calc(50% - 24px)" }} px="16px">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
              }}
              loop={true}
              onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {bestCoffeeItem.map((item, index) => (
                <SwiperSlide style={{ height: "auto" }}>
                  <CardCoffee key={index} {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <Box display="flex" gap="16px" justifyContent="center" mt="32px">
              <PrevButton swiperRef={swiperRef} />
              <NextButton swiperRef={swiperRef} />
            </Box>
          </Box>
          {/* <Box flex="1" display="flex" gap="16px" flexWrap="wrap">
            {bestCoffeeItem.map((item, index) => (
              <CardCoffee key={index} {...item} />
            ))}
          </Box> */}
          <Box
            textAlign="center"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDir={{ base: "column-reverse", md: "row" }}
          >
            <Box
              width={{ base: "100%", md: "50%" }}
              height="100%"
              mt={{ base: "-8rem", md: "0" }}
            >
              <Image
                width="100%"
                height="100%"
                src={beans}
                alt="beans"
                objectFit="cover"
                objectPosition="left"
                transform={{
                  base: "rotate(270deg)",
                  md: "rotate(0deg)",
                }}
              />
            </Box>

            <Box
              width={{ base: "100%", md: "50%" }}
              p={{ base: "16px", md: "0" }}
              mt={{ base: "16px", md: "0" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Text
                {...TEXT_PROPS.subHeading}
                fontSize={{ base: "24px", md: "subHeading" }}
                fontWeight="bold"
                mb="16px"
                textAlign={{ base: "center", md: "left" }}
              >
                Discover our full range of exquisite coffee blends and find your
                new favorite. From classic brews to unique flavors, we have
                something for every coffee lover.
              </Text>
              <Button {...BUTTON_PROPS.buttonSecondary} alignItems="flex-start">
                View All Coffee
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BestCoffeeSection;
