import * as React from "react";
import { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { Button, ButtonProps } from "@mui/material";

export type MLinkProps = ButtonProps<typeof Link> & {
  href?: LinkProps["href"];
};

const MLink = forwardRef<HTMLAnchorElement, MLinkProps>((props, ref) => {
  return <Button component={Link} ref={ref} {...props} />;
});

export default MLink;

MLink.displayName = MLink.name;
