import React from "react";
import "./style.scss";

import {
	BrilhoLogoWhite
//@ts-ignore
} from "brilho-icons";
import ImageComp from "../../Image";

type HomeNavBarProps = {
};

const HomeNavBar = (props: HomeNavBarProps) => {
  const {
  } = props;

  return (
    <nav id="home-nav-bar">
      <a href="/home">
          <ImageComp
            logoImg={BrilhoLogoWhite}
            alt="Brilho logo"
          />
      </a>      
      </nav>
  );
};

export default HomeNavBar;
