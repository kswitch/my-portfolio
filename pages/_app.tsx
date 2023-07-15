import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar/Navbar'
import { Fragment } from 'react'
import Wrapper from '@/components/paddingWrapper/Wrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Fragment> 
  )
}
