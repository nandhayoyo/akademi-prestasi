import React, { useEffect } from "react";
import map_img from "../assets/image/map-marker.svg";
import { getItem } from "../services/ItemServices";
import useItemStore from "../store/useItemStore";
import { Link } from "react-router-dom";

const ItemList = () => {
  const { items, setItems, limit, setLimit } = useItemStore();

  const fetchData = async () => {
    try {
      const data = await getItem(limit);
      if (data && data.restaurants && Array.isArray(data.restaurants)) {
        setItems(data.restaurants);
      } else {
        console.error(
          "Data dari API tidak sesuai format yang diharapkan:",
          data
        );
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data:", error);
    }
  };
//
  useEffect(() => {
    fetchData();
  }, [limit]);

  const displayedItems = items.slice(0, limit);

  const handleLoadMore = async () => {
    const newLimit = limit + 3;
    try {
      const data = await getItem(newLimit);
      if (data && data.restaurants && Array.isArray(data.restaurants)) {
        setItems(data.restaurants);
        setLimit(newLimit);
      } else {
        console.error(
          "Data dari API tidak sesuai format yang diharapkan:",
          data
        );
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data:", error);
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-5 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="card w-auto bg-base-100 shadow-xl image-full"
          >
            <figure className="">
              <img
                src={`https://restaurant-api.dicoding.dev/images/small/${item.pictureId}`}
                alt={item.name}
              />
            </figure>
            <div className="card-body h-60">
              <h2 className="card-title">{item.name}</h2>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ml-1 text-sm font-bold dark:text-white">
                  {item.rating}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <img src={map_img} width={20} className="mr-1" />

                <p>{item.city}</p>
              </div>

              <div className="card-actions justify-end">
                <Link
                  to={`/detail/${item.id}`}
                  className="btn bg-gray-200 hover:bg-gray-400"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-5">
        <button
          onClick={handleLoadMore}
          className="btn bg-gray-400 hover:bg-gray-200"
        >
          View More
        </button>
      </div>
    </>
  );
};

export default ItemList;
