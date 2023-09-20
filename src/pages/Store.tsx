import Navbar from '../components/Navbar';
import Search from '../components/Search';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Store() {
    return (
        <div>
            <Navbar />
            <Search />

            <div className="container">
                <h1>esta el la tienda virtual</h1>
                <p>Este es un ejemplo de contenido para la página de inicio.</p>
                <p>Puedes agregar más elementos, imágenes, enlaces y estilos según tus necesidades.</p>
                <button className="btn btn-primary">Botón de ejemplo de tienda virtual</button>
            </div>
        </div>
    )
}

export default Store