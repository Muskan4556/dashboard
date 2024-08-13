import { Box, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { tokens } from "../theme";

const Heading = ({ title, subtitle }) => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme); // theme - dark / light
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Heading;
