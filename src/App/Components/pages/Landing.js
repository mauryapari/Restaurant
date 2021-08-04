import React from "react";
import Food from '../../assets/Food.png'
const Landing = () => {
    return(
        <div>
            <main className="container">
                <div className="main-section">
                    <div className="main-section__content">
                        <h1>Food</h1>
                        <h2>Discover Restruants &amp; Delicous Food</h2>
                        <form>
                            <input type="text"/>
                            <button>GO</button>
                        </form>
                    </div>
                    <div className="main-section__images">
                        <img src={Food} alt="Food Image" className="front-image"/>
                    </div>
                </div>
            </main>
        </div>);
}

export default Landing;