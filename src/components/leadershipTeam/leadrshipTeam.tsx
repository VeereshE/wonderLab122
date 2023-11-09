"use client";

import { Stack, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { Caption, H4, H5_1, H6_4 } from "@/theme/fonts";
import MLink from "@/commonComponents/m-link";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ReactiveBreadcrumb from "@/commonComponents/breadCrumb";

import { linkColor, workingBlack } from "@/theme/palette";

import Image, { StaticImageData } from "next/image";
import demoImage from "@/components/commomImages/founding-team-demo.jpg";
import LinedButton from "@/commonComponents/lined-buttons";

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
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={5}
        minHeight={"70vh"}
        alignItems={"center"}
        mb={4}
      >
        <Stack direction={"row"} minWidth={"120px"}>
          <Typography fontSize={H6_4} fontWeight={700}>
            {currentSlide + 1} / {demos.length}
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          flexGrow={1}
          justifyContent={"space-around"}
          gap={3}
        >
          <Image
            src={demos[currentSlide].personImage}
            alt="team"
            width={200}
            height={300}
            style={{
              width: "40%",
              height: "400px",
            }}
          />
          <Stack
            sx={{
              color: workingBlack,
            }}
            maxWidth={{ md: "40%" }}
          >
            <Typography fontSize={H5_1}>
              {demos[currentSlide].personName}
            </Typography>
            <Typography fontSize={Caption}>
              {demos[currentSlide].details}
            </Typography>
            <MLink
              variant="text"
              href={"#"}
              disableRipple
              disableTouchRipple
              sx={{
                alignSelf: "flex-start",
                color: linkColor,
                textDecoration: "underline",
              }}
            >
              Read more <CallMadeIcon />
            </MLink>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ md: "center" }}
        gap={3}
      >
        <Typography variant="h4" fontSize={H4}>
          FOUNDING TEAM
        </Typography>

        <LinedButton
          currentSlide={currentSlide}
          changeToNext={changeToNext}
          changeToPrev={changeToPrev}
          arrayLength={demos.length}
        />
      </Stack>
    </Box>
  );
};

export default Carousel;

interface slideProps {
  personImage: string | StaticImageData;
  personName: string;
  details: string;
}
const demos: slideProps[] = [
  {
    personImage: demoImage,
    personName: "Sanju Menon",
    details:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut",
  },
  {
    personImage: demoImage,
    personName: "Rajesh Ghatge",
    details:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut",
  },
];
