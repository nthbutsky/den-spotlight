import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

import { shuffle } from '@/lib/shuffleArray'

export default function Photos() {
  const cache: Record<string, any> = {}

  function importAll(payload: __WebpackModuleApi.RequireContext) {
    payload.keys().forEach((key) => (cache[key] = payload(key)))
  }
  importAll(
    require.context(
      '@/images/photos/photography',
      false,
      /\.(png|jpe?g|svg|webp)$/,
    ),
  )

  const imageListRaw = [
    ...new Set(Object.entries(cache).map((module) => module[1].default)),
  ]

  const imageList = shuffle(imageListRaw)

  return (
    <SimpleLayout>
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          <TextGenerateEffect words="A visual journey through my lens" />
        </h1>
        <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <TextGenerateEffect words="I’m passionate about all genres of photography, from awe-inspiring landscapes to intimate portraits, each offering a unique window into the human experience. Enjoy the journey!" />
        </div>
      </header>
      <ul
        role="list"
        className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3"
      >
        {imageList.map((photo, index) => (
          <Card as="li" key={index}>
            <div className="relative z-10 flex h-full max-h-[500px] min-h-[500px] w-full items-center justify-center rounded-xl bg-white p-2 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 sm:rounded-2xl">
              <Image
                src={photo.src}
                alt=""
                className="h-full w-full rounded-xl object-cover"
                unoptimized
                width={photo.width}
                height={photo.height}
              />
            </div>
            {/* <Card.Description>{photo.caption}</Card.Description> */}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
