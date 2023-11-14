"use client";
import { Stack, Typography } from "@mui/material";
import logo from "./commomImages/logo-out-lined.jpg";
import Image from "next/image";

import CallMadeIcon from "@mui/icons-material/CallMade";
import { H6_4, Subtitle1 } from "@/theme/fonts";
import MLink from "@/commonComponents/m-link";

import ReactiveBreadcrumb from "@/commonComponents/breadCrumb";
import { linkColor, workingBlack, workingWhite } from "@/theme/palette";
import {
  MotionLink,
  MotionLinkProps,
  MotionStack,
  MotionStackProps,
  MotionTypography,
  MotionTypographyProps,
  MotionVariantProps,
} from "@/commonComponents/motion-components";

const HomePage = () => {
  return (
    <MotionStack
      sx={{
        background: workingBlack,
        alignItems: "center",
        justifyContent: "center",
        minHeight: "85vh",
        padding: {
          xs: "24px",
          md: "52px",
        },
      }}
      direction={{
        xs: "column",
        md: "row",
      }}
      variants={staggerDiv}
      initial="initial"
      whileInView={"animate"}
    >
      <MotionStack
        maxWidth={{
          xs: "90%",
          md: "50%",
        }}
        gap={"20px"}
        alignSelf={"flex-end"}
        alignContent={"center"}
        order={{
          xs: 1,
          md: 0,
        }}
      >
        <MotionTypography
          color={workingWhite}
          sx={{
            fontSize: H6_4,
            fontWeight: 700,
            maxWidth: {
              md: "60%",
            },
          }}
          variants={staggerChildren}
        >
          THE PLATFORM-FIRST DIGITAL NETWORK
        </MotionTypography>
        <MotionTypography
          color={workingWhite}
          sx={{
            fontSize: Subtitle1,
            maxWidth: "60%",
          }}
          variants={staggerChildren}
        >
          Bridging the gap between marketing and digital business
          transformation.
        </MotionTypography>

        <MotionLink
          variant={"text"}
          disableRipple
          sx={{
            fontSize: Subtitle1,
            fontWeight: "100",
            textDecoration: "underline",
            fontStyle: "italic",
            color: linkColor,
            alignSelf: "flex-start",
          }}
          href={"#"}
          variants={staggerChildren}
        >
          Read More <CallMadeIcon />
        </MotionLink>
      </MotionStack>
      <Image
        src={logo}
        width={0}
        height={0}
        alt="logo"
        style={{
          background: workingWhite,
          width: "80%",
          maxWidth: "540px",
          minHeight: "180px",
          maxHeight: "380px",
        }}
      />
    </MotionStack>
  );
};

export default HomePage;

const staggerChildren: MotionVariantProps = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1.3, // Prev value - 1
    },
  },
};
