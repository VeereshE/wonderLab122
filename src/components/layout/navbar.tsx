"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {
  Toolbar,
  Stack,
  Drawer,
  Typography,
  Link,
  Dialog,
  DialogContent,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CopyrightIcon from "@mui/icons-material/Copyright";

import logo from "../commomImages/W_white.svg";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { H5_1, Subtitle1 } from "@/theme/fonts";
import { workingBlack, workingWhite } from "@/theme/palette";

import Contactus from "@/components/contactus/contactus";

const HeaderBar = () => {
  const [isOpenDrawer, setIsOpenDrawr] = React.useState(false);
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: workingBlack }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: workingBlack,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack
            sx={{
              maxHeight: "90px",
            }}
          >
            <Image
              src={logo}
              width={60}
              height={10}
              alt="logo"
              style={{
                height: "40%",
              }}
            />
          </Stack>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsOpenDrawr(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isOpenDrawer}>
        <Stack
          minWidth={"40%"}
          padding={"40px"}
          sx={{
            backgroundColor: workingBlack,
            direction: "column",
            flexGrow: 1,
            color: workingWhite,
          }}
        >
          <CloseIcon
            onClick={() => setIsOpenDrawr(false)}
            sx={{ alignSelf: "flex-end", width: "24px" }}
            fontSize="large"
          />
          <Stack alignSelf={"center"} flexGrow={1} justifyContent={"center"}>
            {tabs.map((each, index) => (
              <Typography
                variant="h5"
                sx={{ fontSize: H5_1 }}
                key={index}
                onClick={() => {
                  if (each.name === "CONTACT") {
                    setIsContactOpen(true);
                    setIsOpenDrawr(false);
                  }
                }}
              >
                <Link href={each.link} underline="hover" color="inherit">
                  {each.name}
                </Link>
              </Typography>
            ))}
          </Stack>
          <Stack
            sx={{
              textAlign: "right",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            direction={"row"}
          >
            <CopyrightIcon />
            <Typography
              sx={{
                fontSize: Subtitle1,
                color: "inherit",
              }}
            >
              2023
            </Typography>
          </Stack>
        </Stack>
      </Drawer>

      <Dialog
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        fullWidth
      >
        <DialogContent
          sx={{
            background: workingBlack,
            overflowy: "scroll",
            "&::-webkit-scrollbar": {
              width: "6px", // Width of the scrollbar
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888", // Color of the scrollbar thumb
              borderRadius: "6px", // Border radius of the thumb
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#eee", // Color of the scrollbar track
            },
          }}
        >
          <Contactus colseMethod={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default HeaderBar;

const tabs: { name: string; link: string }[] = [
  { name: "HOME", link: "/" },
  { name: "ABOUT US", link: "/" },
  { name: "OUR COMPANIES", link: "/our-capabilities/our-companies&Platforms" },
  { name: "OUR CAPABILITIES", link: "/our-capabilities" },
  {
    name: "TEAMS",
    link: "/our-capabilities/our-companies&Platforms/founding-team",
  },
  {
    name: "CASE STUDIES",
    link: "/our-capabilities/our-companies&Platforms/founding-team/leadership-team/case-Studeis",
  },
  { name: "CONTACT", link: "#" },
];
