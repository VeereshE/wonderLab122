// import { alpha, Box, IconButton } from "@mui/material";
// import { useSwiper } from "swiper/react";

// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// interface props {
//   disablePrev: boolean;
//   disableNext: boolean;
//   variant?: "primary" | "secondary" | null | undefined;
// }

// export default function SlideButtons(prop: props) {
//   const { disableNext, disablePrev, variant = "primary", ...rest } = prop;
//   const swiper = useSwiper();

//   return (
//     <>
//       <Box
//         component={"div"}
//         sx={(theme) => ({
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//           "& .MuiIconButton-root": {
//             border: `2px solid ${
//               variant === "primary" ? "#000000" : "#FFFFFFFF"
//             }`,
//             width: theme.spacing(6),
//             height: theme.spacing(6),
//             p: 0,
//             "&:hover:after": {
//               content: '""',
//               position: "absolute",
//               top: "4px",
//               left: "4px",
//               right: "4px",
//               bottom: "4px",
//               background: alpha(
//                 variant === "primary" ? "#000000" : "#FFFFFFFF",
//                 0.25
//               ),
//               zIndex: -1,
//             },
//             "&.Mui-disabled": {
//               opacity: 0.5,
//             },
//             "&:first-child": {
//               transform: "scaleX(-1)",
//             },
//             "&:hover": {
//               background: "none",
//             },
//             "& svg": {
//               width: theme.spacing(3.75),
//               height: theme.spacing(3.75),
//             },
//           },
//         })}
//       >
//         <IconButton
//           onClick={() => swiper.slidePrev()}
//           className="arrow-left arrow"
//           disabled={disablePrev}
//         >
//           <ArrowUpwardIcon
//             sx={{ color: variant === "primary" ? "#000000" : "#FFFFFFFF" }}
//           />
//         </IconButton>
//         <IconButton
//           onClick={() => swiper.slideNext()}
//           // className="arrow-right arrow"
//           disabled={disableNext}
//           disableTouchRipple
//         >
//           <ArrowDownwardIcon
//             sx={{ color: variant === "primary" ? "#000000" : "#FFFFFFFF" }}
//           />
//         </IconButton>
//       </Box>
//     </>
//   );
// }
