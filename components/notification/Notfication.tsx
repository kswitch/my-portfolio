// import { createPortal } from 'react-dom'
import styles from './notification.module.css'

interface NotificationProps {
    sendingState: string | null
    messageSentState: string
}
export default function Notification(props: NotificationProps): JSX.Element {
    const {sendingState, messageSentState} = props

    const notificationStyle: string | null = sendingState ? sendingState : ''

    // const notification = document.getElementById('notification')
    // return createPortal((
    //     <div className={`${styles.container} ${styles[notificationStyle]}`}>
    //         {messageSentState}
    //     </div>
    // ), notification)

    return (
        <div className={`${styles.container} ${styles[notificationStyle]}`}>
            {messageSentState}
        </div>
    )
}