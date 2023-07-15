import WorkItem from './WorkItem'
import styles from './myworks.module.css'

export default function MyWorks (): JSX.Element {
    return (
        <div className={`${styles.container}`} id='works'>
            <h2 className={styles.title}>My Works</h2>
            <span className={styles.border}></span>
            <div className={styles.worksList}>
                <WorkItem 
                    imgSrc= "/images/quiz.jpg"
                    imgAlt= "Quizzical App Image"
                    title= "Quizzical App"
                    excerpt= "A Trivia App that is fun to play with friends. Pick your category and play."
                    languages={['HTML', 'CSS', 'JavaScript', 'React.JS']}
                    weblink="https://kswitch-quizzical-trivia-app.netlify.app"
                    githubLink="https://github.com/kswitch/quizzical-trivia-app"
                />
            </div>
        </div>
    )
}