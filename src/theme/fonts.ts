import { Breakpoint } from "@mui/material";

export const fontVariants = [
  "H1",
  "H2",
  "H3",
  "H3_1",
  "H3_2",
  "H4",
  "H5",
  "H5_1",
  "H6",
  "H6_1",
  "H6_2",
  "H6_3",
  "H6_4",
  "Body1",
  "Body2",
  "Subtitle1",
  "Subtitle2",
  "Caption",
  "Overline",
  "Button",
] as const;

export type FontVariant = (typeof fontVariants)[number];

export type FontSize = {
  [key in FontVariant]?: {
    [key in Breakpoint]?: string | number;
  };
};

export const fontSize: FontSize = {
  H1: { xs: "32px", md: "48px", xl: "64px" },
  H2: { xs: "28px", md: "42px", xl: "56px" },
  H3: { xs: "32px", md: "40px", xl: "48px" },
  H3_1: { xs: "28px", md: "38px", xl: "48px" },
  H3_2: { xs: "24px", md: "36px", xl: "48px" },
  H4: { xs: "32px", md: "36px", xl: "40px" },
  H5: { xs: "32px", md: "32px", xl: "32px" },
  H5_1: { xs: "24px", md: "28px", xl: "32px" },
  H6: { xs: "24px", md: "24px", xl: "24px" },
  H6_1: { xs: "20px", md: "22px", xl: "24px" },
  H6_2: { xs: "18px", md: "22px", xl: "24px" },
  H6_3: { xs: "16px", md: "20px", xl: "24px" },
  H6_4: { xs: "14px", md: "20x", xl: "24px" },
  Body1: { xs: "16px", md: "18px", xl: "18px" },
  Body2: { xs: "14px", md: "16px", xl: "16px" },
  Subtitle1: { xs: "14px", md: "16px", xl: "18px" },
  Subtitle2: { xs: "16px", md: "16px", xl: "16px" },
  Caption: { xs: "14px", md: "14px", xl: "14px" },
  Overline: { xs: "14px", md: "18px", xl: "20px" },
  Button: { xs: "16px", md: "18px", xl: "18px" },
} as const;

export const {
  H1,
  H2,
  H3,
  H3_1,
  H3_2,
  H4,
  H5,
  H5_1,
  H6,
  H6_1,
  H6_2,
  H6_3,
  H6_4,
  Body1,
  Body2,
  Subtitle1,
  Subtitle2,
  Caption,
  Overline,
  Button,
} = fontSize;
