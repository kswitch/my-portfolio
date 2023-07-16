import SectionHeader from '../sectionHeader/SectionHeader'
import styles from './contact.module.css'

export default function ContactMe(): JSX.Element {
    return (
        <div className={`${styles.container}`} id='contact'>
            <SectionHeader value='Get in Touch'/>
        </div>
    )
}