import React from "react";
import "./style.scss";
// @ts-ignore
import { ArrowGrayRightSimple } from "brilho-icons";

type ButtonLinkProps = {
  linkTo?: string;
  image?: string;
  text?: string;
  backgroundColor?: string;
  onClick?: (a: any) => void;
  id: string;
  inLineElements?: boolean;
  hide?: boolean;
  arrowIcon?: boolean;
  skeleton?: boolean;
};

const ButtonLink = (props: ButtonLinkProps) => {
  const {
    id,
    linkTo,
    image,
    text,
    onClick,
    inLineElements = false,
    hide = false,
    arrowIcon = true,
    skeleton = false,
  } = props;
  return (
    <>
      {skeleton ? (
        <div
          className={`${
            inLineElements
              ? "inline-elements-skeleton"
              : "column-elements-skeleton"
          } skeleton-block skeleton-effect-wave`}
        ></div>
      ) : (
        <a
          onClick={onClick}
          id={id}
          className={`${
            inLineElements ? "inline-elements" : "column-elements"
          }`}
          href={linkTo}
          style={{
            display: `${hide ? "none" : ""}`,
          }}
        >
          <img src={image} alt={text} />
          <p>{text}</p>
          {inLineElements && arrowIcon && (
            <img src={ArrowGrayRightSimple} alt="arrow icon" />
          )}
        </a>
      )}
    </>
  );
};
export default ButtonLink;
