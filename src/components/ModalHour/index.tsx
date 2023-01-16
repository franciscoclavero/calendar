import { MouseEventHandler } from "react";
import styled from "./style.module.css";

interface InterfaceModalHour {
  onClick: MouseEventHandler<HTMLSpanElement>;
}

const ModalHour = ( { onClick }: InterfaceModalHour ) => {
  return (
    <div className={styled.item}>
      Reservado por 1 Hora
      <span className={styled.close} onClick={onClick}>X</span>
    </div>
  );
};

export default ModalHour;