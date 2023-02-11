import { Box } from "@mui/material";
import BannerProm1 from "../../banners/Huincha-DK-captacion-febrero-mdcb.jpeg";
import BannerProm2 from "../../banners/Huincha-buttonbanner-dk-casaAndina-0602-JL.jpeg";


const BannerProm = () => {
  return (
    <Box width="80%" margin="80px auto" alignItems="center" display="flex" flexDirection="column" gap="10px">
      <img src={BannerProm1} alt="" width="100%" margin="10px 0" className="banner_prom"/>
      <img src={BannerProm2} alt="" width="100%" margin="10px 0" className="banner_prom"/>
    </Box>
  );
};

export default BannerProm;
