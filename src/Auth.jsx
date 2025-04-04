import "./App.css";
export default function Auth() {
  return (<>
    <form action="">
      <div className="wrapper-form">
        <h2>Вход в систему</h2>
        <input type="text" name="" id="login" placeholder="Введите логин" />
        <input type="password" name="" id="pass" placeholder="Введите пароль" />
        <button type="submit">Войти</button>
        <a href="#">Забыли пароль?</a>
      </div>
    </form>
  </>)
}




