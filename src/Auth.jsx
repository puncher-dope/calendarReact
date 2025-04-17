// import "./App.css";
// import { useState } from "react"
// // function replace() {

// // }

// export default function Auth() {

//   const Logins = ['89001278047', '89081947098']
//   const Passwords = ['737792864', '737792865']

//   const [login, setLogin] = useState('')
//   const [shown, setShown] = useState(false)
//   const [pass, setPass] = useState('')
//   console.log('Login is:', login, 'Password is:', pass)

//   function handleClick() {
//     if (Logins.includes(login) & Passwords.includes(pass)) {
//       window.location.replace('https://www.appsheet.com/start/964ff124-11fb-4408-b51e-2978117a4f7a?platform=desktop#vss=H4sIAAAAAAAAA6WOvQ3CMBBGd7naE7hFFAhBA6LBFCa-SBaJHcUOEFmWGIBhaKgoWMHZiAs_ghYo7zu9pxdgq3E38zLbAF-G9zXGFjgEAfO2QgFcwMAaX9tCABMwleVjTKd07Q7pnC7dUUCEuGIvh0cHPHyv4P9XMNAKjde5xrr39TR5niy9e5KGTw4ig7Lxcl3gPZ64GGnLbdY4VAtK-jHFjcxwX0mjJlaRNpeFw3gDohx5gHkBAAA=&view=апрель&appName=КопияГрафикПуриАзов-641903456')
//       console.log('Success')
//     } else {
//       return console.log('Error!', { login });
//     }
//   }

//   function showPass() {
//     setShown(shown ? false : true)
//   }

//   return (<>
//     <form action="#">
//       <div className="wrapper-form">
//         <h2>Вход в систему</h2>
//         <input id="login" type="text" placeholder="Введите логин" value={login} onChange={e => setLogin(e.target.value)} />
//         <input id="pass" type={shown ? 'text' : 'password'} placeholder="Введите пароль" value={pass} onChange={e => setPass(e.target.value)} />
//         <button onClick={showPass}>Посмотреть пароль</button>

//         <button type="submit" onClick={handleClick} >Войти</button>
//         <a href="#">Забыли пароль?</a>
//       </div>
//     </form>
//   </>)
// }




