import Foto1 from "../../banners/Foto1.png";
import Foto2 from "../../banners/Foto2.png";
import Foto3 from "../../banners/Foto3.png";
import Foto4 from "../../banners/Foto4.png";
import Foto5 from "../../banners/Foto5.png";

const Galeria = () => {
  return (
    <section id="galeria" className="container galeria">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <img src={Foto1} alt="Galeria" className="object-fit-cover h-100" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={Foto2} alt="Galeria" className="object-fit-cover h-100" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img src={Foto3} alt="Galeria" className="object-fit-cover h-100" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img src={Foto4} alt="Galeria" className="object-fit-cover h-100" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img src={Foto5} alt="Galeria" className="object-fit-cover h-100" />
        </div>
      </div>
    </section>
  );
};
export default Galeria; 
