import { useState } from "react";
import DescriptionArea from "../DescriptionArea";
import HourArea from "../HourArea";
import ModalHour from "../ModalHour";

import styled from "./style.module.css";

interface InterfaceHourCell {
  hour: string;
}

const HourCell = ({ hour }: InterfaceHourCell) => {
  const [ modalShow, setModalShow ] = useState<boolean>(false);

  const handleClick = () => {
    if (!modalShow) setModalShow(!modalShow);
  };

  return (
    <div className={styled.body}> 
      <HourArea hour={hour} onClick={handleClick}/>
      <DescriptionArea>
        {
          modalShow &&
          <ModalHour top={0} left={1} />
        }
      </DescriptionArea>
    </div>
  )
};

export default HourCell;