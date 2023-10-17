import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import { getItemById } from "../services/ItemServices";
import map_img from "../assets/image/map-marker.svg";
import foods_img from "../assets/image/hot-food.svg";
import drink_img from "../assets/image/drink.svg";
import useItemStore from "../store/useItemStore";

const ItemDetail = () => {
  const { id } = useParams();
  const { itemDetail, setItemDetail } = useItemStore();
  console.log("ITEM DETAILLLLL >>>>> ", itemDetail);

  useEffect(() => {
    if (!itemDetail) {
      const fetchData = async () => {
        try {
          const response = await getItemById(id);
          if (response.error === false && response.restaurant) {
            setItemDetail(response.restaurant);
          } else {
            console.error("Data tidak ditemukan");
          }
        } catch (error) {
          console.error("ERROR >> ", error);
        }
      };

      fetchData();
    }
  }, [id, itemDetail, setItemDetail]);

  if (!itemDetail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-screen-xl mx-auto mt-5 p-4">
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <div className="flex flex-col gap-4">
              <img
                src={`https://restaurant-api.dicoding.dev/images/medium/${itemDetail.pictureId}`}
                alt={itemDetail.name}
                width={5000}
                className="rounded-xl"
              />
            </div>
            <div className="flex-col">
              <kbd className="kbd text-3xl font-semibold">
                {itemDetail.name}
              </kbd>
              <div className="flex itemDetail.-center mt-2">
                <img src={map_img} width={20} className="mr-1" />
                <p>{itemDetail.city}</p>
              </div>
              <p>{itemDetail.description}</p>
              <div className="mt-4">
                <kbd className="kbd text-xl font-semibold">Categories</kbd>
                <ul>
                  {itemDetail.categories && itemDetail.categories.length > 0 ? (
                    <div className="mt-4">
                      <ul>
                        {itemDetail.categories.map((category, index) => (
                          <li key={index}>{category.name}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section Foods Drink */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              More Information
            </h1>
          </div>
          <div class="mt-4 lg:row-span-3 lg:mt-0">
            <kbd className="kbd text-xl font-semibold">Foods<img src={foods_img} width={20} className="ml-2"/></kbd>
            <ul>
              {itemDetail.menus &&
              itemDetail.menus.foods &&
              itemDetail.menus.foods.length > 0 ? (
                <div className="mt-4">
                  <ul>
                    {itemDetail.menus.foods.map((food, index) => (
                        <div key={index} className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 12H6"
                          />
                        </svg>
                        {food.name}
                      </div>
                    ))}
                  </ul>
                </div>
              ) : null}
            </ul>
            <kbd className="kbd text-xl font-semibold mt-5">Drinks <img src={drink_img} width={20} className="ml-2"/></kbd>
            <ul>
              {itemDetail.menus &&
              itemDetail.menus.drinks &&
              itemDetail.menus.drinks.length > 0 ? (
                <div className="mt-4">
                  <ul>
                    {itemDetail.menus.drinks.map((drink, index) => (
                      <div key={index} className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 12H6"
                          />
                        </svg>
                        {drink.name}
                      </div>
                    ))}
                  </ul>
                </div>
              ) : null}
            </ul>
          </div>

          {/* Section Customer Reviews */}

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <kbd className="kbd text-xl font-semibold">Customer Reviews</kbd>
            <ul>
              {itemDetail.customerReviews &&
              Array.isArray(itemDetail.customerReviews) &&
              itemDetail.customerReviews.length > 0 ? (
                <div className="mt-4">
                  <div>
                    {itemDetail.customerReviews.map((review, index) => (
                      <div key={index} className="chat chat-start mb-2">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-auto h-auto"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="chat-header mb-0.5">
                          {review.name}{" "}
                          <time className="text-xs opacity-50">
                            {review.date}
                          </time>
                        </div>
                        <p className="chat-bubble">{review.review}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemDetail;
