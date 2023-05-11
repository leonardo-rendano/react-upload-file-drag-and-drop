import { InputFileProvider } from '@/context/FileInputContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <InputFileProvider>
      <Component {...pageProps} />
    </InputFileProvider>
  )
}
