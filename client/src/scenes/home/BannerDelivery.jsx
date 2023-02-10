import { Box } from "@mui/material";
import BannerProm1 from "../../banners/banner_delivery.jpg";


const BannerDelivery = () => {
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <img src={BannerProm1} alt="" width="100%" />
    </Box>
  );
};

export default BannerDelivery;
