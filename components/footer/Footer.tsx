import Wrapper from '../paddingWrapper/Wrapper'
import styles from './footer.module.css'

export default function Footer(): JSX.Element {
    return (
        <Wrapper>
            <div className={styles.container}>
                Footer
            </div>
        </Wrapper>
    )
}