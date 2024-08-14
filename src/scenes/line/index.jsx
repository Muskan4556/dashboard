import { Box } from "@mui/material";
import Heading from "../../components/Heading";
import LineChart from "../../components/LineChart";
const Line = () => {
  return  <Box m="20px">
  <Heading title="Line Chart" subtitle="Line Pie Chart" />
  <Box height="70vh">
    <LineChart />
  </Box>
</Box>
};

export default Line;
