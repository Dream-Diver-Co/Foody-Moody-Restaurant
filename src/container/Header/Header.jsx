import React from "react";

import "./Header.css";
import { images } from "../../constants";
import "../../constants/script";

const Header = () => (
  <div className="hero_section">
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="container">
      <div className="sun">
      
        <img src={images.foody_moody_logo} alt="sun" />
      </div>
      {/* <div class="mercury"></div>
      <div class="venus"></div>
      <div class="earth">
        <div class="moon"></div>
      </div>
      <div class="mars"></div>
      <div class="jupiter"></div>
      <div class="saturn"></div> */}
      <a href="https://dreamdiver.nl/" class="uranus-link">
      <div class="uranus"></div>
      </a>
      <a href="https://facebook.com/" class="uranus-link">
      <div class="neptune"></div>
      </a>
      <a href="https://google.com/" class="uranus-link">
      <div class="pluto"></div>
      </a>
    </div>
</div>
</div>
);

export default Header;
