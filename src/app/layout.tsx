import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import '@/styles/tailwind.css'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: {
    template: '%s - Denis Butsky',
    default: 'Denis Butsky - Generalist. Explorer. Wizard',
  },
  description:
    'I’m Denis Butsky, a problem-solver and a jack of all trades. I live in the present to design the future.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
