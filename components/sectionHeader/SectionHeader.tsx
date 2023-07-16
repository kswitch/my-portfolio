import styles from './sectionheader.module.css'

interface SectionHeaderProps {
    value: string
}

export default function SectionHeader (props: SectionHeaderProps): JSX.Element {
    const {value} = props
    
    return (
        <>
            <h2 className={styles.title}>{value}</h2>
            <span className={styles.border}></span>
        </>
    )
}