import { MouseEventHandler, useState } from "react";
import ModalHour from "../ModalHour";
import styled from "./style.module.css";

interface InterfaceHourArea {
  hour: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const HourArea = ({ hour, onClick }: InterfaceHourArea) => {
  return (
    <div className={styled.body} onClick={onClick}>
      {hour}
    </div>
  )
};

export default HourArea;