import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import logo from "../../Utils/img/logo.png"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="nav-link" to={"/"}>
                <img className="imgLogo" src={logo} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNavDropdown">
                <ul className="navbar-nav justify-content-end align-items-center">
                    <li className="nav-item dropdown">
                        <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</p>
                        <ul className="dropdown-menu">
                            <li>
                            <Link className="nav-link" to={"/category/auriculares"}>
                                <p className="dropdown-item">Auriculares</p>
                            </Link>
                            </li>
                            <li>
                            <Link className="nav-link" to={"/category/monitores"}>
                                <p className="dropdown-item">Monitores</p>
                            </Link>
                            </li>
                            <li>
                            <Link className="nav-link" to={"/category/pcArmadas"}>
                                <p className="dropdown-item">PcArmadas</p>
                            </Link>
                            </li>
                            <li>
                            <Link className="nav-link" to={"/category/about"}>
                                <p className="dropdown-item">Acerca de Nosotros</p>
                            </Link>
                            </li>
                            <li>
                            <Link className="nav-link" to={"/category/contacto"}>
                                <p className="dropdown-item">Contacto</p>
                            </Link>
                            </li>
                        </ul>
                    </li>
                <li className="nav-item">
                    <p className="nav-link">Quién somos</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">Contacto</p></li>
                </ul>
            </div>
        </div>
    <CartWidget/>
</nav>
  )
}
