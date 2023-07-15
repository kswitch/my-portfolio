import Hero from '@/components/hero/Hero'
import Wrapper from '@/components/paddingWrapper/Wrapper'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kingsley's Portfolio</title>
        <meta 
          name="description" 
          content="Kingsley is a versatile Front-End engineer based in Lagos, Nigeria with specialty in React and NextJS. 
            He also has a solid grip of the fundamentals of web development using HTML, CSS, and JavaScript. 
            He loves to code using TypeScript" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link></link> Remeber to put a fav icon here*/}
      </Head>
      <main>
        <Hero />

        <section className="work" id="work">
      <div className="row">
        <h2>My Work</h2>
        <div className="work__boxes">
          <div className="work__box">
            <div className="work__text">
              <h3>Personal Dashboard</h3>
              <p>
                A Chrome extension to help you focus and stay up-to-date.
              </p>
              <ul className="work__list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>

              <div className="work__links">
                <a href="https://nisar.surge.sh" target="_blank" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/nisarhassan12/portfolio" title="View Source Code" target="_blank">
                  <img src="./images/github.svg" className="work__code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src="./images/dashboard-2.png" className="work__image" alt="Project 1" />
            </div>
          </div>

          <div className="work__box">
            <div className="work__text">
              <h3>Password Generator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                eius.
              </p>
              <ul className="work__list">
                <li>React</li>
                <li>Next.js</li>
                <li>Node</li>
                <li>MongoDB</li>
              </ul>

              <div className="work__links">
                <a href="#" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="#">
                  <img src="./images/github.svg" className="work__code" title="View Source Code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src="./images/password.jpg" className="work__image" alt="Project 1" />
            </div>
          </div>

          <div className="work__box">
            <div className="work__text">
              <h3>Quizzical App</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                eius.
              </p>
              <ul className="work__list">
                <li>React</li>
                <li>Next.js</li>
                <li>Node</li>
                <li>MongoDB</li>
              </ul>

              <div className="work__links">
                <a href="#" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="#">
                  <img src="./images/github.svg" className="work__code" title="View Source Code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src="./images/quiz.jpg" className="work__image" alt="Project 3" />
            </div>
          </div>
        </div>
      </div>
        </section>

      </main>
    </>
  )
}
