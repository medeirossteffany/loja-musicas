import '../css/MusicasStyle.css';

const Musicas = () => {
  return (
    <section className='mainSection'>
      <h2>Músicas</h2>
      <main className='cardMusicaContainer'>

        <div className="card">
          <div className="image_container">
            <img className='image' src="https://images.tcdn.com.br/img/img_prod/435678/lp_vinil_linkin_park_hybrid_theory_8005_1_3182aadfb04c191cd270e32399a4ac3c.jpg" alt="" />
          </div>
          <div className="title">
            <span>Link Park Hybrid Theory</span>
          </div>
          <div className="size">
            <span>Categorias</span>
            <ul className="list-size">
              <li className="item-list"><button className="item-list-button">Nu metal</button></li>
              <li className="item-list"><button className="item-list-button">Alt rock</button></li>
            </ul>
          </div>
          <div className="action">
            <div className="price">
              <span>R$299</span>
            </div>
            <button className="cart-button">
              <svg
                className="cart-icon"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Comprar</span>
            </button>
          </div>
        </div>
        
        <div className="card">
          <div className="image_container">
            <img className='image' src="https://cdn.shopify.com/s/files/1/0105/4542/products/gorillaz-demondays_1200x.jpg?v=1524582819" alt="" />
          </div>
          <div className="title">
            <span>Gorillaz Demon days</span>
          </div>
          <div className="size">
            <span>Categorias</span>
            <ul className="list-size">
              <li className="item-list"><button className="item-list-button">Trip hop</button></li>
              <li className="item-list"><button className="item-list-button">Rap</button></li>
            </ul>
          </div>
          <div className="action">
            <div className="price">
              <span>R$299</span>
            </div>
            <button className="cart-button">
              <svg
                className="cart-icon"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Comprar</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image_container">
            <img className='image' src="https://th.bing.com/th/id/OIP.h-2F4w3D5rR0DEXoDpgXiQHaHa?rs=1&pid=ImgDetMain" alt="" />
          </div>
          <div className="title">
            <span>Cartola 1976</span>
          </div>
          <div className="size">
            <span>Categorias</span>
            <ul className="list-size">
              <li className="item-list"><button className="item-list-button">MPB</button></li>
              <li className="item-list"><button className="item-list-button">Samba</button></li>
            </ul>
          </div>
          <div className="action">
            <div className="price">
              <span>R$299</span>
            </div>
            <button className="cart-button">
              <svg
                className="cart-icon"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Comprar</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image_container">
            <img className='image' src="https://http2.mlstatic.com/D_NQ_NP_734755-MLU69125972265_042023-O.webp" alt="" />
          </div>
          <div className="title">
            <span>Pitty Anacronico</span>
          </div>
          <div className="size">
            <span>Categorias</span>
            <ul className="list-size">
              <li className="item-list"><button className="item-list-button">Hard rock</button></li>
              <li className="item-list"><button className="item-list-button">Alt rock</button></li>
            </ul>
          </div>
          <div className="action">
            <div className="price">
              <span>R$299</span>
            </div>
            <button className="cart-button">
              <svg
                className="cart-icon"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Comprar</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image_container">
            <img className='image' src="https://i.ebayimg.com/images/g/gUgAAOSwSONixyQa/s-l1600.jpg" alt="" />
          </div>
          <div className="title">
            <span>Billie Elish don't smile at me</span>
          </div>
          <div className="size">
            <span>Categorias</span>
            <ul className="list-size">
              <li className="item-list"><button className="item-list-button">Electropop</button></li>
              <li className="item-list"><button className="item-list-button">Hip Hop</button></li>
            </ul>
          </div>
          <div className="action">
            <div className="price">
              <span>R$299</span>
            </div>
            <button className="cart-button">
              <svg
                className="cart-icon"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Comprar</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image_container">
            <img className='image' src="https://m.media-amazon.com/images/I/51BZVcGK8IL._AC_SX522_.jpg" alt="" />
          </div>
          <div className="title">
            <span>Angra Cycles of pain</span>
          </div>
          <div className="size">
            <span>Categorias</span>
            <ul className="list-size">
              <li className="item-list"><button className="item-list-button">Power metal</button></li>
            </ul>
          </div>
          <div className="action">
            <div className="price">
              <span>R$299</span>
            </div>
            <button className="cart-button">
              <svg
                className="cart-icon"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Comprar</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image_container">
            <img className='image' src="https://images-na.ssl-images-amazon.com/images/I/7115nyXjFqL._SL1329_.jpg" alt="" />
          </div>
          <div className="title">
            <span>Joji Ballads</span>
          </div>
          <div className="size">
            <span>Categorias</span>
            <ul className="list-size">
              <li className="item-list"><button className="item-list-button">R&B</button></li>
              <li className="item-list"><button className="item-list-button">Trip hop</button></li>
            </ul>
          </div>
          <div className="action">
            <div className="price">
              <span>R$299</span>
            </div>
            <button className="cart-button">
              <svg
                className="cart-icon"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Comprar</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image_container">
            <img className='image' src="https://th.bing.com/th/id/OIP.EeDAVxfzWTqbHNTbO2cVsgHaFj?rs=1&pid=ImgDetMain" alt="" />
          </div>
          <div className="title">
            <span>The neighbourhood hard to imagine</span>
          </div>
          <div className="size">
            <span>Categorias</span>
            <ul className="list-size">
              <li className="item-list"><button className="item-list-button">Indie rock</button></li>
            </ul>
          </div>
          <div className="action">
            <div className="price">
              <span>R$299</span>
            </div>
            <button className="cart-button">
              <svg
                className="cart-icon"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Comprar</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image_container">
            <img className='image' src="https://i5.walmartimages.com/seo/Evanescence-Fallen-20th-Anniversary-Edition-Deluxe-Edition-Pink-Black-Marble-Colored-Vinyl-2-LP_48b5a4ba-ce7c-4861-8f3a-1c891e32404c.540864ada3af8a65464d1e092d979b01.jpeg" alt="" />
          </div>
          <div className="title">
            <span>Evanescence Fallen</span>
          </div>
          <div className="size">
            <span>Categorias</span>
            <ul className="list-size">
              <li className="item-list"><button className="item-list-button">Alt rock</button></li>
            </ul>
          </div>
          <div className="action">
            <div className="price">
              <span>R$299</span>
            </div>
            <button className="cart-button">
              <svg
                className="cart-icon"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Comprar</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image_container">
            <img className='image' src="https://th.bing.com/th/id/OIP.cSPWA5wUlvfqLI6eSdw9jQHaHa?rs=1&pid=ImgDetMain" alt="" />
          </div>
          <div className="title">
            <span>Fleetwood mac Rumours</span>
          </div>
          <div className="size">
            <span>Categorias</span>
            <ul className="list-size">
              <li className="item-list"><button className="item-list-button">Rock</button></li>
            </ul>
          </div>
          <div className="action">
            <div className="price">
              <span>R$299</span>
            </div>
            <button className="cart-button">
              <svg
                className="cart-icon"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </main>
    </section>
  )
}
export default Musicas;