'use client'

import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useState, useRef } from 'react'

import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPersonDigging,
  faPlus,
  faCloudArrowDown,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import ContactForm from '@/components/ContactForm'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

import logoUbc from '@/images/logos/ubc.svg'
import logoConvidera from '@/images/logos/convidera.svg'
import logoFreelance from '@/images/logos/freelance.svg'
import logoCloudmade from '@/images/logos/cloudmade.svg'
import logoUsEmbassy from '@/images/logos/us-embassy.svg'
import logoPolandConsulate from '@/images/logos/poland-consulate.svg'
import logoVfs from '@/images/logos/vfs.svg'
import image1 from '@/images/photos/homepage/1.webp'
import image2 from '@/images/photos/homepage/2.webp'
import image3 from '@/images/photos/homepage/3.webp'
import image4 from '@/images/photos/homepage/4.webp'
import image5 from '@/images/photos/homepage/5.webp'
import portraitImage from '@/images/portrait.webp'

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: IconDefinition
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <FontAwesomeIcon
        icon={Icon}
        className="h-6 w-6 text-zinc-500 transition group-hover:text-red-500 dark:text-zinc-400 dark:group-hover:text-red-400"
      />
    </Link>
  )
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="h-7 w-7 rounded-full"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  const itemList = [
    {
      image: image1,
      text: 'USA',
    },
    {
      image: image2,
      text: 'UAE',
    },
    {
      image: image3,
      text: 'Slovenia',
    },
    {
      image: image4,
      text: 'Romania',
    },
    {
      image: image5,
      text: 'France',
    },
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {itemList.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[itemIndex % rotations.length],
            )}
          >
            <DirectionAwareHover
              imageUrl={item.image.src}
              imageClassName="absolute inset-0 h-full w-full object-cover"
            >
              {/* <p className="text-xl font-bold opacity-50">{item.text}</p> */}
            </DirectionAwareHover>
          </div>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="grid grid-cols-1">
      <div className="lg:order-first lg:row-span-2">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          <TextGenerateEffect words="Crafting Code, Capturing Moments, and Fueling Curiosity." />
        </h2>
        <div className="text mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            Hey there! I am a dynamic professional who thrives at the
            intersection of creativity and technology. My journey is guided by a
            set of values and skills that define not only my career but also my
            approach to life.
          </p>
          <p>
            I have loved making things for as long as I can remember, especially
            fixing them. I thrive in the world of tech crafting seamless and
            efficient web experiences. I pay meticulous attention to detail,
            ensuring that every pixel and interaction is finely tuned. I am
            always at the forefront of the latest trends and best practices in
            the field. I am fluent in variety of web tech, ensuring a holistic
            approach to web development. My dev journey began when I
            transitioned into the IT industry, landing a coveted position at the
            prestigious German agency. This marked the start of my fulfilling
            career in web development. Before diving headfirst into coding, I
            climbed the managerial and analyst ladder in foreign affairs and
            government sectors, reaching the position of supervisor. This
            experience made me a well-rounded professional and equipped me with
            valuable leadership, teamwork and many more soft skills, which I now
            bring to my programming career pushing the boundaries and delivering
            outstanding results.
          </p>
          <p>
            Outside of the professional realm, I am a passionate individual with
            diverse interests. I have a keen eye for photography and
            cinematography, often capturing the beauty of the world through my
            lens. My love for DIY projects, handcrafting, 3D-printing, and
            automation keeps my creative juices flowing. I am also a devoted
            enthusiast of cars, bikes, engines, and electronics – constantly
            exploring the mechanics that drives our world. My fascination with
            linguistics and sci-fi fuels my curiosity about the mysteries of
            language and the limitless possibilities of the future.
          </p>
        </div>
      </div>
    </div>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Convidera',
      title: 'Front End Developer',
      logo: logoConvidera,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'UBC',
      title: 'Web Developer',
      logo: logoUbc,
      start: '2023',
      end: '2023',
    },
    {
      company: 'Freelance',
      title: 'Entrepreneur',
      logo: logoFreelance,
      start: '2021',
      end: '2022',
    },
    {
      company: 'CloudMade',
      title: 'Fleet Engineer',
      logo: logoCloudmade,
      start: '2020',
      end: '2021',
    },
    {
      company: 'The U.S. Embassy',
      title: 'Consular Analyst',
      logo: logoUsEmbassy,
      start: '2015',
      end: '2019',
    },
    {
      company: 'Consulate General of Poland',
      title: 'Consular Assistant',
      logo: logoPolandConsulate,
      start: '2014',
      end: '2015',
    },
    {
      company: 'VFS Global',
      title: 'Operations Supervisor',
      logo: logoVfs,
      start: '2013',
      end: '2014',
    },
    {
      company: 'VFS Global',
      title: 'Manager',
      logo: logoVfs,
      start: '2012',
      end: '2013',
    },
  ]

  const [showMoreRoles, setShowMoreRoles] = useState(false)

  const toggleShowMoreRoles = () => {
    setShowMoreRoles(!showMoreRoles)
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        <FontAwesomeIcon
          icon={faPersonDigging}
          className="h-6 w-6 flex-none text-zinc-500 dark:text-zinc-400"
        />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map(
          (role, roleIndex) =>
            (showMoreRoles || roleIndex < 2) && (
              <Role key={roleIndex} role={role} />
            ),
        )}
      </ol>
      {!showMoreRoles && (
        <Button
          variant="secondary"
          className="group mt-6 w-full"
          onClick={toggleShowMoreRoles}
        >
          Show all
          <FontAwesomeIcon
            icon={faPlus}
            className="h-4 w-4 text-zinc-500 transition group-hover:text-red-500 dark:text-zinc-400 dark:group-hover:text-red-400"
          />
        </Button>
      )}
      <Button
        href="/Resume-Denis-Butsky.pdf"
        download="resume"
        variant="primary"
        className="group mt-6 w-full"
      >
        Download Résumé
        <FontAwesomeIcon
          icon={faCloudArrowDown}
          className="h-4 w-4 text-zinc-500 transition group-hover:text-red-500 dark:text-zinc-400 dark:group-hover:text-red-400"
        />
      </Button>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            <TextGenerateEffect words="Tech wizard, photographer, Swiss Army Knife." />
          </h1>
          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <TextGenerateEffect words="I’m Denis Butsky, a web developer and a problem-solver." />
            <TextGenerateEffect words="I live in Vancouver BC, where I design the future." />
          </div>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/nthbutsky"
              aria-label="Follow on GitHub"
              icon={faGithub}
            />
            <SocialLink
              href="https://www.linkedin.com/in/denisbutsky"
              aria-label="Follow on LinkedIn"
              icon={faLinkedin}
            />
            <SocialLink
              href="mailto:developer@denisbutsky.com"
              aria-label="Email me"
              icon={faEnvelopeOpenText}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <About />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="px-2.5 lg:max-w-none">
              <Image
                priority
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <Resume />
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  )
}
