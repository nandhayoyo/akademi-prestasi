import React from "react";
import logo_img from "../assets/image/logoipsum.svg"

const Navbar = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="navbar bg-base-200 rounded-xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl font-bold" href="#">
            <img src={logo_img} alt="logo" className="mx-auto" />
            FindResto
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
