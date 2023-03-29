import CartWidget from "../CartWidget/CartWidget"
import logo from "../../Utils/img/logo.png"

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="...">
                <img className="imgLogo" src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="..." role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="../../Helpers/pages/pcArmadas.html">PC Armadas</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="../../Helpers/pages/teclados.html">Teclados</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="../../Helpers/pages/auriculares.html">Auriculares</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="../../Helpers/pages/monitores.html">Monitores</a>
                            </li>
                        </ul>
                    </li>
                <li className="nav-item">
                    <a className="nav-link" href="../../Helpers/pages/about.html">Quién somos</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="../../Helpers/pages/contacto.html">Contacto</a></li>
                </ul>
            </div>
        </div>
    <CartWidget/>
</nav>

)
}
export default NavBar