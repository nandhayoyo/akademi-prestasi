// ItemDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { getItemById } from "../services/ItemServices";
import map_img from "../assets/image/map-marker.svg";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItemById(id);
        if (response.error === false && response.restaurant) {
          setItem(response.restaurant);
        } else {
          console.error("Data tidak ditemukan");
        }
      } catch (error) {
        console.error("ERROR >> ", error);
      }
    };

    fetchData();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-screen-xl mx-auto mt-5 p-4">
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <div className="">
              <img
                src={`https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}`}
                alt={item.name}
                width={500}
              />
            </div>
            <div className="">
              <kbd className="kbd text-3xl font-semibold">{item.name}</kbd>
              <div className="flex items-center mt-2">
                <img src={map_img} width={20} className="mr-1" />
                <p>{item.city}</p>
              </div>
              <p>{item.description}</p>
              <div className="mt-4">
                <kbd className="kbd text-xl font-semibold">Categories</kbd>
                <ul>
                  {item.categories && item.categories.length > 0 ? (
                    <div className="mt-4">
                      <ul>
                        {item.categories.map((category, index) => (
                          <li key={index}>{category.name}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </ul>
              </div>
              <div className="mt-4">
                <kbd className="kbd text-xl font-semibold">Foods</kbd>
                <ul>
                  {item.menus &&
                  item.menus.foods &&
                  item.menus.foods.length > 0 ? (
                    <div className="mt-4">
                      <ul>
                        {item.menus.foods.map((food, index) => (
                          <li key={index}>{food.name}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </ul>
              </div>
              <div className="mt-4">
                <kbd className="kbd text-xl font-semibold">Drinks</kbd>
                <ul>
                  {item.menus &&
                  item.menus.drinks &&
                  item.menus.drinks.length > 0 ? (
                    <div className="mt-4">
                      <ul>
                        {item.menus.drinks.map((drink, index) => (
                          <li key={index}>{drink.name}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </ul>
              </div>
              <div className="mt-4">
                <kbd className="kbd text-xl font-semibold">
                  Customer Reviews
                </kbd>
                <ul>
                  {item.customerReviews &&
                  Array.isArray(item.customerReviews) &&
                  item.customerReviews.length > 0 ? (
                    <div className="mt-4">
                      <ul>
                        {item.customerReviews.map((review, index) => (
                          <li key={index}>
                            <p className="text-sm font-semibold">
                              {review.name}
                            </p>
                            <p>{review.review}</p>
                            <p className="text-sm text-gray-400">
                              {review.date}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemDetail;
