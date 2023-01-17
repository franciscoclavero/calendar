import { useAppSelector } from "../../redux/hooks/useAppSelector";
import styled from "./style.module.css";

interface InterfaceHeaderCell {
  title: string;
}

const HeaderCell = ({ title }:InterfaceHeaderCell )  => {
  const theme = useAppSelector(state => state.theme);
  const actualTheme = (theme.type === 'dark') ? theme.dark : theme.light;

  return (
    <div className={styled.cell} style={actualTheme}>{title}</div>
  );
};

export default HeaderCell;