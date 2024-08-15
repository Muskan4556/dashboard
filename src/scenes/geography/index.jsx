import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Heading from "../../components/Heading";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Heading title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="70vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
