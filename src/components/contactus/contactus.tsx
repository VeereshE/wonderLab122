import {
  FormControl,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { linkColor, workingBlack, workingWhite } from "@/theme/palette";
import { H5_1, H6_4, Subtitle1 } from "@/theme/fonts";

import logo from "@/components/commomImages/W_white.svg";
import Image from "next/image";

import CloseIcon from "@mui/icons-material/Close";

interface ContactUsProps {
  colseMethod: () => void;
}

const Contactus: React.FC<ContactUsProps> = ({ colseMethod }) => {
  return (
    <Stack
      gap={3}
      //width={{ sm: "50%", md: "40%" }}
      p={4}
      sx={{ background: workingBlack }}
      color={workingWhite}
    >
      <Stack gap={3}>
        <CloseIcon
          sx={{ color: workingWhite, alignSelf: "flex-end" }}
          onClick={() => {
            colseMethod();
          }}
        />
        <Stack direction={"row"} gap={2}>
          <Image src={logo} alt="" width={50} height={50} />
          <Typography fontSize={Subtitle1}>
            Powerful solutions for your business needs. Let’s Make Wondrful
          </Typography>
        </Stack>

        <TextField
          label="NAME"
          placeholder="NAME"
          style={{ background: "#7e7d7d" }} // Change the text color to blue
        />
        <TextField
          label="EMAIL"
          placeholder="EMAIL"
          style={{ background: "#7e7d7d" }} // Change the text color to blue
        />
        <TextField
          label="MESSAGE"
          placeholder="MESSAGE"
          multiline
          rows={8}
          style={{ background: "#7e7d7d" }} // Change the text color to blue
        />
      </Stack>

      <Stack direction={{ lg: "row" }} gap={5}>
        <Stack>
          <Typography color={linkColor}>MEET US AT</Typography>
          <Typography fontSize={H6_4} fontWeight={600}>
            WONDRLAB OFFICE
          </Typography>
          <Typography>
            Pinnacle Corporate Park, 603, <br /> BKC CST Link Rd, <br />
            Kolivery Village, MMRDA Area, <br />
            Bandra Kurla Complex, Bandra East, <br />
            Mumbai, Maharashtra 400051
          </Typography>
        </Stack>
        <Stack justifyContent={"space-between"} gap={5}>
          <Stack>
            <Typography color={linkColor}>FOLLOW US ON</Typography>
            <Stack direction={"row"} gap={3}>
              <InstagramIcon />
              <TwitterIcon />
              <LinkedInIcon />
            </Stack>
          </Stack>
          <Stack>
            <Typography color={linkColor}>CONTACT US ON</Typography>
            <Typography fontSize={H6_4}>HELLO@WONDRLAB</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contactus;
