import { NavLink } from "react-router-dom";
import logo from "/public/automotive_logo.svg";
import useAuth from "../../Hocks/useAuth";
import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Navbar = ({ handleToggleTheme }) => {
  const { user, userLogOut } = useAuth();

  const handleLogout = () => {
    userLogOut()
      .then(() => {
        console.log("sign out");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex flex-col  lg:flex-row items-center justify-between shadow-md lg:px-2">
      <img src={logo} className="h-24" alt="" />
      <ul className="flex justify-center items-center gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-500 font-semibold underline"
                : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myCarts"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-500 font-semibold underline"
                : ""
            }
          >
            My Carts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-500 font-semibold underline"
                : ""
            }
          >
            Add product
          </NavLink>
        </li>
        <li>
          <div className="dropdown dropdown-end lg:dropdown-hover mx-2">
            <div tabIndex={0} className="w-8 cursor-pointer">
              {user ? (
                <div className="w-8">
                  {user.photoURL ? (
                    <img
                      className="w-max h-max rounded-full"
                      src={user.photoURL}
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                    </svg>
                  )}
                </div>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                </svg>
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] lg:w-52 lg:p-2 shadow my-1 lg:my-0"
            >
              {user ? (
                <>
                  {user && (
                    <div className="border p-2 my-2 border-blue-gray-200">
                      <Typography className="text-xl text-center lg:my-2">
                        User:{" "}
                        <span className="font-bold">{user.displayName}</span>
                      </Typography>
                      <Typography className=" text-center lg:my-2">
                        <span className="font-bold">{user.email}</span>
                      </Typography>
                    </div>
                  )}
                  <li>
                    <NavLink onClick={handleLogout}>LogOut</NavLink>
                  </li>
                </>
              ) : (
                <div className="space-y-2">
                  <li className="text-xl text-center my-2">No user</li>
                  <li>
                    <NavLink to={"/login"}>Login</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/register"}>Register</NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </li>
        <label className="grid cursor-pointer place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            onClick={handleToggleTheme}
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </ul>
    </div>
  );
};

export default Navbar;
