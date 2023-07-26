import SectionHeader from '../sectionHeader/SectionHeader'
import styles from './aboutme.module.css'
import Image from 'next/image'

export default function AboutMe(): JSX.Element {
    return (
        <div className={`${styles.container}`} id='about'>
            <SectionHeader value='About Me'/>
            <div className={styles.details}>
                <div className={styles.imageDiv}>
                    <Image  className={styles.image} src={`/images/kingsleyPhoto.jpg`} alt={"Kingsley's Photo"} fill={true} priority={true} />
                </div>
                <div className={styles.description}>
                    I&apos;m a Frontend developer based in Lagos, Nigeria. 
                    I love building apps that solve real-world problems, and that are delightful to use. 
                    My specialities include HTML, CSS, JavaScript, TypeScript, React and Next.JS. 
                    <br/> <br/> 
                    My background is in Engineering, 
                    and I have a bachelor&apos;s degree in Gas Engineering from University of Port Harcourt, 
                    Rivers State, Nigeria.
                </div>
            </div>
        </div>
    )
}