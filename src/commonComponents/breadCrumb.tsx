"use client";
import * as React from "react";
import { useCallback } from "react";
import { usePathname } from "next/navigation";

import MLink, { MLinkProps } from "@/commonComponents/m-link";
import { NavigateNextRounded } from "@mui/icons-material";
import { Stack, StackProps } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { Caption } from "@/theme/fonts";
import { workingBlack } from "@/theme/palette";

export interface ReactiveBreadcrumbProps extends Omit<StackProps, "children"> {
  MLinkProps?: Omit<MLinkProps, "href" | "children">;
}

const ReactiveBreadcrumb = (props: ReactiveBreadcrumbProps) => {
  const { MLinkProps, ...restStackProps } = props;
  const pathName = usePathname();
  const pathNames = pathName.split("/");

  const mLinkProps = useCallback(
    (isLast: boolean): ReactiveBreadcrumbProps["MLinkProps"] => {
      return deepmerge(
        {
          disableRipple: true,
          variant: "text",

          sx: {
            opacity: isLast ? 1 : 0.5,
            fontSize: "10px",
            pointerEvents: isLast ? "none" : "auto",
            "&:hover": {
              textDecoration: isLast ? "none" : "underline",
            },
            color: workingBlack,
          },
        },
        MLinkProps
      );
    },
    [MLinkProps]
  );

  return (
    <Stack
      component={"nav"}
      direction={"row"}
      alignItems={"center"}
      flexWrap={"wrap"}
      {...restStackProps}
    >
      {["Home", ...pathNames].map((item, index, arr) => {
        if (!item) return null;
        const isLast = arr.length === index + 1;
        return (
          <MLink key={index} href={"/"} {...mLinkProps(isLast)}>
            {index === 0 ? null : "/ "}
            {item.replaceAll("-", " ")}
          </MLink>
        );
      })}
    </Stack>
  );
};

export default ReactiveBreadcrumb;
