import React from "react";
import "./style.scss";
import { ToolbarLink } from "../../../types/toolbarLink";

type ToolbarProps = {
  links: ToolbarLink[];
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  hide?: boolean;
};

const ToolbarDefault = (props: ToolbarProps) => {
  const { links, setSelected, hide = false } = props;
  return (
    <div id="toolbar" style={{ display: `${hide ? "none" : ""}` }}>
      {links.map((link, index) => (
        <div className="link-container" key={index}>
          <a
            className={link.selected ? "selected" : "non-selected"}
            id={link.id}
            href={link.routerTo}
            onClick={() => setSelected(link.id)}
          >
            <img
              src={link.selected ? link.selectedImg : link.img}
              alt={link.text}
            />
            <span>{link.selected ? "" : link.text}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ToolbarDefault;
