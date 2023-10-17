import React from "react";
import resto_img from "../assets/image/resto1.png"

const ItemList = () => {
  return (
    <>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={resto_img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
