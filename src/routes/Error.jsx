import '../css/ErrorStyle.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Error = () => {
    return (
        <div className="body">
            

            
                <Nav></Nav>
                <div className="container">
                    <div className="vinyl-error">
                        <div className="label-error">
                            <span>404</span>
                            <p>Página Não Encontrada</p>
                        </div>
                        <div className="blue-ring-error"></div>
                    </div>
                    <h1>Ops! Esta página está fora do ritmo.</h1>
                    <p>Que tal voltar para a <a href="/">página inicial</a>?</p>
                </div>
                <Footer></Footer>
            

            

        </div>
    )
}

export default Error;