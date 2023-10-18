import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import search_img from "../assets/image/search_img.svg";
import map_img from "../assets/image/map-marker.svg";
import { Link } from "react-router-dom";

import { searchRestaurants } from "../services/ItemServices";

const Explore = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (query) {
      setIsLoading(true);
      try {
        const data = await searchRestaurants(query);
        setSearchResult(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    } else {
      setSearchResult(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <>
      <Navbar />
      <section>
        <div className="max-w-screen-xl col items-center justify-center relative mx-auto p-4">
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="flex items-center justify-center relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http the W3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for restaurants by name, category and menu.."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <div className="text-center my-12">
            {isLoading ? (
              <p>Loading...</p>
            ) : searchResult ? (
              searchResult.restaurants.length > 0 ? (
                <div className="max-w-screen-xl mx-auto mt-5 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                  {searchResult.restaurants.map((restaurant, index) => (
                    <div
                      key={restaurant.id}
                      className="card w-auto bg-base-100 shadow-xl image-full"
                    >
                      <figure className="">
                        <img
                          src={`https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}`}
                          alt={restaurant.name}
                        />
                      </figure>
                      <div className="card-body h-60">
                        <h2 className="card-title">{restaurant.name}</h2>
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
                            {restaurant.rating}
                          </p>
                        </div>
                        <div className="flex items-center mt-2">
                          <img src={map_img} width={20} className="mr-1" />

                          <p>{restaurant.city}</p>
                        </div>

                        <div className="card-actions justify-end">
                          <Link
                            to={`/detail/${restaurant.id}`}
                            className="btn bg-gray-200 hover:bg-gray-400"
                          >
                            Visit
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <img src={search_img} width={500} className="p-5 mx-auto" />
                  <p className="font-bold text-red-600">
                    No results found for your search
                  </p>
                </div>
              )
            ) : (
              <img src={search_img} width={500} className="p-5 mx-auto" />
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Explore;
