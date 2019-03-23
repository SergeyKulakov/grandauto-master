import React from "react";
import logoLight from '../Grand Auto_files/logo-light.svg';
import logoDark from '../Grand Auto_files/logo-dark.svg';

export default class Header extends React.Component {
    constructor(props) {
    super(props);
    this.state = { imgSrc: logoLight };
    this.imgSrcChange = this.imgSrcChange.bind(this);
    }  

componentDidMount() {
    window.addEventListener('scroll', this.imgSrcChange);
}

componentWillUnmount() {
  window.removeEventListener("scroll", this.imgSrcChange);
}

imgSrcChange() {
    const { pageYOffset } = window;
    const { active } = this.state;
    if (pageYOffset >= 100) {
      this.setState({ imgSrc: logoDark  });
    } else if (pageYOffset < 500) {
      this.setState({ imgSrc: logoLight });
    }
}  

dropMenu() {
    document.getElementsByClassName("sidebar")[0].style.display = 'block'; 
    document.getElementsByClassName("hamburger-box")[0].style.display = 'none';
    document.getElementsByClassName("cross")[0].style.display = 'block';  
}

hideMenu() {
    document.getElementsByClassName("sidebar")[0].style.display = 'none'; 
    document.getElementsByClassName("hamburger-box")[0].style.display = 'block';
    document.getElementsByClassName("cross")[0].style.display = 'none';  
}

  render() {
    return (
<header id="js-header" className="u-header u-header--sticky-top u-header--change-appearance shadow" data-header-fix-moment="100">
    <div id="header" className="u-header__section g-bg-black-opacity-0_7 g-transition-0_3 dark-theme g-bg-black-opacity-0_4" data-header-fix-moment-exclude="dark-theme g-bg-black-opacity-0_4" data-header-fix-moment-classNamees="light-theme u-theme-shadow-v1 g-bg-white g-py-10--md">
        <nav className="navbar navbar-expand-lg p-0 g-px-15">
            <div className="container g-pos-rel">
                <a href="https://grandauto.com.ua/" className="g-hidden-lg-up navbar-brand mr-0">
                    <img id="logo-light-responsive" className="g-width-140 g-width-160--md d-block" src={this.state.imgSrc} alt="Image Description" data-header-fix-moment-exclude="d-block" data-header-fix-moment-classNamees="d-none"/>

                </a>

                <div id="navbar-collapse" className="g-ml-5 collapse navbar-collapse align-items-center flex-sm-row" id="navBar">
                    <ul className="js-scroll-nav navbar-nav align-items-lg-center text-uppercase g-font-weight-700 g-letter-spacing-1 g-font-size-12 g-pt-20 g-pt-0--lg" data-splitted-breakpoint="992">
                        <li className="nav-item g-mr-10--lg g-mb-7 g-mb-0--lg">
                            <a href="https://grandauto.com.ua/lot?maker=LEXS&amp;year=2017" className="nav-link p-0">
                                Каталог Авто<span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item g-mx-30--lg g-mb-7 g-mb-0--lg">
                            <a href="https://grandauto.com.ua/#examples" className="nav-link p-0">Примеры</a>
                        </li>
                        <li className="nav-item g-mx-30--lg g-mb-7 g-mb-0--lg">
                            <a href="https://grandauto.com.ua/#warranty" className="nav-link p-0">Гарантии</a>
                        </li>

                        <li className="g-hidden-lg-down nav-logo-item g-mx-15--lg">
                            <a href="https://grandauto.com.ua/" className="js-go-to navbar-brand mr-0" data-type="static">
                                <img id="logo-first" className="g-width-235 g-width-225--md d-block" src={logoLight} alt="Grand Auto" data-header-fix-moment-exclude="d-block" data-header-fix-moment-classNamees="d-none"/>

                                <img id="logo-second" className="g-width-235 g-width-225--md d-none" src={logoDark} alt="Grand Auto" data-header-fix-moment-exclude="d-none" data-header-fix-moment-classNamees="d-block"/>
                            </a>
                        </li>

                        <li className="nav-item g-mx-30--lg g-mb-7 g-mb-0--lg">
                            <a href="https://grandauto.com.ua/#team" className="nav-link p-0">Доставка</a>
                        </li>
                        <li className="nav-item g-ml-30--lg">
                            <a href="https://grandauto.com.ua/#contact" className="nav-link p-0">Вопросы</a>
                        </li>
                        <li className="nav-item g-ml-30--lg g-letter-spacing-0">
                            <a href="https://grandauto.com.ua/#contact" className="btn g-font-weight-700  btn-xl u-btn-primary rounded-0">
                                Подобрать авто
                            </a>
                        </li>
                    </ul>
                </div>

                <button className="navbar-toggler btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-right-0" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                <span className="hamburger hamburger--slider">
                  <span className="hamburger-box" onClick={this.dropMenu}>
                    <span className="hamburger-inner"></span>
                  </span>
                  <span className="cross" onClick={this.hideMenu}>x</span>
                </span>
                </button>
            </div>
        </nav>
    </div>
  </header>
    );
  }
}