import { type Metadata } from 'next'
import dynamic from 'next/dynamic'


export const metadata: Metadata = {
  title: 'Photos',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

const Photography = dynamic(() => import('@/app/photography/photography'), {
  ssr: false,
})

export default function Page() {
  return <Photography />
}