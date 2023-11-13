"use client";
import {
  Accordion,
  AccordionProps,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Card,
  CardProps,
  Grid2Props,
  Stack,
  StackProps,
  SvgIcon,
  Typography,
  TypographyProps,
} from "@mui/material";
import { motion, MotionProps } from "framer-motion";
import MLink, { MLinkProps } from "./m-link";
import { ComponentProps } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// import { MaterialImage, MaterialImageProps } from "@cc/material-components";
import { SvgIconProps } from "@mui/material/SvgIcon";
// import BorderedIconButton, {
//   BorderedIconButtonProps,
// } from "@cc/bordered-icon-button";

export const MotionTypography = motion<TypographyProps>(Typography);
export const MotionLink = motion<MLinkProps>(MLink);
export const MotionBox = motion<BoxProps>(Box);
export const MotionCard = motion<CardProps>(Card);
export const MotionGrid = motion<Grid2Props>(Grid2);
export const MotionStack = motion<StackProps>(Stack);
export const MotionSvg = motion.svg;
export const MotionSvgIcon = motion<SvgIconProps>(SvgIcon);
export const MotionButton = motion<ButtonProps>(Button);
export const MotionAccordion = motion<AccordionProps>(Accordion);

// export type MotionImageProps = ComponentProps<typeof MotionImage>;
export type MotionTypographyProps = ComponentProps<typeof MotionTypography>;
export type MotionLinkProps = ComponentProps<typeof MotionLink>;
export type MotionBoxProps = ComponentProps<typeof MotionBox>;
export type MotionVariantProps = MotionProps["variants"];
export type MotionCardProps = ComponentProps<typeof MotionCard>;
export type MotionGridProps = ComponentProps<typeof MotionGrid>;
export type MotionStackProps = ComponentProps<typeof MotionStack>;
export type MotionSvgProps = ComponentProps<typeof MotionSvg>;
export type MotionSvgIconProps = ComponentProps<typeof MotionSvgIcon>;
export type MotionButtonProps = ComponentProps<typeof MotionButton>;
export type MotionAccordionProps = ComponentProps<typeof MotionAccordion>;
// export type MotionBorderedIconButtonProps = ComponentProps<
//   typeof MotionBorderedIconButton
// >;
