import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { tokens } from "../theme";

const Heading = () => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme); // theme - dark / light
  const colors = tokens(theme.palette.mode);
  return <div>Heading</div>;
};

export default Heading;
