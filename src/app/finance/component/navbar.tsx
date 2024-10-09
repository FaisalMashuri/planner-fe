import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="navbar rounded-lg bg-white">
      <div className="nav-container flex-row">
        <div className="">
          <a className="text-black font-bold text-[50px]">Monthly Sumup</a>
        </div>
        <div>
          <a className="text-gray-400">
            Get summary of your monthly online transactions here.
          </a>
        </div>
      </div>
      <div className="navbar-end flex">
        <div className="mr-4">
          <FaEnvelope size={25} color="E3E3E3" />
        </div>
        <div className="mr-4">
          <IoMdNotifications size={30} color="E3E3E3" />
        </div>

        <div className="avatar avatar-ring avatar-md mr-4">
          <div className="dropdown-container">
            <div className="dropdown">
              <label
                className="btn btn-ghost flex cursor-pointer px-0"
                tabIndex="0"
              >
                <img
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  alt="avatar"
                />
              </label>
              <div className="dropdown-menu dropdown-menu-bottom-left bg-[#197BBD] text-white">
                <a className="dropdown-item text-sm hover:bg-white hover:text-black">
                  Profile
                </a>
                <a
                  tabIndex="-1"
                  className="dropdown-item text-sm hover:bg-white hover:text-black"
                >
                  Account settings
                </a>
                <a
                  tabIndex="-1"
                  className="dropdown-item text-sm hover:bg-white hover:text-black"
                >
                  Subscriptions
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-fit">
            <label
              htmlFor="sidebar-mobile-fixed"
              className="bg-[#197BBD] btn xl:hidden"
            >
              <RxHamburgerMenu />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
