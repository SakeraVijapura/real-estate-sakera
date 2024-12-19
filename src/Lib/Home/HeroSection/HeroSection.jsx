import style from './HeroSection.module.css';
import HeroImg from '../../../assets/images/heroImg.png'

const HeroSection = () => {
    return (
        <section className={style.heroSection}>
            {/* Left Content */}
            <div className={style.banner}>
                <div className={style.content}>
                    <h2>Discover Your Dream <br />Property with Estatein</h2>
                    <p className="lead">
                        Your journey to finding the perfect property begins here. Explore our listings to find
                        the home that matches your dreams.
                    </p>
                </div>

                <div className={style.heroBtnWrapper}>
                    <button className={[style.lightBtn, "btn btn-outline-light"].join(' ')}>Learn More</button>
                    <button className={[style.purpleBtn, "btn btn-primary"].join(' ')} > Browse Properties</button>
                </div>
                {/* Stats */}
                <div className={style.heroStatItemWrapper}>
                    <div className={style.heroStatItem}>
                        <h3 className="fw-bold">200+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className={style.heroStatItem}>
                        <h3 className="fw-bold">10k+</h3>
                        <p>Properties For Clients</p>
                    </div>
                    <div className={[style.heroStatItem, style.thirdCard].join(' ')}>
                        <h3 className="fw-bold">16+</h3>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className={style.heroImgWrapper}>
                <img
                    src={HeroImg}
                    alt="Skyscrapers"
                    className="img-fluid"
                />
            </div>
        </section >
    );
};

export default HeroSection;

