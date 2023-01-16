import { ReactNode } from "react";
import styled from "./style.module.css";

interface InterfaceDescription {
  children: ReactNode | ReactNode[];
};

const DescriptionArea = ({ children }: InterfaceDescription) => {
  return (
    <div className={styled.body}>
      {
        children
      }
    </div>
  )
};

export default DescriptionArea;