import { ReactNode } from "react";
import MenuAppBar from "@/components/layout/navbar";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <MenuAppBar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
