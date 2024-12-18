import style from './Navbar.module.css'
import Logo from '../../../assets/images/Logo.png'
import { NavLink } from 'react-router-dom'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    return (
        <div>
            {/* <nav className={style.navBar}>
                <div className=>
                </div>

                <ul className={style.navLinks}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#properties">Properties</a></li>
                    <li><a href="#services">Services</a></li>
                </ul>

                <button className={style.contactBtn}>Contact Us</button>
            </nav> */}

            <nav className={[style.navBar, "navbar navbar-expand-lg navbar-light"].join(' ')}>
                <div className="container-fluid">
                    <a className={[style.logo, "navbar-brand"].join(' ')} href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <button className={[style.togglerBtn, "navbar-toggler"].join(' ')} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <Bars3BottomRightIcon color='#ffffff' />
                        </span>
                    </button>
                    <div className={[style.custCollapse, "collapse navbar-collapse"].join(' ')} id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive && style.active} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive && style.active} to="/aboutus">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive && style.active} to="/properties">Properties</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive && style.active} to="/services">Services</NavLink>
                            </li>
                        </ul>
                        <div>
                            <button className={[style.contactUs, "btn btn-outline-light"].join(' ')} type="button">Contact Us</button>
                        </div>
                    </div>
                </div >
            </nav >
        </div >
    )
}

export default Navbar
