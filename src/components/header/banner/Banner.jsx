import { XMarkIcon } from '@heroicons/react/24/solid'
import style from './Banner.module.css'


const Banner = () => {
    return (
        <div className={style.announcementBar}>
            <div>
                <p>
                    Discover Your Dream Property with Estatein
                    <a href="#learnMore" className={style.learnMore}>Learn More</a>
                </p>
            </div>
            <button className={style.closeBtn}><XMarkIcon color='#ffffff' /></button>
        </div>
    )
}

export default Banner
