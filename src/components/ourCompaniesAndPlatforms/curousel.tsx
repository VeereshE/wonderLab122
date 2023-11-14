"use client";

import {
  IconButton,
  Stack,
  Typography,
  Box,
  Divider,
  Stepper,
  Step,
} from "@mui/material";
import React, { useState } from "react";

import { Caption, H3, H5, H5_1, Subtitle1 } from "@/theme/fonts";
import MLink from "@/commonComponents/m-link";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ReactiveBreadcrumb from "@/commonComponents/breadCrumb";

import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import { linkColor, workingBlack, workingWhite } from "@/theme/palette";
import { StaticImageData } from "next/image";
import AdjustIcon from "@mui/icons-material/Adjust";
import {
  MotionLink,
  MotionStack,
  MotionTypography,
} from "@/commonComponents/motion-components";
import { staggerChildren, staggerDiv } from "@/commonComponents/animation";
import CarouselButton from "@/commonComponents/carousel-button";

const Carousel = () => {
  const [currentSlide, setCurrentSlideNum] = useState(0);

  const changeToNext = () => {
    if (currentSlide < demos.length - 1) {
      setCurrentSlideNum(currentSlide + 1);
    }
  };
  const changeToPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlideNum(currentSlide - 1);
    }
  };

  return (
    <Box padding={"40px"}>
      <ReactiveBreadcrumb />
      <MotionStack
        direction={{ xs: "column", md: "row" }}
        minHeight={"70vh"}
        alignItems={"center"}
        variants={staggerDiv}
        initial="initial"
        whileInView={"animate"}
      >
        <Stack direction={"row"} flexGrow={1}>
          <MotionStack
            padding={4}
            gap={{ xs: 2, md: 10 }}
            sx={{
              background: workingBlack,
              height: "300px",
              width: "70%",
              justifyContent: "flex-end",
              alignItems: "center",
              borderRadius: "0 200px 200px 0",
            }}
            marginLeft={"-60px"}
            mt={3}
            direction={{ xs: "row" }}
            flexGrow={{ xs: 1, md: 0 }}
            variants={staggerDiv}
          >
            <MotionTypography
              sx={{
                color: workingWhite,
                fontSize: H5,
              }}
              variants={staggerChildren}
            >
              {demos[currentSlide].companylog}
            </MotionTypography>
            <Divider
              orientation="vertical"
              sx={{
                borderLeft: `2px solid ${workingWhite}`,
                height: "100%",
              }}
            />
            <Stack fontSize={Caption} maxWidth={"35%"}>
              <MotionTypography color={linkColor} variants={staggerChildren}>
                {demos[currentSlide].descriptions}
              </MotionTypography>
              <MotionLink
                variant={"text"}
                disableRipple
                sx={{
                  fontWeight: "100",
                  textDecoration: "underline",
                  fontStyle: "italic",
                  color: linkColor,
                  alignSelf: "flex-start",
                }}
                href={"#"}
                variants={staggerChildren}
              >
                Go to Website <CallMadeIcon />
              </MotionLink>
            </Stack>
          </MotionStack>
        </Stack>

        <CarouselButton
          arrayLength={demos.length}
          changeToNext={changeToNext}
          changeToPrev={changeToPrev}
          currentSlide={currentSlide}
        />
      </MotionStack>
      <MotionStack
        direction={{ xs: "column", lg: "row" }}
        gap={"30px"}
        mt={5}
        variants={staggerDiv}
        initial="initial"
        whileInView={"animate"}
      >
        <MotionTypography
          color={workingBlack}
          fontSize={H3}
          maxWidth={{ lg: "30%" }}
          variants={staggerChildren}
        >
          OUR COMPANIES & PLATFORMS
        </MotionTypography>
        <MotionStack
          direction={"row"}
          alignItems={"center"}
          flexGrow={1}
          sx={{ overflow: "hidden" }}
          variants={staggerChildren}
        >
          <Divider
            sx={{
              borderTop: "2px solid #000",
              minWidth: "80px",
              flexGrow: 1,
            }}
          />
          {demos.map((each, index) => (
            <React.Fragment key={index}>
              <Stack
                sx={{ opacity: currentSlide === index ? 1 : 0.5 }}
                key={index}
              >
                <Typography
                  position={"absolute"}
                  mt={{ xs: -3 }}
                  ml={2}
                  maxWidth={{ xs: "80px", md: "120px" }}
                  fontWeight={600}
                  fontSize={{ xs: "10px", md: "14px" }}
                >
                  {each.companylog}
                </Typography>
                <AdjustIcon />
              </Stack>
              <Divider
                sx={{
                  borderTop: "2px solid #000",
                  minWidth: "80px",
                  flexGrow: 1,
                }}
              />
            </React.Fragment>
          ))}
          <Divider
            sx={{
              borderTop: "2px solid #000",
              minWidth: "80px",
              flexGrow: 1,
              alignSelf: "center",
            }}
          />
        </MotionStack>
      </MotionStack>
    </Box>
  );
};

export default Carousel;

interface slideProps {
  companylog: string;
  descriptions: string;
  link: string;
}

const demos: slideProps[] = [
  {
    companylog: "Wup",
    descriptions:
      "What’s Your Problem (WYP), India’s hottest and most-awarded independent creative agency",
    link: "#",
  },
  {
    companylog: "Oppertune",
    descriptions:
      "A data-driven influencer marketing platform that uses its proprietary technology and creator network to drive influencer marketing with speed and accuracy",
    link: "#",
  },
  {
    companylog: "Wisser",
    descriptions:
      "Bespoke solutions that combine human insights and platform-first strategy to create engaging digital experiences throughout the customer journey, cultivating loyalty and driving outcomes.",
    link: "#",
  },
  {
    companylog: "neon",
    descriptions:
      "Bespoke solutions that combine human insights and platform-first strategy to create engaging digital experiences throughout the customer journey, cultivating loyalty and driving outcomes.",
    link: "#",
  },
];
