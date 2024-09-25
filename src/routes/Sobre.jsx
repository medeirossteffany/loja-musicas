import '../css/SobreStyle.css';

const Sobre = () => {
  return (
    <>
      <div id='fundo-sobre'>
        <div id='sobre-texto'>
          <h2>Sobre a UpMusic</h2>
          <p>
            Há mais de 8 anos de mercado, a UpMusic é uma plataforma inovadora dedicada à venda de álbuns de artistas. Nossa missão é oferecer uma experiência de compra segura e acessível, conectando você a um vasto catálogo musical.
          </p>
          <p>
            Trabalhamos diretamente com gravadoras para garantir que todo o conteúdo seja licenciado e autêntico. 
          </p>
          <p>
            Na UpMusic, valorizamos a confiança e a satisfação dos nossos clientes. Compre álbuns digitais com facilidade e faça parte de uma comunidade que valoriza a música de forma transparente.
          </p>
          <button className="btn-primary-sobre">Confira Músicas</button>
        </div>
      </div>
    </>
  );
}

export default Sobre;


