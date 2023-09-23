"use client"

import Image from 'next/image'
import { useState } from 'react';

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import { shuffle } from '@/lib/shuffleArray'

export default function Photography() {
  const cache: Record<string, any> = {};

  function importAll(payload: __WebpackModuleApi.RequireContext) {
    payload.keys().forEach((key) => (cache[key] = payload(key)));
  }
  importAll(require.context("@/images/photos", false, /\.(png|jpe?g|svg|webp)$/));

  const imageListRaw = [...new Set(Object.entries(cache).map((module) => module[1].default))];

  const imageList = shuffle(imageListRaw);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

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
          <Card
            as="li"
            key={index}
            onClick={() => toggleExpand(index)}
            className={`relative z-10 ${expandedIndex === index ? 'fixed top-0 left-0 w-full h-full bg-white' : ''
              }`}
          >
            <div className={`flex ${expandedIndex === index ? 'items-center justify-center h-screen' : 'items-start'
              } p-2 ${expandedIndex === index ? 'rounded-none' : 'rounded-xl'
              }`}>
              <Image
                src={photo.src}
                alt=""
                className={`object-cover ${expandedIndex === index ? 'w-full h-full' : 'max-h-[500px] min-h-[500px]'
                  } rounded-xl`}
                unoptimized
                width={photo.width}
                height={photo.height}
                priority={true}
              />
            </div>
            {/* <Card.Description>{photo.caption}</Card.Description> */}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
