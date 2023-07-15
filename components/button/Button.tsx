import styles from './button.module.css'
import Link from 'next/link'

interface ButtonProps {
    value: string
    style: string
    link?: string
    target?: string
}

export default function Button(props: ButtonProps): JSX.Element {
    const {value, style, link, target} = props
    return (
        <div className={`${styles.default} ${styles[style]}`}>
            <Link href={`${link}`} target={target}>
                {value}
            </Link>
        </div>
    )
}