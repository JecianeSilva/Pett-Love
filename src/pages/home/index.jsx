import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardImage from "../../components/CardImage";


import Image1 from "../../assets/image-1.png";
import Image2 from "../../assets/image-2.png";
import Image3 from "../../assets/image-3.png";

import Logo from "../../assets/logo.png";
import CadastrePet from "../../assets/cadastre-pet.png";
import SearchPet from "../../assets/search.png";
import AgendarPet from "../../assets/agende.png";

import Line1 from "../../assets/line-1.png";
import Line2 from "../../assets/line-2.png";

import Line1Mobile from "../../assets/line-1-mobile.png";
import Line2Mobile from "../../assets/line-2-mobile.png";


import './styles.scss';
import { Link } from "react-router-dom";

const Home = () =>{
  return (
    <div>
      <Header />
      <section id="banner" className="d-flex align-items-center justify-content-center px-5">
        <div className="container fullscreen d-flex flex-column align-items-center justify-content-center col-lg-6 col-md-10 px-5">
            <img className="banner-logo position-absolute" src={Logo} height={200} />
            <p className="banner-description mb-4">COMO FUNCIONA</p>
            <h1 className="banner-title mb-5">Encontre um pretendente para o seu animal</h1>
            <button className="btn py-3 px-5 rounded-pill"><Link to="petslove">Comece agora!</Link></button>
        </div>
      </section>
      <section className="container my-5 py-5">
        <div className="fullscreen d-flex flex-column align-items-center justify-content-center my-5">
          <div className="d-flex flex-column flex-lg-row h-100 align-items-center">
            <div className="d-flex  align-items-center justify-content-center col-lg-5 col-md-10">
              <CardImage image={Image1} />
            </div>
            <div className="info-card d-flex flex-column mt-3 col-lg-6 col-md-10 px-4 align-items-center align-items-lg-start mx-4 px-4">
                <img className="my-lg-0 my-md-3" src={CadastrePet} alt="pet-cadastre" height={72} width={83} />
                <h1 className="title-card mt-4 mb-2">Cadastre seu <span>animal</span></h1>
                <p className="description-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
            </div>
          </div>
          <div className="d-none d-lg-flex w-100 align-items-center justify-content-center">
              <img src={Line1} />
          </div>
          <div className="d-flex d-lg-none w-100 align-items-center justify-content-center">
              <img src={Line1Mobile} />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center my-5">
          <div className="d-flex flex-column flex-lg-row flex-lg-row-reverse h-100 align-items-center">
            <div className="d-flex align-items-center justify-content-center col-lg-6 col-md-10">
              <CardImage image={Image2} />
            </div>
            <div className="info-card d-flex flex-column mt-3 col-lg-6 col-md-10 align-items-center align-items-lg-start mx-4 px-4">
                <img className="my-lg-0 my-md-3" src={SearchPet} alt="pet-cadastre" height={72} width={73} />
                <h1 className="title-card mt-4 mb-2"><span>Procure</span> pretendentes</h1>
                <p className="description-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
            </div>
          </div>
          <div className="d-none d-lg-flex w-100 align-items-center justify-content-center">
              <img src={Line2} />
          </div>
          <div className="d-flex d-lg-none w-100 align-items-center justify-content-center">
              <img src={Line2Mobile} />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center my-5">
          <div className="d-flex flex-lg-row flex-column h-100 align-items-center mb-5">
            <div className="d-flex  align-items-center justify-content-center col-lg-5 col-md-10">
              <CardImage image={Image3} />
            </div>
            <div className="info-card d-flex flex-column mt-3 col-lg-6 col-md-10 align-items-center align-items-lg-start px-3 mx-4">
                <img className="my-lg-0 my-md-3"src={AgendarPet} alt="pet-cadastre" height={72} width={83} />
                <h1 className="title-card mt-4 mb-2">Marque um <span>encontro</span></h1>
                <p className="description-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home;