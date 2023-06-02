import "./styles.scss";

import BtnMenu from "../../assets/btn-menu.png"
import BtnEntrar from "../../assets/btn-entrar.png"

import BtnMenuMobile from "../../assets/btn-menu-mobile.png"
import BtnEntrarMobile from "../../assets/btn-entrar-mobile.png"



function Header() {
    return (
        <div id="header" className="container-fluid m-auto">
            <div className="header-container  d-flex w-100 align-items-center justify-content-between">
                <button  type="button" className="rounded-pill">
                    <img className="d-flex d-md-none" src={BtnMenuMobile} alt='icon-menu' />
                    <img className="d-none d-md-flex" src={BtnMenu} alt='icon-menu-mobile' />
                </button>
                <button  type="button" className="rounded-pill">
                    <img  className="d-none d-md-flex" src={BtnEntrar} alt='icon-entrar'></img>
                    <img className="d-flex d-md-none" src={BtnEntrarMobile} alt='icon-entrar-mobile'></img>
                </button>
            </div>
        </div>
    );
}
export default Header;