import React from "react";
import "./style.scss";
//@ts-ignore
import ImageComp from "../Image";
import { SadFaceWhite } from "brilho-icons";

type UserInfoBarProps = {
};

const UserInfoBar = (props: UserInfoBarProps) => {
  const { } = props;

  return (
    <div id="user-info-bar">
      <div className="text-container">
        <h2>
          #brilhoCupons{" "}
        </h2>
        <p>Com o Brilho, todos ficam felizes! Você resgata seu cupom e ainda ajuda quem precisa!</p>
      </div>
    </div>
  );
};

export default UserInfoBar;
