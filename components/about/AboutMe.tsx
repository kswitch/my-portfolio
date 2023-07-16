import SectionHeader from '../sectionHeader/SectionHeader'
import styles from './aboutme.module.css'
import Image from 'next/image'

export default function AboutMe(): JSX.Element {
    return (
        <div className={`${styles.container}`} id='about'>
            <SectionHeader value='About Me'/>
            <div className={styles.details}>
                <div className={styles.image}>
                    <Image src={`/images/kingsley.png`} alt={"Kingsley's Photo"} fill={true} priority={true} />
                    {/* Replace the image above. It is currently a placeholder image */}
                </div>
                <div className={styles.description}>
                    I&apos;m a web developer and designer based out of Lagos, Nigeria. I love building apps that solve real-world problems, and that are delightful to use. My specialities include HTML, CSS, JavaScript, React, TypeScript and Next JS. <br/> <br/> My background is in Engineering, and I have a bachelors degree in Gas Engineering from University of Port Harcourt, Rivers State, Nigeria.
                </div>
            </div>
        </div>
    )
}
