import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../theme";
import { themeToggle } from "../../components/utils/themeSlice";

const Header = () => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme);
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(themeToggle());
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2} width="100%">
      {/* Search bar */}
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
        {/* Search Box + Search Icon */}
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* Nav Icons */}
      <Box display="flex">
        {mode ? (
          <IconButton onClick={toggleTheme}>
            {" "}
            <LightModeOutlinedIcon />{" "}
          </IconButton>
        ) : (
          <IconButton onClick={toggleTheme}>
            {" "}
            <DarkModeOutlinedIcon />{" "}
          </IconButton>
        )}
        <IconButton>
          {" "}
          <NotificationsOutlinedIcon />{" "}
        </IconButton>
        <IconButton>
          {" "}
          <SettingsOutlinedIcon />{" "}
        </IconButton>
        <IconButton>
          {" "}
          <PersonOutlinedIcon />{" "}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;

/***
 * Box is like a div, can use css property directly - adv == convenient to write css property
 * not allowed for Icon -  <Box display="flex" justifyContent="space-between" p={2}> use sx={{}}
 */
