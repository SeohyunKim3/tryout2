import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/framefifteen">FrameFifteen</Link>
        </li>
        <li>
          <Link to="/frametwentyfour">FrameTwentyFour</Link>
        </li>
        <li>
          <Link to="/framethree">FrameThree</Link>
        </li>
        <li>
          <Link to="/framefour">FrameFour</Link>
        </li>
        <li>
          <Link to="/frameeight">FrameEight</Link>
        </li>
        <li>
          <Link to="/frametwenty">FrameTwenty</Link>
        </li>
        <li>
          <Link to="/frametwentyseven">FrameTwentySeven</Link>
        </li>
        <li>
          <Link to="/frametwentytwo">FrameTwentyTwo</Link>
        </li>
        <li>
          <Link to="/frameten">FrameTen</Link>
        </li>
        <li>
          <Link to="/frametwentythree">FrameTwentyThree</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;