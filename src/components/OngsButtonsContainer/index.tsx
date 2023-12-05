import React from "react";
import "./style.scss";
import {
	StreetLightWhite,
  //@ts-ignore
} from "brilho-icons";
import ButtonLink from "../ButtonLink";

type OngsButtonsContainerProps = {

};

const OngsButtonsContainer = (props: OngsButtonsContainerProps) => {
 

  return (
	  <div className="ong-buttons-container-component">
      <ButtonLink
        id="ong-1"
        text="Ong 1"
        image={StreetLightWhite}
        linkTo=""
      />
      <ButtonLink
        id="ong-2"
        text="Ong 2"
        image={StreetLightWhite}
        linkTo=""
      />
      <ButtonLink
        id="ong-3"
        text="Ong 3"
        image={StreetLightWhite}
        linkTo=""
			  />
    </div>
  );
};

export default OngsButtonsContainer;
