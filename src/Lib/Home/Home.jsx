import FeaturesGrid from "./FeaturesGrid"
import HeroSection from "./HeroSection"
import style from "./Home.module.css"

const Home = () => {
    return (
        <div className={style.home}>
            {/* Hero Section */}
            <HeroSection />

            {/* Features Grid */}
            <FeaturesGrid />
        </div>
    )
}

export default Home
