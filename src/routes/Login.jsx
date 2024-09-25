import '../css/LoginStyle.css';
import Logo from '../imgs/logo-sem-fundo.png';


const Login = () => {
  return (
    <>

      <div className="login-container">
        <div className="vinyl-login">
          <div className="label-login">
            <img src={Logo}></img>
          </div>
          <div className="blue-ring-login"></div>
        </div>
        <h1>Login</h1>
        <form className="login-form">
          <input type="text" placeholder="Usuário" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit" className="btn">Entrar</button>
        </form>
        <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
      </div>


    </>
  )
}
export default Login;