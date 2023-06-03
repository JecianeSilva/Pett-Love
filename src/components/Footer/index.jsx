import LogoCompleto from '../../assets/logo-completo.png';
import LogoClickWeb from '../../assets/logo-clickweb.png'
import ArrowUp from '../../assets/topo.png'
import ArrowDown from '../../assets/arrow-down.png'
import Facebook from '../../assets/facebook.png'
import Intagram from '../../assets/instagram.png'
import Youtube from '../../assets/youtube.png'
import CopyPix from '../../assets/copy-file.png'

import './styles.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    const [showInfoBancaria, setShowInfoBancaria] = useState(true);

    function handleShowInfoBancaria(state) {
        setShowInfoBancaria(!state);
    }
    return (
        <section id="footer" className='container-fluid m-auto text-white'>
            <div className="footer-container d-flex flex-column justify-content-between">
                <div className='d-flex align-items-center justify-content-between mb-5'>
                    <img  className="d-none d-lg-flex " src={LogoCompleto} alt="petlove" height={92} />
                    <div className="form-container d-flex w-100 flex-column align-items-center align-items-lg-end">
                        <div className='d-flex flex-column align-items-center align-items-lg-start'>
                            <h2 className='form-info-new mb-3'>Receba nossas novidades</h2>
                            <div className="input-container fv-plugins-icon-container">
                                <input type="email" name="email" className="input" placeholder="Digite seu e-mail" required="">
                                </input>
                                
                                <button type="submit" className="btn-create">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='d-flex my-4'>
                    <div className="d-none d-md-flex col-md-10 col-lg-9  justify-content-between">
                        <div className='d-flex'>
                            <div className='info-map-site'>
                                <ul>
                                    <li className='map-site-item'><a href="#">Sobre nós</a></li>
                                    <li className='map-site-item'><a href="#">Como funciona</a></li>
                                    <li className='map-site-item'><a href="#">Dúvidas frequentes</a></li>
                                    <li className='map-site-item'><a href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className='info-map-site'>
                                <ul>
                                    <li className='map-site-item'><Link to="/pets-love">Pets namorando</Link></li>
                                    <li className='map-site-item'><a href="#">Comece agora!</a></li>
                                    <li className='map-site-item'><a href="#">Contato</a></li>
                                </ul>
                            </div>
                            <div className='info-map-site'>
                                <p className=''>Ajude uma entidade</p>
                                <div className='info-bancaria d-flex flex-column'>
                                    <div className='d-flex'>
                                        <p>SOS Vida Animal</p>
                                        <img  className='m-1 mx-2 cursor-pointer'  onClick={() => handleShowInfoBancaria(showInfoBancaria)} src={showInfoBancaria ? ArrowDown : ArrowUp} alt="" height={10}/>
                                    </div>
                                    {showInfoBancaria && (
                                        <>
                                            <p>Banco Itaú: <span>Ag 8804</span> Conta <span>01234-5</span></p>
                                            <p>PIX: <span>43.660.696/0001-95 </span><img src={CopyPix} alt="icon-copy"/></p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-midia col-12 col-md-2 col-lg-3">
                        <div className='d-flex justify-content-around'>
                            <a href="https://facebook.com/" className='rounded-circle p-4'>
                                <img src={Facebook} alt='Facebook'/>
                            </a>
                            <a href='https://instagram.com/' className='rounded-circle p-4'>
                                <img src={Intagram} alt='Instagram'/>
                            </a>
                            <a href="https://youtube.com/" className='rounded-circle p-4'>
                                <img src={Youtube} alt='Youtube'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='d-none d-md-flex footer-links d-flex mt-4'>
                    <ul className='d-flex mr-2'>
                        <li><a href="#">Política de privacidade</a></li>
                        <li>•</li>
                        <li><a href='#'>Termos de uso</a></li>
                        <li>•</li>
                        <li><a href="#">Política de Cookies</a></li>
                        <li>•</li>
                        <li><a href='#'>Política de cancelamento</a></li>
                    </ul>
                </div>

                <div className="footer-copyright-mobile d-flex d-md-none flex-column align-items-center">
                    <div className='d-flex flex-column align-items-center p-0 m-0 mb-3'>
                        <p>Pett Love - Relacionamento</p>
                        <p>CNPJ: 43.660.696/0001-95</p>
                    </div>
                    <div><img src={LogoClickWeb} alt="clickweb"/></div>
                </div>
            </div>
            
            <div className="footer-copyright d-flex align-items-center justify-content-between">
                <div className='d-flex w-100 align-items-center justify-content-between'>
                    <p className='d-none d-md-flex col-4'><span >Pett Love - Relacionamento | CNPJ: 43.660.696/0001-95</span></p>
                    <a href='#header' className='col-12 col-md-4 d-flex justify-content-center'><img src={ArrowUp} alt="top" height={15}/></a>
                    <div className='d-none d-md-flex col-4 justify-content-end'><img src={LogoClickWeb} alt="clickweb"/></div>
                </div>
            </div>
        </section>
    )
}

export default Footer;