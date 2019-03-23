import React from "react";
import logoLight from '../Grand Auto_files/logo-light.svg';
import logoDark from '../Grand Auto_files/logo-dark.svg';

export default class Header extends React.Component {
  render() {
    return (
                <div className="sidebar">
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
    );
  }
}