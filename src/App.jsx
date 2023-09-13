
import { useState } from 'react'
import './App.css'
import CardList from './components/Cardlist/CardList'
import Cards from './components/Cards/Cards'
import Header from './components/Hedear/Header'

function App() {

  const [headline, setHeadline] = useState([])
  const redBtnClick = (title) =>{
    setHeadline([...headline, title])
  }

  const [timer, setTimer] = useState(0)
  const markTime = (time, id) =>{
    const total = timer + time;
    setTimer(total)
    const presentCard = headline.filter(i=> i.id !== id)
    setHeadline(presentCard)
  }
  return (
    <div className='max-w-screen-xl mx-auto mt-10'>
      <Header></Header>
      <div className='flex gap-8'>
      <Cards
      markTime={markTime}
      redBtnClick={redBtnClick}></Cards>
      <CardList timer={timer} headline={headline}></CardList>
      </div>
      
    </div>
  )
}

export default App
