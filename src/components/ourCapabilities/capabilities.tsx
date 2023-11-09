"use client";

import {
  IconButton,
  Stack,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Divider,
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
          textAlign={"center"}
          sx={{
            color: workingBlack,
          }}
          gap={3}
        >
          <Typography fontSize={Subtitle1} fontWeight={"600"}>
            {currentSlide + 1} / {demos.length}{" "}
          </Typography>
          <Stack gap={3} direction={{ xs: "row", md: "column" }}>
            <IconButton
              onClick={() => {
                if (currentSlide > 0) {
                  setCurrentSlideNum(currentSlide - 1);
                }
              }}
              disabled={currentSlide == 0}
              sx={{
                border: `2px solid ${workingBlack}`,
              }}
            >
              <NorthIcon sx={{ display: { xs: "none", md: "flex" } }} />
              <WestIcon sx={{ display: { xs: "flex", md: "none" } }} />
            </IconButton>
            <IconButton
              onClick={() => {
                if (currentSlide < demos.length - 1) {
                  setCurrentSlideNum(currentSlide + 1);
                }
              }}
              disabled={currentSlide == demos.length - 1}
              sx={{
                border: `2px solid ${workingBlack}`,
              }}
            >
              <SouthIcon sx={{ display: { xs: "none", md: "flex" } }} />
              <EastIcon sx={{ display: { xs: "flex", md: "none" } }} />
            </IconButton>
          </Stack>
        </Stack>
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
            <Typography
              sx={{
                color: workingWhite,
                fontSize: H5_1,
              }}
            >
              {demos[currentSlide].slideName}
            </Typography>
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
            <Step key={index} sx={{ border: "2px solid #000" }}>
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

{
  /* <Swiper
  style={{
    padding: "30px",
  }}
>
  {demos.map((each, index) => (
    <SwiperSlide
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      key={index}
    >
      <Stack>
        <SlideButtons
          disableNext={false}
          disablePrev={false}
          variant={"primary"}
        />
      </Stack>
      <Stack
        style={{
          borderRadius: "50%",
          background: "#000000",
          padding: "30px",
          minHeight: "400px",
          width: "400px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: H5_1,
          }}
        >
          {each.slideName}
        </Typography>
      </Stack>
      <Stack>
        <Typography color={"inherit"} fontSize={Caption} fontWeight={"600"}>
          {each.subheading}
        </Typography>
        {each.outcomes.map((eachOutCome) => (
          <Typography>- {eachOutCome}</Typography>
        ))}
        <MLink
          variant={"text"}
          disableRipple
          sx={{
            fontWeight: "100",
            textDecoration: "underline",
            fontStyle: "italic",
            color: "#bcbcbc",
            alignSelf: "flex-start",
          }}
          href={"#"}
        >
          Read More <CallMadeIcon />
        </MLink>
      </Stack>
    </SwiperSlide>
  ))}
</Swiper>; */
}
