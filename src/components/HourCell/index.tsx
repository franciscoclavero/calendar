import { useEffect, useState } from "react";
import DescriptionArea from "../DescriptionArea";
import HourArea from "../HourArea";
import ModalHour from "../ModalHour";

import styled from "./style.module.css";

interface InterfaceHourCell {
  dayWeek: string;
  hour: string;
}

const HourCell = ({ dayWeek, hour }: InterfaceHourCell) => {
  const [ modalShow, setModalShow ] = useState<true | false>(false);

  useEffect(() => {
    const keyStorage = dayWeek + '_' + hour;
    const storedModal = localStorage.getItem(keyStorage); 

    if (storedModal)
      setModalShow(JSON.parse(storedModal) ?? false);
  });

  const handleClickShow = () => {
    const keyStorage = dayWeek + '_' + hour;
    
    if (!modalShow) setModalShow(true);
    
    localStorage.setItem(keyStorage, JSON.stringify(true));
  };
  const handleClickHide = () => {
    const keyStorage = dayWeek + '_' + hour;
    
    if (modalShow) setModalShow(false);
    localStorage.setItem(keyStorage, JSON.stringify(false));
  }
  return (
    <div className={styled.body}> 
      <HourArea hour={hour} onClick={handleClickShow}/>
      <DescriptionArea>
        {
          modalShow &&
          <ModalHour onClick={handleClickHide} />
        }
      </DescriptionArea>
    </div>
  )
};

export default HourCell;