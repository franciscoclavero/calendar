import styled from "./style.module.css";

interface InterfaceHeaderCell {
  title: string;
}

const HeaderCell = ({ title }:InterfaceHeaderCell )  => {
  return (
    <div className={styled.cell}>{title}</div>
  );
};

export default HeaderCell;