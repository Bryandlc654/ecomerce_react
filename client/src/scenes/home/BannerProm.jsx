import { Box } from "@mui/material";
import BannerProm1 from "../../banners/230118_banner_desktop_1.png";


const BannerProm = () => {
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <img src={BannerProm1} alt="" width="100%" />
    </Box>
  );
};

export default BannerProm;
