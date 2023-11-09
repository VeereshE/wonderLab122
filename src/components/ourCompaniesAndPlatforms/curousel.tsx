"use client";
import SlideButtons from "@/commonComponents/swiperButton";
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

const Carousel = () => {
  const [currentSlide, setCurrentSlideNum] = useState(0);
  return (
    <Box padding={"40px"}>
      <ReactiveBreadcrumb />
      <Stack
        direction={{ xs: "column", md: "row" }}
        minHeight={"70vh"}
        alignItems={"center"}
      >
        <Stack direction={"row"} flexGrow={1}>
          <Stack
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
            direction={{ xs: "row" }}
            flexGrow={{ xs: 1, md: 0 }}
          >
            <Typography
              sx={{
                color: workingWhite,
                fontSize: H5,
              }}
            >
              {demos[currentSlide].companylog}
            </Typography>
            <Divider
              orientation="vertical"
              sx={{
                borderLeft: `2px solid ${workingWhite}`,
                height: "100%",
              }}
            />
            <Stack fontSize={Caption} maxWidth={"35%"}>
              <Typography color={linkColor}>
                {demos[currentSlide].descriptions}
              </Typography>
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
                Go to Website <CallMadeIcon />
              </MLink>
            </Stack>
          </Stack>
        </Stack>
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
              disableRipple
              sx={{
                border: `2px solid ${workingBlack}`,
              }}
            >
              <NorthIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: workingBlack,
                }}
              />
              <WestIcon
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: workingBlack,
                }}
              />
            </IconButton>
            <IconButton
              onClick={() => {
                if (currentSlide < demos.length - 1) {
                  setCurrentSlideNum(currentSlide + 1);
                }
              }}
              disabled={currentSlide == demos.length - 1}
              disableRipple
              sx={{
                border: `2px solid ${workingBlack}`,
              }}
            >
              <SouthIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: workingBlack,
                }}
              />
              <EastIcon
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: workingBlack,
                }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={{ xs: "column", lg: "row" }} gap={"30px"}>
        <Typography color={workingBlack} fontSize={H3} maxWidth={{ lg: "30%" }}>
          OUR COMPANIES & PLATFORMS
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
                  {each.companylog}
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
