import { MouseEventHandler, useState } from "react";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import styled from "./style.module.css";

interface InterfaceHourArea {
  hour: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const HourArea = ({ hour, onClick }: InterfaceHourArea) => {
  const theme = useAppSelector(state => state.theme);
  const actualTheme = (theme.type === 'dark') ? theme.dark : theme.light;

  return (
    <div className={styled.body} onClick={onClick} style={actualTheme}>
      {hour}
    </div>
  )
};

export default HourArea;