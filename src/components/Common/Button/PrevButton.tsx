import { BUTTON_PROPS } from "@/constant/default-props";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import SwiperInstance from "swiper";

export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>;
}

const PrevButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <IconButton
      {...BUTTON_PROPS.buttonSecondary}
      aria-label="Previous"
      height="68px"
      width="68px"
      onClick={() => swiperRef.current?.slidePrev()}
      rounded="full"
      icon={<ChevronLeftIcon fontSize="32px" />}
    />
  );
};

export default PrevButton;
