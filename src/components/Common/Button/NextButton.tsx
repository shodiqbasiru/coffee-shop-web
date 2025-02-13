import { BUTTON_PROPS } from "@/constant/default-props";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import SwiperInstance from "swiper";

export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>;
}

const NextButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <IconButton
      {...BUTTON_PROPS.buttonSecondary}
      aria-label="Next"
      height="68px"
      width="68px"
      onClick={() => swiperRef.current?.slideNext()}
      rounded="full"
      icon={<ChevronRightIcon fontSize="32px" />}
    />
  );
};

export default NextButton;
