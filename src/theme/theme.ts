import { extendTheme } from "@chakra-ui/react";
import { BG_COLOR, TEXT_COLOR } from "@/constant/colors";
import { FONT_FAMILY } from "@/constant/default-props";

const theme = {
  fonts: {
    heading: FONT_FAMILY.heading,
    body: FONT_FAMILY.body,
  },
  fontSizes: {
    heading: "36px",
    body: "16px",
  },
  fontWeights: {
    heading: 700,
    body: 400,
  },
  styles: {
    global: {
      ":root": {
        "--fontItalic-heading": "",
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
