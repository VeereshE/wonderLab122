"use client";

import { Stack, Typography, Box, Divider } from "@mui/material";
import React, { useState } from "react";

import { Caption, H3, H5_1 } from "@/theme/fonts";
import MLink from "@/commonComponents/m-link";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ReactiveBreadcrumb from "@/commonComponents/breadCrumb";

import { linkColor, workingBlack, workingWhite } from "@/theme/palette";
import AdjustIcon from "@mui/icons-material/Adjust";
import CarouselButton from "@/commonComponents/carousel-button";
import {
  MotionStack,
  MotionTypography,
} from "@/commonComponents/motion-components";
import {
  TopToBottomtextTransition,
  bottomToToptextTransition,
  staggerDiv,
  textStaggerChildren,
} from "@/commonComponents/animation";

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
    <Box padding={"40px"} gap={4}>
      <ReactiveBreadcrumb />
      <MotionStack
        direction={{ xs: "column-reverse", md: "row" }}
        minHeight={"70vh"}
        alignItems={"center"}
        gap={4}
        mt={3}
        variants={staggerDiv}
        initial="initial"
        whileInView={"animate"}
      >
        <CarouselButton
          arrayLength={demos.length}
          changeToNext={changeToNext}
          changeToPrev={changeToPrev}
          currentSlide={currentSlide}
        />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          flexGrow={1}
          gap={4}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Stack
            style={{
              borderRadius: "50%",
              background: workingBlack,
              padding: "30px",
              minHeight: "330px",
              width: "330px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MotionTypography
              variants={textStaggerChildren}
              sx={{
                color: workingWhite,
                fontSize: H5_1,
              }}
            >
              {demos[currentSlide].slideName}
            </MotionTypography>
          </Stack>
          <MotionStack
            fontSize={Caption}
            maxWidth={{ sm: "35%" }}
            variants={textStaggerChildren}
          >
            <Typography color={"inherit"} fontWeight={"600"}>
              {demos[currentSlide].subheading}
            </Typography>
            <Typography>{demos[currentSlide].descriptions}</Typography>
            {demos[currentSlide].outcomes.map((eachOutCome, index) => (
              <Typography key={index}>- {eachOutCome}</Typography>
            ))}
            <MLink
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
            >
              Read More <CallMadeIcon />
            </MLink>
          </MotionStack>
        </Stack>
      </MotionStack>
      <MotionStack
        direction={{ xs: "column", lg: "row" }}
        gap={3}
        mt={6}
        alignItems={"center"}
        variants={staggerDiv}
        initial={"initial"}
        whileInView={"animate"}
      >
        <MotionTypography
          color={workingBlack}
          fontSize={H3}
          mb={{ xs: 4, md: 0 }}
          variants={TopToBottomtextTransition}
        >
          OUR CAPABILITIES
        </MotionTypography>

        <MotionStack
          direction={"row"}
          alignItems={"center"}
          flexGrow={1}
          variants={bottomToToptextTransition}
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
              <Stack sx={{ opacity: currentSlide === index ? 1 : 0.5 }}>
                <Typography
                  position={"absolute"}
                  mt={{ xs: -6, md: -10 }}
                  ml={2}
                  maxWidth={{ xs: "80px", md: "120px" }}
                  fontWeight={600}
                  fontSize={{ xs: "10px", md: "14px" }}
                >
                  {each.slideName}
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
  slideName: string;
  subheading: string;
  descriptions: string;
  outcomes: string[];
}
const demos: slideProps[] = [
  {
    slideName: "Digital Video Content & Community",
    subheading: "Full-Funnel Content Solutions",
    descriptions:
      "Bespoke solutions that combine human insights and platform-first strategy to create engaging digital experiences throughout the customer journey, cultivating loyalty and driving outcomes.",
    outcomes: [
      "Brand & Platform Strategy",
      "Creative & Experience Design",
      "Digital Content Production & Marketing Service",
    ],
  },
  {
    slideName: "Digital Data & Media",
    subheading: "AI driven Platform-First Digital Media Marketing",
    descriptions:
      "AI, machine learning, and automation power our platform-first media solutions delivering personalized digital marketing programs across geographies, communities and culture",
    outcomes: [
      "Programmatic Marketing",
      "AI/ML and Visualization",
      "Platform Expertise & Media Planning",
      " Dynamic Creative Optimization",
    ],
  },
  {
    slideName: "Digital Video Content & Community",
    subheading: "Full-Funnel Content Solutions",
    descriptions:
      "Bespoke solutions that combine human insights and platform-first strategy to create engaging digital experiences throughout the customer journey, cultivating loyalty and driving outcomes.",
    outcomes: [
      "Brand & Platform Strategy",
      "Creative & Experience Design",
      "Digital Content Production & Marketing Service",
    ],
  },
];
