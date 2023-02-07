import React from "react";
import { Link } from "react-router-dom";

import Search from "../../components/Search/Search";

import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        src="https://you.com/_next/image?url=https%3A%2F%2Fcdn.you.com%2Fimg%2Fshared%2Flanding-page%2Fbackground-default-dark.png&w=828&q=75"
        className="gradient__upper"
        alt=""
      />
      <div className="home__header">
        <div className="home__headerLeft">
          <Link className="ABout_store" to="/about">About</Link>
          <Link className="ABout_store" to="/store">Store</Link>
          <div className="circle_pattern">
          <AppsIcon clasName="pattern_images" />
          </div>
        </div>
        <div className="home__headerRight">
          <Link className="login" to="/login">
            Log In
          </Link>
          <Link className="name" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://you.com/images/ydc-logo-lightdarkmode.svg"
          alt="Logo"
        />
        <div className="about">
            Search Engine Made By Amritanshu
        </div>
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
