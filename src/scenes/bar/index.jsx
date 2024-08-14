import { Box } from "@mui/material";
import Heading from "../../components/Heading";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Heading title={`Bar Chart`} subtitle={`Simple Bar Chart`} />
      <Box height="70vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
