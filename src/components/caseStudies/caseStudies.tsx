"use client";

import {
  IconButton,
  Stack,
  Typography,
  Box,
  Stepper,
  Step,
  Divider,
} from "@mui/material";
import React, { useState } from "react";

import { Caption, H3, H6_4 } from "@/theme/fonts";
import MLink from "@/commonComponents/m-link";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ReactiveBreadcrumb from "@/commonComponents/breadCrumb";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import { linkColor, workingBlack, workingWhite } from "@/theme/palette";
import AdjustIcon from "@mui/icons-material/Adjust";

const Carousel = () => {
  const [currentSlide, setCurrentSlideNum] = useState(0);
  return (
    <Box padding={"40px"} gap={4}>
      <ReactiveBreadcrumb />
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        minHeight={"70vh"}
        alignItems={"center"}
        gap={4}
        mt={3}
      >
        <Stack
          justifyContent={"center"}
          gap={4}
          alignItems={"center"}
          flexGrow={1}
        >
          <Typography fontSize={H6_4} fontWeight={600}>
            {currentSlide + 1} / {demos.length}
          </Typography>
          <Stack gap={3} direction={"row"} alignItems={"center"}>
            <IconButton
              onClick={() => {
                if (currentSlide > 0) {
                  setCurrentSlideNum(currentSlide - 1);
                }
              }}
              disabled={currentSlide === 0}
              sx={{
                border: `2px solid ${workingBlack}`,
                opacity: currentSlide === 0 ? 0.5 : 1,
              }}
            >
              <WestIcon sx={{ color: workingBlack }} />
            </IconButton>
            <Stack
              style={{
                borderRadius: "50%",
                border: `3px solid ${workingBlack}`,
                padding: "30px",
                minHeight: "200px",
                width: "200px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            ></Stack>
            <IconButton
              onClick={() => {
                if (currentSlide < demos.length - 1) {
                  setCurrentSlideNum(currentSlide + 1);
                }
              }}
              disabled={currentSlide === demos.length - 1}
              sx={{
                border: `2px solid ${workingBlack}`,
                opacity: currentSlide === demos.length - 1 ? 0.5 : 1,
              }}
            >
              <EastIcon sx={{ color: workingBlack }} />
            </IconButton>
          </Stack>
        </Stack>

        <Stack fontSize={Caption} maxWidth={{ sm: "35%" }}>
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
        </Stack>
      </Stack>
      <Stack direction={{ xs: "column", lg: "row" }} gap={3}>
        <Typography color={workingBlack} fontSize={H3}>
          OUR CAPABILITIES
        </Typography>

        <Stepper
          activeStep={currentSlide}
          sx={{ flexGrow: 1, alignItems: "center" }}
          nonLinear
        >
          {demos.map((each, index) => (
            <Step key={index}>
              <Stack
                sx={{
                  opacity: index === currentSlide ? 1 : 0.5,
                }}
              >
                <Typography color={workingBlack} fontWeight={700}>
                  {each.slideName}
                </Typography>
                <AdjustIcon />
              </Stack>
            </Step>
          ))}
        </Stepper>

        {/* <Stack direction={"row"} alignItems={"center"} flexGrow={1}>
          <Divider
            sx={{
              borderTop: "2px solid #000",
              minWidth: "80px",
              flexGrow: 1,
            }}
          />
          {demos.map((each, index) => (
            <>
              <Stack>
                <AdjustIcon />
              </Stack>
              <Divider
                sx={{
                  borderTop: "2px solid #000",
                  minWidth: "80px",
                  flexGrow: 1,
                }}
              />
            </>
          ))}
          <Divider
            sx={{
              borderTop: "2px solid #000",
              minWidth: "80px",
              flexGrow: 1,
            }}
          />
        </Stack> */}
      </Stack>
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
