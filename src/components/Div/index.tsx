import React, { ReactNode } from "react";
import "./style.scss";

type DivProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Div = (props: DivProps) => {
  const { children, className, id } = props;
  return (
    <div id={id} className={`default-div ${className}`}>
      {children}
    </div>
  );
};

export default Div;
