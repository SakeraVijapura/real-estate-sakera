import Navbar from './navbar';
import Banner from './banner';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <header>

                {/* Banner */}
                <Banner />

                {/* Navbar */}
                <Navbar />
            </header>
        </div>
    );
};

export default Header;
