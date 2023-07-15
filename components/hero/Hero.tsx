import styles from './hero.module.css'
import Button from '../button/Button'

export default function Hero(): JSX.Element {
    return (
        <div className={styles.hero} id='home'>
            <div className={styles.heroContent}>
                <h2>Kingsley Osuagwu-Chidiadi</h2>
                <h5>A Frontend Developer based in Lagos, Nigeria</h5>
                <Button 
                    value="Get in Touch"
                    style="hero"
                    link="contact"
                />
            </div>
        </div>
    )
}