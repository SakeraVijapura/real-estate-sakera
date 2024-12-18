import Navbar from './navbar';
import Banner from './banner';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>

            {/* Banner */}
            <Banner />

            {/* Navbar */}
            <Navbar />
        </header>
    );
};

export default Header;
