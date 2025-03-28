import './App.css'
import { useEffect } from 'react'



function App() {
  const tg = window.Telegram.Web

  // useEffect(() => {
  //   tg.ready()
  // })

  const onClose = () => {
    tg.close()
  }

  return (
    <>
      <h1>Hello world!!</h1>
      <button onClick={onClose}>Закрыть</button>
    </>
  )
}

export default App
