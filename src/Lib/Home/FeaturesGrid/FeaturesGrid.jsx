import style from './FeaturesGrid.module.css'
import { ArrowUpRightIcon, ChatBubbleLeftRightIcon, HomeModernIcon, KeyIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'

const FeaturesGrid = () => {
    const features = [
        {
            title: 'Find Your Dream Home', icon: <HomeModernIcon />
        },
        { title: 'Unlock Property Value', icon: <KeyIcon /> },
        { title: 'Effortless Property Management', icon: <WrenchScrewdriverIcon /> },
        { title: 'Smart Investments, Informed Decisions', icon: <ChatBubbleLeftRightIcon /> },
    ];

    return (
        <section className={style.featuresGrid}>
            {features.map((feature, index) => (
                <div key={index}>
                    <div className={style.custCard}>
                        <ArrowUpRightIcon className={style.arrowIcon} />
                        <div className={style.iconContainer}>{feature.icon}</div>
                        <h5>{feature.title}</h5>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default FeaturesGrid
