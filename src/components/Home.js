import React from "react";
import arrow from '../Grand Auto_files/arrow-down.svg';

export default class Header extends React.Component {
  render() {
    return (
    <section id="home" className="bg-car g-theme-bg-blue-dark-v1 u-bg-overlay g-pb-100 g-pos-rel section-first">
        <div className="u-bg-overlay__inner w-100 g-pt-80">
            <div className="container text-center">
                <div className="text-uppercase u-heading-v2-4--bottom u-promo-title g-brd-primary">
                    <h2 className="u-heading-v2__title g-color-white g-font-size-30 g-font-size-40--md mb-0">
                        Автомобили с доставкой&nbsp; из США "под ключ"
                    </h2>
                    <br/>
                    <h2 className="u-heading-v2__title g-font-size-30 g-color-white g-font-size-40--md mb-0">
                        Цена на 30-50% ниже рынка,&nbsp; растаможенные <br/> на украинских номерах
                    </h2>
                </div>
            </div>
        </div>
        <a className="arrow" href="#section-second"><img src={arrow} alt="arrow-down.svg"/></a>
        <div className="background-shadow"></div>
    </section>
    );
  }
}