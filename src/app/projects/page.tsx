import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import logoUbc from '@/images/logos/ubc.svg'
import logoRemex from '@/images/logos/remex.svg'
import logoVirtrex from '@/images/logos/virtrex.svg'
import logoSpeekly from '@/images/logos/speekly.svg'
import logoAio from '@/images/logos/aio.svg'
import logoVelux from '@/images/logos/velux.svg'
import logoFraalliance from '@/images/logos/fraalliance.svg'

const projects = [
  {
    name: 'Velux',
    description:
      'Web solutions for one of the largest and oldest manufacturer of windows and accessories in the World.',
    stack:
      'Vue, TypeScript, Vite, SCSS, GraphQL, Laravel, Docker, Kubernetes, PHP, Plesk, Auth0, .NET',
    link: { href: 'https://www.velux.de/', label: 'velux.de' },
    logo: logoVelux,
  },
  {
    name: 'Velux RWPC',
    description: 'Roof window price configurator.',
    stack:
      'Vue, TypeScript, Vite, SCSS, GraphQL, Laravel, Docker, Kubernetes, PHP, Plesk, Auth0, .NET',
    link: {
      href: 'https://www.velux.de/dachfensterkonfigurator',
      label: 'velux.de',
    },
    logo: logoVelux,
  },
  {
    name: 'MBIM',
    description:
      'Main website for Microbiology & Immunology Department of University of British Columbia.',
    stack: 'Drupal, SCSS, JavaScript, PHP, MySQL, Docker',
    link: { href: 'https://mbim.ubc.ca/', label: 'mbim.ubc.ca' },
    logo: logoUbc,
  },
  {
    name: 'AIO',
    description:
      'Fancy landing page for marketing team to promote AIO Platform.',
    stack:
      'Vue, Vite, Laravel, Statamic, Tailwind, TypeScript, Docker, Hubspot',
    link: {
      href: 'https://landing.connect-one.devcon.team/',
      label: 'pre-prod',
    },
    logo: logoAio,
  },
  {
    name: 'Speekly',
    description: 'Platform for user generated content videos.',
    stack:
      'Laravel, Alpine, Tailwind, Docker, Kubernetes, PHP, Stripe, Livewire, Statamic, Hubspot',
    link: {
      href: 'https://speekly.de/',
      label: 'speekly.de',
    },
    logo: logoSpeekly,
  },
  {
    name: 'Remex',
    description:
      'A portal for the expert in mineral disposal, including recycling, utilization or disposal of mineral waste.',
    stack: 'Vue, Nuxt, TypeScript, Webpack, SCSS, Tailwind, PHP, Docker',
    link: {
      href: 'https://www.remex.de/',
      label: 'remex.de',
    },
    logo: logoRemex,
  },
  {
    name: 'Virtrex',
    description: 'B2B platform for shortening sales cycle.',
    stack: 'Vue, Laravel, SCSS, TypeScript, Vite, PHP, Docker',
    link: {
      href: 'https://www.virtrex.de/',
      label: 'virtrex.de',
    },
    logo: logoVirtrex,
  },
  {
    name: 'FraAlliance',
    description: 'Frankfurt airport flights information.',
    stack: 'Vue, Tailwind, TypeScript, Vite, Docker',
    link: {
      href: 'https://passengerservices.fraalliance.de/gate/a16/',
      label: 'passengerservices.fraalliance.de',
    },
    logo: logoFraalliance,
  },
  {
    name: 'Movie Date',
    description: 'A simple movie app.',
    stack: 'React, TypeScript, Tailwind',
    link: {
      href: 'https://movie-date-six.vercel.app/',
      label: 'movie-date',
    },
  },
  {
    name: 'Memory Card Game',
    description: 'A simple memory card game for online marketplace.',
    stack: 'Vue, TypeScript, SCSS',
    link: {
      href: 'https://nthbutsky.github.io/maudau-memory-card-game/login',
      label: 'game',
    },
  },
  {
    name: 'Efficiency App',
    description:
      'Mini office app, consolidating all you need in one, but without distraction.',
    stack: 'Vue, Vuetify, SCSS',
    link: {
      href: 'https://nthbutsky.github.io/efficiency-app',
      label: 'efficiency',
    },
  },
  {
    name: 'Productly',
    description: 'A responsive landing page.',
    stack: 'HTML, SCSS',
    link: {
      href: 'https://nthbutsky.github.io/ba-fe/pages/productly.html',
      label: 'productly',
    },
  },
  {
    name: 'Monticello',
    description: 'A responsive landing page.',
    stack: 'JavaScript, HTML, SCSS',
    link: {
      href: 'https://nthbutsky.github.io/ba-fe-exam-2/',
      label: 'monticello',
    },
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve been part of, trying to make a difference.',
}

export default function Projects() {
  // const getRandomColor = () => {
  //   const letters = '0123456789ABCDEF'
  //   let color = '#'
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)]
  //   }
  //   return color
  // }

  return (
    <SimpleLayout>
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          <TextGenerateEffect words="Things I’ve been part of, trying to make a difference." />
        </h1>
        <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <TextGenerateEffect words="I’ve worked on many projects over the years but these are the ones that I’m most proud of. Some of them are in development currently, so the links might be on and off at some point." />
        </div>
      </header>
      <ul
        role="list"
        className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full bg-white"
                  unoptimized
                />
              ) : (
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  // style={{ backgroundColor: getRandomColor() }}
                >
                  <p className="font-bold text-zinc-800">{project.name[0]}</p>
                </div>
              )}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <Card.Stack>{project.stack}</Card.Stack>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-red-500 dark:text-zinc-200 dark:group-hover:text-red-400">
              <FontAwesomeIcon
                icon={faLink}
                className="h-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300"
              />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
