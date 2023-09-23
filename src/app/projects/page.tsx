import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoUbc from '@/images/logos/ubc.svg'
import logoRemex from '@/images/logos/remex.svg'
import logoVirtrex from '@/images/logos/virtrex.svg'
import logoSpeekly from '@/images/logos/speekly.svg'
import logoAio from '@/images/logos/aio.svg'

import { LinkIcon } from '@/components/Icons'

const projects = [
  {
    name: 'MBIM',
    description: 'Main website for Microbiology & Immunology Department of University of British Columbia.',
    link: { href: '#', label: 'Dev Stage' },
    logo: logoUbc,
  },
  {
    name: 'AIO Platform',
    description: 'Comprehensive software solution designed for managing intelligent objects, their associated metadata, locations, and targeted URLs.',
    link: { href: '#', label: 'Dev Stage' },
    logo: logoAio,
  },
  {
    name: 'AIO Landing Page',
    description: 'Fancy landing page for marketing team to promote AIO Platform.',
    link: { href: 'https://landing.connect-one.devcon.team/', label: 'Pre Prod' },
    logo: logoAio,
  },
  {
    name: 'Speekly',
    description: 'Platform for user generated content videos.',
    link: { href: 'https://speekly.de/', label: 'speekly.de' },
    logo: logoSpeekly,
  },
  {
    name: 'Virtrex',
    description: 'B2B platform for shortening sales cycle.',
    link: { href: 'https://www.virtrex.de/', label: 'virtrex.de' },
    logo: logoVirtrex,
  },
  {
    name: 'REMEX',
    description: 'A portal for the expert in mineral disposal, including recycling, utilization or disposal of mineral waste..',
    link: { href: 'https://www.remex.de/', label: 'remex.de' },
    logo: logoRemex,
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve been part of, trying to make a difference.',
}

export default function Projects() {
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
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-red-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
