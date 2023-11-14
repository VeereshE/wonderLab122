import { Subtitle1 } from "@/theme/fonts";
import { workingBlack } from "@/theme/palette";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";

import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

interface ButtonProps {
  currentSlide: number;
  changeToNext: () => void;
  changeToPrev: () => void;
  arrayLength: number;
}

const CarouselButton: React.FC<ButtonProps> = ({
  currentSlide,
  changeToPrev,
  changeToNext,
  arrayLength,
}) => {
  return (
    <Stack
      textAlign={"center"}
      sx={{
        color: workingBlack,
      }}
      gap={3}
    >
      <Typography fontSize={Subtitle1} fontWeight={"600"}>
        {currentSlide + 1} / {arrayLength}{" "}
      </Typography>
      <Stack gap={3} direction={{ xs: "row", md: "column" }}>
        <IconButton
          onClick={() => changeToPrev()}
          disabled={currentSlide == 0}
          sx={{
            border: `2px solid ${workingBlack}`,
            opacity: currentSlide === 0 ? 0.5 : 1,
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
          onClick={() => changeToNext()}
          disabled={currentSlide === arrayLength - 1}
          sx={{
            border: `2px solid ${workingBlack}`,
            opacity: currentSlide === arrayLength - 1 ? 0.5 : 1,
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
  );
};

export default CarouselButton;
