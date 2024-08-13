import { Box } from "@mui/material";
import Heading from "../../components/Heading";

const Dashboard = () => {
  return (
    <>
      <Box m="20px" >
        <Box display="flex" justifyContent="start" alignItems="center">
          <Heading title={`DASHBOARD`} subtitle={`Welcome to your Dashboard`} />
          
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
