import SectionHeader from '../sectionHeader/SectionHeader'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import styles from './contact.module.css'

export default function ContactMe(): JSX.Element {
    return (
        <div className={`${styles.container}`} id='contact'>
            <SectionHeader value='Get in Touch'/>
            <div className={styles.contactDetails}>
                <ContactDetails />
                <ContactForm />
            </div>
        </div>
    )
}