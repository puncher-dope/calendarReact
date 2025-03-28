import './App.css'
import { useEffect } from 'react'


const tg = window.Telegram.WebApp;
// if (tg) {
//   tg.ready();
//   console.log(tg.initDataUnsafe);
//   tg.MainButton.text = "Нажмите меня!";
//   tg.MainButton.show();
//   tg.MainButton.onClick(() => {
//     tg.close();
//   });
// } else {
//   console.log(tg);
// }
function App() {

  useEffect(() => {
    tg.ready()
  })

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
