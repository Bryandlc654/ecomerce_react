import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";

const GridPromotions = () => {
  return (
    <Box width="80%" margin="80px auto">
    <ImageList display="grid" gap="15px" gridTemplateColumns="repeat (4, minmax (0,1fr))">
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
  );
};

const itemData = [
  {
    img: "https://www.topitop.pe/arquivos/230118_banner_desktop_6.png?v=638096193223000000",
    title: "",
  },
  {
    img: "https://www.topitop.pe/arquivos/230118_banner_desktop_7.png?v=638096193228170000",
    title: "",
  },
  {
    img: "https://www.topitop.pe/arquivos/230118_banner_desktop_8.png?v=638096193228000000",
    title: "",
  },
  {
    img: "https://www.topitop.pe/arquivos/230118_banner_desktop_9.png?v=638096193227330000",
    title: "",
  },
];

export default GridPromotions;
