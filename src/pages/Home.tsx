import Navbar from '../components/Navbar';
import Search from '../components/Search';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Home() {
  return (
    <div>
      <Navbar />
      <Search />

      <div className="container">
        <h1>Bienvenido a mi sitio web</h1>
        <p>Este es un ejemplo de contenido para la página de inicio.</p>
        <p>Puedes agregar más elementos, imágenes, enlaces y estilos según tus necesidades.</p>
        <button className="btn btn-primary">Botón de ejemplo</button>
      </div>
    </div>
  );
}

export default Home;
