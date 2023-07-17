import styles from './sectionheader.module.css'

export default function SectionHeader ({value}: {value:string}): JSX.Element {    
    return (
        <>
            <h2 className={styles.title}>{value}</h2>
            <span className={styles.bottomBorder}></span>
        </>
    )
}