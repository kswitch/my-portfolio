import { useEffect, useState, FormEvent} from 'react'
import styles from './contactform.module.css'
import fetchRequest from '@/helpers/fetchRequest'
import Notification from '../notification/Notfication'

export default function ContactForm(): JSX.Element {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sendingState, setSendingState] = useState<string | null>(null)
    const [messageSentState, setMessageSentState] = useState<string>('')

    useEffect(() => {
        if (sendingState == 'success' || sendingState == 'error') {
            const timer = setTimeout(() => {
                setSendingState(null)
                setMessageSentState('')
            }, 2500)

            return () => clearTimeout(timer)
        }
    },[sendingState])

    async function handleSubmit (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const messageBody = {
            name: name,
            email: email,
            message: message
        }

        setSendingState('pending')
        setMessageSentState('Sending Message...');

        try {
            const data = await fetchRequest('/api/contact', 'POST', messageBody)
            setSendingState('success')
            setName('')
            setEmail('')
            setMessage('')
            setMessageSentState(data.message);
        }
        catch(error: any) {
            setSendingState('error')
            setMessageSentState(error.message || 'Message could not be sent')
        }
    }    

    return (
        <div className={styles.container}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formInputs}>
                    <div className={styles.input}>
                        <label htmlFor='name'>Your Name: </label>
                        <input
                            type='text'
                            className={styles.inputField} 
                            id='name' 
                            placeholder='Full Name' 
                            value={name}
                            required 
                            onChange={(e) => setName(e.target.value)}     
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='email'>Email: </label>
                        <input 
                            type='text' 
                            id='email' 
                            className={styles.inputField}
                            placeholder='Email Address' 
                            value={email}
                            required 
                            onChange={(e) => setEmail(e.target.value)}      
                        />
                    </div>
                    <div className={`${styles.input}`}>
                        <label htmlFor='message'>Message: </label>
                        <textarea 
                            id='message' 
                            className={`${styles.textArea} ${styles.inputField}`}
                            placeholder='Your Message Here' 
                            value={message}
                            required 
                            onChange={(e) => setMessage(e.target.value)}
                            rows={10}
                        >
                        </textarea>
                    </div>
                </div>
                <button className={styles.contactBtn}>Send Message</button>
            </form>
            { sendingState && <Notification sendingState={sendingState} messageSentState={messageSentState} /> }
        </div>
    )
}