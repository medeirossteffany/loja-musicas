import '../css/CadastroStyle.css';
import Logo from '../imgs/logo-sem-fundo.png';


const Cadastro = () => {

    return (
        <>
            <div className="register-container">
                <div className="vinyl-cadastro">
                    <div className="label-cadastro">
                        <img src={Logo}></img>
                    </div>
                    <div className="blue-ring-cadastro"></div>
                </div>
                <h1>Cadastro</h1>
                <form className="register-form">
                    <input type="text" placeholder="Nome de Usuário" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Senha" required />
                    <input type="password" placeholder="Confirmar Senha" required />
                    <button type="submit" className="btn">Cadastrar</button>
                </form>
                <p>Já tem uma conta? <a href="/login">Faça login</a></p>
            </div>

        </>
    )

}

export default Cadastro;