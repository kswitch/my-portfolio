import Button from '../button/Button'
import styles from './workitem.module.css'
import Link from 'next/link'
import Image from 'next/image'
import GitHubIcon from '../icons/GitHubIcon'

interface WorkItemProps {
    imgSrc: string,
    imgAlt: string,
    title: string,
    excerpt: string,
    languages: string[],
    weblink: string,
    githubLink: string,
    priority?: boolean | undefined
}

export default function WorkItem({
    title, 
    excerpt, 
    languages, 
    weblink, 
    githubLink, 
    imgSrc, 
    imgAlt, 
    priority
}: WorkItemProps): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.workImage}>
                <Image 
                    src={imgSrc} 
                    alt={imgAlt} 
                    fill={true} 
                    className={styles.workImage}
                    sizes="(max-width: 800px) 36rem, (min-width: 801px) 36rem"
                    priority={priority}
                />
            </div>
            <div className={styles.workDetails}>
                <h2>{title}</h2>
                <p>{excerpt}</p>
                <ul>
                    {languages.map(language => (<li key={language} className={styles.language}>&#9679; &nbsp;{language}</li>))}
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