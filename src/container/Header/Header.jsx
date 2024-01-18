import React from "react";

import "./Header.css";
import { images } from "../../constants";
import "../../constants/script";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="container">
      <div className="sun">
        <img src={images.sun} alt="sun" />
      </div>
      <div class="mercury"></div>
      <div class="venus"></div>
      <div class="earth">
        <div class="moon"></div>
      </div>
      <div class="mars"></div>
      <div class="jupiter"></div>
      <div class="saturn"></div>
      <div class="uranus"></div>
      <div class="neptune"></div>
      <div class="pluto"></div>
    </div>
</div>
);

export default Header;
