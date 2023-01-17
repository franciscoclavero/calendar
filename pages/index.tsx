import styled from '@/pages/index.module.css'
import BodyCalendar from 'src/components/BodyCalendar'
import ToogleButton from 'src/components/ToogleButton';
import { useAppSelector } from 'src/redux/hooks/useAppSelector';

export default function Home() {
  const theme = useAppSelector(state => state.theme);
  console.log(theme.type);
  const actualTheme = (theme.type === 'dark') ? theme.dark : theme.light;

  return (
    <div className={styled.body} style={actualTheme}>
      <ToogleButton />
      <BodyCalendar />
    </div>
  )
}
