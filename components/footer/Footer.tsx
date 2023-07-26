import Link from 'next/link'
import GitHubIcon from '../icons/GitHubIcon'
import TwitterIcon from '../icons/TwitterIcon'
import Wrapper from '../paddingWrapper/Wrapper'
import styles from './footer.module.css'
import LinkedInIcon from '../icons/LinkedInIcon'

export default function Footer(): JSX.Element {
    return (
        <Wrapper styles={['padding-sm', 'footerStyles']}>
            <div className={styles.container}>
                <div className={styles.link}>
                    <Link href='https://www.github.com/kswitch' target='_blank'>
                        <GitHubIcon iconTitle='Visit My GitHub Page'/>
                    </Link>
                </div>
                <div className={styles.link}>
                    <Link href='https://www.twitter.com/k__switch' target='_blank'>
                        <TwitterIcon iconTitle='Visit My Twitter Page' />
                    </Link>
                </div>
                <div className={styles.link}>
                    <Link href='https://www.linkedin.com/in/kswitch' target='_blank'>
                        <LinkedInIcon iconTitle='Visit My LinkedIn Page' />
                    </Link>
                </div>
            </div>
        </Wrapper>
    )
}