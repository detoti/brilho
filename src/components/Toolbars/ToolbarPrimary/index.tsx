import React, { useState } from "react";
import "./style.scss";
import Toolbar from "../ToollbarDefault";
import { ToolbarLink } from "../../../types/toolbarLink";
import {
  HouseFillGreen,
  HouseFillWhite,
  CouponGreen,
  CouponWhite,
  TransferArrowGreen,
  TransferArrowWhite,
  //@ts-ignore
} from "brilho-icons";

type ToolbarPrimaryProps = {
  selected: string | "none";
  hidden?: boolean;
};

const ToolbarPrimary = (props: ToolbarPrimaryProps) => {
  const { selected: link, hidden = false } = props;
  const [selected, setSelected] = useState(link);

  const linksToolbar: ToolbarLink[] = [
    {
      id: "1",
      text: "Início",
      img: HouseFillWhite,
      routerTo: "/home",
      selected: selected === "1" ? true : false,
      selectedImg: HouseFillGreen,
    },
    {
      id: "2",
      text: "Cupons",
      img: CouponWhite,
      routerTo: "/coupon",
      selected: selected === "2" ? true : false,
      selectedImg: CouponGreen,
    },
    {
      id: "3",
      text: "Cadastro",
      img: TransferArrowWhite,
      routerTo: "/coupon-submit",
      selected: selected === "3" ? true : false,
      selectedImg: TransferArrowGreen,
    },
  ];

  return (
    <Toolbar links={linksToolbar} setSelected={setSelected} hide={hidden} />
  );
};

export default ToolbarPrimary;
