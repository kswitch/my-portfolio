import Hero from '@/components/hero/Hero'
import MyWorks from '@/components/works/MyWorks'
import Head from 'next/head'

export default function Home() {
  return <>
      <Head>
        <title>Kingsley&apos;s Portfolio</title>
        <meta name="description" content="Kingsley is a versatile Front-End engineer based in Lagos, Nigeria with specialty in React and NextJS. He also has a solid grip of the fundamentals of web development using HTML, CSS, and JavaScript. He loves to code using TypeScript" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link></link> Remeber to put a fav icon here*/}
      </Head>
      <main>
        <Hero />
        <MyWorks />
      </main>
    </>
}