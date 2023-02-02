import MainCarousel from './MainCarousel';
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import BannerProm from "./BannerProm";
import GridPromotions from "./GridPromotions";
import BannerDelivery from "./BannerDelivery";


const Home = () => {
  return (
    <div className="home">
      <MainCarousel/>
      <BannerProm/>
      <ShoppingList/>
      <GridPromotions/>
      <BannerDelivery/>
      <Subscribe/>
    </div>
  )
}

export default Home
