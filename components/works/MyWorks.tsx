import styles from './myworks.module.css'

export default function MyWorks (): JSX.Element {
    return (
        <div className={`${styles.container}`} id='works'>
            <h2 className={styles.title}>My Works</h2>
            <span className={styles.border}></span>
            <div className={styles.worksList}>
            </div>
        </div>
    )
}