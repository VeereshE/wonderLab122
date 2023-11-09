import React from "react";
import { workingBlack } from "@/theme/palette";
import { IconButton, Stack, Divider } from "@mui/material";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

interface LinedButtonProps {
  currentSlide: number;
  changeToNext: () => void;
  changeToPrev: () => void;
  arrayLength: number;
}

const LinedButton: React.FC<LinedButtonProps> = ({
  currentSlide,
  changeToNext,
  changeToPrev,
  arrayLength,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      flexGrow={1}
      justifyContent={"center"}
    >
      <Divider
        sx={{
          borderTop: "2px solid #000",
          minWidth: "80px",
          maxWidth: { md: "50%" },
          display: { xs: "none", sm: "block" },
          flexGrow: 1,
        }}
      />
      <Stack direction="row" alignItems="center">
        <IconButton
          onClick={() => changeToPrev()}
          disabled={currentSlide === 0}
          disableRipple
          sx={{
            border: `2px solid ${workingBlack}`,
            opacity: currentSlide === 0 ? 0.5 : 1,
          }}
        >
          <WestIcon sx={{ color: workingBlack }} />
        </IconButton>
        <Divider sx={{ borderTop: "2px solid #000", width: "60px" }} />
        <IconButton
          onClick={() => changeToNext()}
          disabled={currentSlide === arrayLength - 1}
          disableRipple
          sx={{
            border: `2px solid ${workingBlack}`,
            opacity: currentSlide === arrayLength - 1 ? 0.5 : 1,
          }}
        >
          <EastIcon sx={{ color: workingBlack }} />
        </IconButton>
      </Stack>
      <Divider
        sx={{
          borderTop: "2px solid #000",
          minWidth: "80px",
          maxWidth: { md: "50%" },
          display: { xs: "none", sm: "block" },
          flexGrow: 1,
        }}
      />
    </Stack>
  );
};

export default LinedButton;
