import { ReactNode } from 'react'

import styles from './wrapper.module.css'

export default function Wrapper({children}: {children: ReactNode}): JSX.Element {
    return (
        <div className={`${styles.padding}`}>
            {children}
        </div>
    )
}