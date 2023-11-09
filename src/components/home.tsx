"use client";
import { Stack, Typography } from "@mui/material";
import logo from "./commomImages/logo-out-lined.jpg";
import Image from "next/image";

import CallMadeIcon from "@mui/icons-material/CallMade";
import { H6_4, Subtitle1 } from "@/theme/fonts";
import MLink from "@/commonComponents/m-link";

import ReactiveBreadcrumb from "@/commonComponents/breadCrumb";
import { linkColor, workingBlack, workingWhite } from "@/theme/palette";

const HomePage = () => {
  return (
    <Stack
      sx={{
        background: workingBlack,
        alignItems: "center",
        justifyContent: "center",
        minHeight: "85vh",
        padding: {
          xs: "24px",
          md: "52px",
        },
      }}
      direction={{
        xs: "column",
        md: "row",
      }}
    >
      <Stack
        maxWidth={{
          xs: "90%",
          md: "50%",
        }}
        gap={"20px"}
        alignSelf={"flex-end"}
        alignContent={"center"}
        order={{
          xs: 1,
          md: 0,
        }}
      >
        <Typography
          color={workingWhite}
          sx={{
            fontSize: H6_4,
            fontWeight: 700,
            maxWidth: {
              md: "60%",
            },
          }}
        >
          THE PLATFORM-FIRST DIGITAL NETWORK
        </Typography>
        <Typography
          color={workingWhite}
          sx={{
            fontSize: Subtitle1,
            maxWidth: "60%",
          }}
        >
          Bridging the gap between marketing and digital business
          transformation.
        </Typography>

        <MLink
          variant={"text"}
          disableRipple
          sx={{
            fontSize: Subtitle1,
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
      <Image
        src={logo}
        width={0}
        height={0}
        alt="logo"
        style={{
          background: workingWhite,
          width: "80%",
          maxWidth: "540px",
          minHeight: "180px",
          maxHeight: "380px",
        }}
      />
    </Stack>
  );
};

export default HomePage;
