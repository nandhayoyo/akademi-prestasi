import React from "react";
import hero_img from "../assets/image/hero.png";

const Hero = () => {
  return (
    <>
      <div className="hero rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={hero_img} className=" rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Find your restaurant and add it to favorites!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
