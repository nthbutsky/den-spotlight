import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import logoUbc from '@/images/logos/ubc.svg'
import logoRemex from '@/images/logos/remex.svg'
import logoVirtrex from '@/images/logos/virtrex.svg'
import logoSpeekly from '@/images/logos/speekly.svg'
import logoAio from '@/images/logos/aio.svg'

const projects = [
  {
    name: 'Speekly',
    description: 'Platform for user generated content videos.',
    stack:
      'Laravel, Alpine, Tailwind, Docker, Kubernetes, PHP, Stripe, Livewire, Statamic, Hubspot',
    link: { href: 'https://speekly.de/', label: 'speekly.de' },
    logo: logoSpeekly,
  },
  {
    name: 'Virtrex',
    description: 'B2B platform for shortening sales cycle.',
    stack: 'Vue, Laravel, SCSS, TypeScript, Vite, PHP, Docker',
    link: { href: 'https://www.virtrex.de/', label: 'virtrex.de' },
    logo: logoVirtrex,
  },
  {
    name: 'REMEX',
    description:
      'A portal for the expert in mineral disposal, including recycling, utilization or disposal of mineral waste.',
    stack: 'Vue, Nuxt, TypeScript, Webpack, SCSS, Tailwind, PHP, Docker',
    link: { href: 'https://www.remex.de/', label: 'remex.de' },
    logo: logoRemex,
  },
  {
    name: 'AIO Landing Page',
    description:
      'Fancy landing page for marketing team to promote AIO Platform.',
    stack:
      'Vue, Vite, Laravel, Statamic, Tailwind, TypeScript, Docker, Hubspot',
    link: {
      href: 'https://landing.connect-one.devcon.team/',
      label: 'Pre Prod',
    },
    logo: logoAio,
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
    name: 'AIO Platform',
    description:
      'Comprehensive software solution designed for managing intelligent objects, their associated metadata, locations, and targeted URLs.',
    stack:
      'Vue, TypeScript, Vite, Tailwind, GO, GraphQL, Laravel, Docker, Kubernetes, PHP, Plesk, Auth0',
    link: { href: '#', label: 'Dev Stage' },
    logo: logoAio,
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
    name: 'Template Landing',
    description: 'A template portfolio landing page.',
    stack: 'JavaScript, SCSS',
    link: {
      href: 'https://nthbutsky.github.io/ba-fe-practice-1/',
      label: 'landing',
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
  {
    name: 'Akad',
    description: 'A responsive landing page.',
    stack: 'JavaScript, HTML, SCSS',
    link: {
      href: 'https://nthbutsky.github.io/ba-fe-js-bootstrap/',
      label: 'akad',
    },
  },
  {
    name: 'Design Lab',
    description: 'A responsive landing page.',
    stack: 'JavaScript, HTML, SCSS',
    link: {
      href: 'https://nthbutsky.github.io/ba-fe/pages/design-lab-15.html',
      label: 'design-lab',
    },
  },
  {
    name: 'Cahee',
    description: 'A responsive landing page.',
    stack: 'JavaScript, HTML, SCSS',
    link: {
      href: 'https://nthbutsky.github.io/ba-fe/pages/cahee-responsive-18.html',
      label: 'cahee',
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
    name: 'Meowoof',
    description:
      'Cat and Dog breeds info app based on TheCatAPI and TheDogAPI.',
    stack: 'Vue, SCSS',
    link: { href: 'https://nthbutsky.github.io/meowoof/', label: 'meowoof' },
  },
  {
    name: 'PassGen',
    description: 'A Password Generator.',
    stack: 'JavaScript, CSS',
    link: {
      href: 'https://nthbutsky.github.io/password-generator-js/',
      label: 'pass-gen',
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
    <SimpleLayout
      title="Things I’ve been part of, trying to make a difference."
      intro="I’ve worked on many projects over the years but these are the ones that I’m most proud of. Some of them are in development currently, so the links might be on and off at some point."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              ) : (
                <div
                  className="h-8 w-8 rounded-full bg-white"
                  // style={{ backgroundColor: getRandomColor() }}
                />
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
