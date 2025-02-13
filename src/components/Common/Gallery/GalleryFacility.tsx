import React from "react";
import { Box, Image } from "@chakra-ui/react";

import F1 from "@/images/falility/1.jpg";
import F2 from "@/images/falility/2.jpg";
import F3 from "@/images/falility/3.jpg";
import F4 from "@/images/falility/4.jpg";
import F5 from "@/images/falility/5.jpg";
import F6 from "@/images/falility/6.jpg";
// import F7 from "@/images/falility/7.jpg";
// import F8 from "@/images/falility/8.jpg";

export interface GalleryFacilityProps {
  //   url: string;
  title: string;
  description: string;
  type: string;
}

const GalleryFacility = (item: GalleryFacilityProps): React.ReactElement => {
  const type1 = (
    <Box display="flex" height="400px">
      <Box w="30%" overflow="hidden">
        <Image
          src={F1}
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
      <Box w="40%" overflow="hidden">
        <Image
          src={F2}
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
      <Box w="30%" overflow="hidden">
        <Image
          src={F3}
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
  );

  const type2 = (
    <Box display="flex" height="400px">
      <Box w="50%" overflow="hidden">
        <Image
          src={F4}
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
      <Box w="30%" overflow="hidden">
        <Image
          src={F5}
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
      <Box w="20%" overflow="hidden">
        <Image
          src={F6}
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
  );

  let content;
  switch (item.type) {
    case "type1":
      content = type1;
      break;
    case "type2":
      content = type2;
      break;
    default:
      content = <Box>No content available</Box>;
  }

  return <Box>{content}</Box>;
};

export default GalleryFacility;
