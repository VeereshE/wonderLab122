"use client";

import {
  IconButton,
  Stack,
  Typography,
  Box,
  Stepper,
  Step,
  Divider,
  Dialog,
  DialogContent,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

import { Caption, H3, H5, H6_4 } from "@/theme/fonts";
import MLink from "@/commonComponents/m-link";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ReactiveBreadcrumb from "@/commonComponents/breadCrumb";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import { linkColor, workingBlack, workingWhite } from "@/theme/palette";
import AdjustIcon from "@mui/icons-material/Adjust";
import Image, { StaticImageData } from "next/image";

import caseStudies1 from "@/components/commomImages/case-studies-1.jpg";
import caseStudies2 from "@/components/commomImages/case-studies-2.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlideNum] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <Box padding={"40px"} gap={4}>
      <ReactiveBreadcrumb />
      <Stack
        direction={{ xs: "column", md: "row" }}
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
            <Stack onClick={() => setOpen(true)}>
              <Image
                src={demos[currentSlide].image}
                width={350}
                alt=""
                height={350}
              />
            </Stack>
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

        <Stack maxWidth={{ md: "35%" }} gap={4}>
          <Typography color={"inherit"} fontSize={H5}>
            {demos[currentSlide].slideName}
          </Typography>
          <Typography>{demos[currentSlide].descriptions}</Typography>
        </Stack>
      </Stack>
      <Stack direction={{ xs: "column", lg: "row" }} gap={3}>
        <Typography
          color={workingBlack}
          fontSize={H3}
          mt={{ xs: "40px", md: "0px" }}
        >
          OUR CAPABILITIES
        </Typography>

        <Stack direction={"row"} alignItems={"center"} flexGrow={1}>
          <Divider
            sx={{
              borderTop: "2px solid #000",
              minWidth: "80px",
              flexGrow: 1,
            }}
          />
          {demos.map((each, index) => (
            <>
              <Stack
                sx={{ opacity: currentSlide === index ? 1 : 0.5 }}
                key={index}
              >
                <Typography position={"absolute"} mt={-2} ml={4}>
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
            </>
          ))}
          <Divider
            sx={{
              borderTop: "2px solid #000",
              minWidth: "80px",
              flexGrow: 1,
              alignSelf: "center",
            }}
          />
        </Stack>
      </Stack>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth={true}
        maxWidth={"lg"}
        sx={{
          background: workingBlack,
        }}
      >
        <DialogContent sx={{ background: workingBlack }}>
          <Stack gap={5}>
            <CloseIcon
              sx={{ color: workingWhite }}
              fontSize="large"
              onClick={() => {
                setOpen(false);
              }}
            />
            <iframe
              style={{
                minHeight: "300px",
                maxHeight: "60vh",
                width: "90%",
                overflow: "hidden",
              }}
              src={demos[currentSlide].videoUrl}
              title="Video Popup"
            />
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Carousel;

interface slideProps {
  slideName: string;
  descriptions: string;

  videoUrl: string;
  image: string | StaticImageData;
}
const demos: slideProps[] = [
  {
    slideName: "Bharat Matrimony",

    descriptions:
      "Bespoke solutions that combine human insights and platform-first strategy to create engaging digital experiences throughout the customer journey, cultivating loyalty and driving outcomes.",

    videoUrl: "https://www.youtube.com/embed/88kzxvrR22A",
    image: caseStudies1,
  },
  {
    slideName: "EatSure",
    descriptions:
      "AI, machine learning, and automation power our platform-first media solutions delivering personalized digital marketing programs across geographies, communities and culture",

    videoUrl: "https://www.youtube.com/embed/xMOG-lzh_Zo",
    image: caseStudies2,
  },
];
