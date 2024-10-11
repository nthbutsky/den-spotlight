import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-4">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tech',
  description:
    'Technologies I passion about, software and hardware I use, gadgets I love.',
}

export default function Tech() {
  return (
    <SimpleLayout>
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          <TextGenerateEffect words="Technologies I passion about, software and hardware I use, gadgets I love." />
        </h1>
        <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <TextGenerateEffect words="These are some of stuff I use to navigate in my realm to build software, upgrade hardware, stay productive, or just to make feel myself more inspired and go beyond limits." />
        </div>
      </header>
      <div className="mt-16 space-y-8 sm:mt-20">
        <ToolsSection title="Stack">
          <Tool title="Languages, Frameworks, DBs and Tools">
            JavaScript, TypeScript, Vue, Nuxt, React, Next, Tailwind, PHP,
            Python, Vuex, Pinia, Redux, Zustand, Node, Firebase, GraphQL,
            MongoDB, Docker, Vite, MySQL, Supabase,Material UI, Chartjs, Drupal,
            Wordpress, Webpack, CSS, HTML, Git, REST, Bootstrap, jQuery
          </Tool>
          <Tool title="OS">
            MacOS, iOS, Linux, Windows, Android, Raspberry Pi
          </Tool>
        </ToolsSection>
        <ToolsSection title="Software">
          <Tool title="IDE">
            Visual Studio Code, WebStorm, PhpStorm, Arduino IDE
          </Tool>
          <Tool title="Terminal">Warp, Hyper</Tool>
          <Tool title="Productivity">Notion, Raycast, ChatGPT</Tool>
          <Tool title="Misc">
            Arc Browser, CyberDuck, TablePlus, DBeaver, Adobe, Figma, Notion
          </Tool>
        </ToolsSection>
        <ToolsSection title="Hardware">
          <Tool title="Laptop">
            MacBook Pro 14&#34; M, PC Asus ZenBook 14&#34;
          </Tool>
          <Tool title="Monitor">LG UltraFine 27&#34; 4K x2</Tool>
          <Tool title="Misc">
            AirPods Pro, Fujifilm Cameras and Lenses, Prusa and Ultimaker 3D,
            ESP32, Arduino Nano Printers
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
