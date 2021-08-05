import React from "react";
import Bike from '../../../assets/Bike.png';
import People from '../../../assets/people.png';
import Dish from '../../../assets/Dish.png';
const Service = () => {
    return (
        <div className="service-section">
            <div className="container">
                <div className="service-section__heading">
                    <div className="service-section__heading__section">
                        <div className="rectangle"></div>
                        <h3>Our Services</h3>
                    </div>
                    <div className="service-section__heading__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed.</p>
                    </div>
                </div>
            </div>
            <div className="service-section__body-content">
                <div className="container">
                    <div className="service-section__body">
                        <div className="service-section__body__dinning">
                            <div className="top-part">
                                <div className="top-part__img">
                                <img src={People} alt="dinning"/>
                                </div>
                                <div className="top-part__content">
                                    <h4>Advanced Tabel Booking</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                            </div>
                            <div className="bottom-part">
                                <div className="bottom-part__content">
                                    <h4>Food For Free 24/7</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                                <div className="bottom-part__img">
                                    <img src={Dish} alt="cart"/>

                                </div>
                            </div>
                        </div>
                        <div className="service-section__body__delivery">
                            <div>
                                <img src={Bike} alt="Food Delivery"/>
                                <h4>free home delivery at your door steps</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;