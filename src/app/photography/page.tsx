import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import { shuffle } from '@/lib/shuffleArray'

export const metadata: Metadata = {
  title: 'Photos',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Photos() {
  const cache: Record<string, any> = {};

  function importAll(payload: __WebpackModuleApi.RequireContext) {
    payload.keys().forEach((key) => (cache[key] = payload(key)));
  }
  importAll(require.context("@/images/photos", false, /\.(png|jpe?g|svg|webp)$/));

  const imageListRaw = [...new Set(Object.entries(cache).map((module) => module[1].default))];

  const imageList = shuffle(imageListRaw)

  return (
    <SimpleLayout
      title="Here is a visual odyssey of mine"
      intro="I love all genres of photography, from breathtaking landscapes to intimate portraits, which become a way into the human experience. Enjoy!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {imageList.map((photo, index) => (
          <Card as="li" key={index}>
            <div className="relative z-10 flex h-full w-full max-h-[500px] min-h-[500px] items-center p-2 justify-center rounded-xl sm:rounded-2xl bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={photo.src}
                alt=""
                className="h-full w-full object-cover rounded-xl"
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
