import './App.css'
// import { useEffect } from 'react'
// import Auth from './Auth';
// import CalendarGfg from './CalendarGfg';

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
export default function App() {

  useEffect(() => {
    tg.ready()
  })

  const onClose = () => {
    tg.close()
  }

  return (
    <>

      {/* <Auth /> */}
      {/* <h1>Hello world!!</h1> */}
      {/* <button onClick={onClose}>Закрыть</button> */}
      {/* <CalendarGfg/> */}
    </>
  )
}

