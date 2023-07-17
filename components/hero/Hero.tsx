import styles from './hero.module.css'
import Button from '../button/Button'

interface HeroProps {
    name: string
    excerpt: string
}

export default function Hero({name, excerpt}: HeroProps): JSX.Element {
    return (
        <div className={styles.hero} id='home'>
            <div className={styles.heroContent}>
                <h2>{name}</h2>
                <h5>{excerpt}</h5>
                <Button 
                    value="Get in Touch"
                    style="hero"
                    link="/#contact"
                />
            </div>
        </div>
    )
}