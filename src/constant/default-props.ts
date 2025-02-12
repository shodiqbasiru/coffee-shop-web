export const FONT_FAMILY = {
  heading: `"Old Standard TT", serif`,
  subHeading: `"Poppins", sans-serif`,
  body: `"Merriweather", serif`,
};

export const TEXT_PROPS = {
  heading: {
    fontFamily: "heading",
    fontSize: "heading",
    fontWeight: "heading",
    fontStyle: "var(--fontItalic-heading)",
  },
  subHeading: {
    fontFamily: "subHeading",
    fontSize: "subHeading",
    fontWeight: "subHeading",
    fontStyle: "var(--fontItalic-subHeading)",
  },
  body: {
    fontFamily: "body",
    fontSize: "body",
    fontWeight: "body",
    fontStyle: "var(--fontItalic-body)",
  },
};

export const BUTTON_PROPS = {
  buttonPrimary: {
    backgroundColor: "bgSecondary",
    color: "mainColorText",
    padding: "8px 24px",
    borderRadius: "24px",
    _hover: { opacity: "0.8" },
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    color: "mainColorText",
    padding: "8px 24px",
    borderRadius: "24px",
    border: "1px solid var(--chakra-colors-mainColorText)",
    _hover: { bg: "mainColorText", color: "secondaryColorText" },
  },
};
