import Button from '../button/Button'
import styles from './workitem.module.css'
import Link from 'next/link'
import Image from 'next/image'
import GitHubIcon from '../GitHubIcon'

interface WorkItemProps {
    imgSrc: string,
    imgAlt: string,
    title: string,
    excerpt: string,
    languages: string[],
    weblink: string,
    githubLink: string
}

export default function WorkItem(props: WorkItemProps): JSX.Element {
    const {title, excerpt, languages, weblink, githubLink, imgSrc, imgAlt} = props
    return (
        <div className={styles.container}>
            <div className={styles.workImage}>
                <Image src={imgSrc} alt={imgAlt} fill={true} className={styles.workImage}/>
            </div>
            <div className={styles.workDetails}>
                <h2>{title}</h2>
                <p>{excerpt}</p>
                <ul>
                    {languages.map(language => (<li key={language} className={styles.language}>&#9679; {language}</li>))}
                </ul>
                <div className={styles.workItemLinks}>
                    <Button
                        value="Visit Webite &rarr;"
                        style="workLink"
                        link={weblink}
                        target = "_blank"
                    />
                    <Link href={githubLink} target='_blank' title='Visit GitHub Link'>
                        <div className={styles.githubLink}>
                            <GitHubIcon />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}