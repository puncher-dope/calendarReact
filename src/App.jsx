import './App.css'
import { useEffect } from 'react'
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
      {/* <CalendarGfg/> */}
      <br />
      <br />
      <a href="https://www.appsheet.com/start/964ff124-11fb-4408-b51e-2978117a4f7a?platform=desktop#vss=H4sIAAAAAAAAA6WRTYoCMRCFryK1bjxAlv4wDKKLUdx0ZIh2NYSJnaY78YcmMAeYxey9hAizGtArxBtZ8YdxMRvtXVLF93jvVQULicuhEbMPYHH19-vhGhhUHEbrHDkwDm2dmUIrDhGHgZhfhn7rD8dP_-N_j18cHLionsZ7B42Q6iw1iW5SBktg1eNuWP1AEcgEMyNTiUXQCzTpXFlaB5IG9xy1AHNrxFTh2TxxjkbPFlEzxZ3SM2Gu-D-Z4E0vL378hogdEXu_a_jvJim9FNrmLVrGdMahLszt3cFUWGXGQtlw1XjiQjepntkSkzHlrJevfM26q1xkSV8nZDIVqkR3Ah4hKuLmAgAA&row=Лавров%20А.&view=апрель_Detail&appName=КопияГрафикПуриАзов-641903456">Link</a>
    </>
  )
}

export default App
