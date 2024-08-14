import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import Heading from "../../components/Heading";

const Pie = () => {
  return (
    <Box m="20px">
      <Heading title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
