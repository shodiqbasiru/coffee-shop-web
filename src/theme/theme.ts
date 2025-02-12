import { extendTheme } from "@chakra-ui/react";
import { BG_COLOR, TEXT_COLOR } from "@/constant/colors";
import { FONT_FAMILY } from "@/constant/default-props";

const theme = {
  fonts: {
    heading: FONT_FAMILY.heading,
    subHeading: FONT_FAMILY.subHeading,
    body: FONT_FAMILY.body,
  },
  fontSizes: {
    heading: "36px",
    subHeading: "24px",
    body: "16px",
  },
  fontWeights: {
    heading: 700,
    subHeading: 400,
    body: 400,
  },
  styles: {
    global: {
      ":root": {
        "--fontItalic-heading": "",
        "--fontItalic-subHeading": "",
        "--fontItalic-body": "",
      },
    },
  },
  colors: {
    bgPrimary: BG_COLOR.primary,
    bgSecondary: BG_COLOR.secondary,
    mainColorText: TEXT_COLOR.primary,
    secondaryColorText: TEXT_COLOR.secondary,
  },
};

export default extendTheme(theme);
