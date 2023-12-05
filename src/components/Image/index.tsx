import React from "react";

type ImageCompProps = {
  logoImg: string;
  alt: string;
  onClick?: (a: any) => void;
};

const ImageComp = (props: ImageCompProps) => {
  const { alt, logoImg, onClick } = props;

  return (
    <img
      onClick={onClick}
      id="img-brilho-component"
      src={logoImg}
      alt={alt}
    />
  );
};

export default ImageComp;
