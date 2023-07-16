import SectionHeader from '../sectionHeader/SectionHeader'
import WorkItem from './WorkItem'
import styles from './myworks.module.css'

export default function MyWorks (): JSX.Element {
    return (
        <div className={`${styles.container}`} id='works'>
            <SectionHeader value="My Works"/>
            <div className={styles.worksList}>
                <WorkItem 
                    imgSrc= "/images/quiz.jpg"
                    imgAlt= "Quizzical App Image"
                    title= "Quizzical App"
                    excerpt= "A Trivia App that is fun to play with friends. Pick your category and play."
                    languages={['HTML', 'CSS', 'JavaScript', 'React.JS']}
                    weblink="https://kswitch-quizzical-trivia-app.netlify.app"
                    githubLink="https://github.com/kswitch/quizzical-trivia-app"
                    priority= {true}
                />
                <WorkItem 
                    imgSrc= "/images/weather-forecast.png"
                    imgAlt= "Weather Forecast Image"
                    title= "Weather Forecast Website"
                    excerpt= "A weather forecast website built using Vite and React. You can check view the 5-day forecast for any city in the world"
                    languages={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.JS']}
                    weblink="https://kswitch-weather-forecast-website.netlify.app"
                    githubLink="https://github.com/kswitch/weather-forecast-website"
                />
                <WorkItem 
                    imgSrc= "/images/speed-typing.png"
                    imgAlt= "Speed Typing Game Image"
                    title= "Speed Typing Game"
                    excerpt= "A little web app to test your typing speed."
                    languages={['HTML', 'CSS', 'JavaScript', 'React.JS']}
                    weblink="https://kswitch-speed-typing-game.netlify.app"
                    githubLink="https://github.com/kswitch/speed-typing-game"
                />

                <WorkItem 
                    imgSrc= "/images/portfolio-webpage.png"
                    imgAlt= "Portfolio Image"
                    title= "My Portfolio"
                    excerpt= "A Portfolio built using Next.JS and TypeScript"
                    languages={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.JS']}
                    weblink="https://kswitch.netlify.app"
                    githubLink="https://github.com/kswitch/my-portfolio"
                    priority= {true}
                />
            </div>
        </div>
    )
}