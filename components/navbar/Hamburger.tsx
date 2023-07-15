import styles from './hamburger.module.css'

export default function Hamburger():JSX.Element {
    return (
        <div className={styles.hamburger}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </div>
    )
}