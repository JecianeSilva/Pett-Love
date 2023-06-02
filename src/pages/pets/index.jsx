import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../assets/logo.png";

import './styles.scss';
import ListPets from "../../components/ListPets";
import { useState } from "react";

function PetsLove(){

  const [loadMore, setLoadMore] =  useState(false);
  const [loading, setLoading] =  useState(false);

  function handleLoadMore () {
      setLoading(true);
      setInterval(() => {
        setLoadMore(true);
        setLoading(false);
      },1000);
  }
  return (
    <div>
      <Header />
      <section id="pettLove" className="container">
        <div className="d-flex justify-content-center my-5 ">
            <img src={Logo} alt="logo" className="header-logo position-absolute" />
        </div>
        <div className="fullscreen d-flex flex-column align-items-center justify-content-center my-5 py-5">               
            <h1 className="title mb-3"><span>Pets</span> namorando</h1>
            <p className="description mb-5">Duis aute irure dolor in reprehenderit in voluptate</p>

            <div className="container my-5">
               <ListPets />
            </div>
            <div className="pettLove-publi container d-flex align-items-center justify-content-center">Publicidade 750x100</div>
            <div className="container my-5">
               <ListPets />
            </div>

          {loadMore &&
            <div id={'load-more'}>
               <ListPets />
            </div>
          }
          {!loadMore &&
            <button className="btn py-3 px-5 rounded-pill" disabled={loading} onClick={() => handleLoadMore()}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                  Carregando...
                </>
            ): "Carregar mais antigo"}
            </button>
          }
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PetsLove;