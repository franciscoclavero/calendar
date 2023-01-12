import styled from '@/pages/index.module.css'
import BodyCalendar from 'src/components/BodyCalendar'



export default function Home() {
  return (
    <div className={styled.body}> 
      <BodyCalendar />
    </div>
  )
}
