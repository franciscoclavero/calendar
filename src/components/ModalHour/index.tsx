import styled from "./style.module.css";

interface InterfaceModalHour {
  top: number;
  left: number;
}

const ModalHour = ( { top, left }: InterfaceModalHour ) => {
  return (
    <div className={styled.item} style={{
      top: top,
      left: left
    }}>
      Reservado por 1 Hora
    </div>
  );
};

export default ModalHour;