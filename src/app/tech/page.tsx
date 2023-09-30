import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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
    <SimpleLayout
      title="Technologies I passion about, software and hardware I use, gadgets I love."
      intro="These are some of stuff I use to navigate in my realm to build software, upgrade hardware, stay productive, or just to make feel myself more inspired and go beyond limits."
    >
      <div className="space-y-8">
        <ToolsSection title="Stack">
          <Tool title="Web">
            Vue, Nuxt, JavaScript, TypeScript, Tailwind, Firebase, GraphQL,
            Docker
          </Tool>
          <Tool title="OS">MacOS, Linux, Windows, Android, Raspberry Pi</Tool>
        </ToolsSection>
        <ToolsSection title="Software">
          <Tool title="IDE">
            Visual Studio Code, WebStorm, PhpStorm, Android Studio, Xcode,
            Arduino IDE
          </Tool>
          <Tool title="Terminal">Warp, Hyper</Tool>
          <Tool title="Productivity">Notion, Alfred, ChatGPT</Tool>
          <Tool title="Misc">
            CyberDuck, TablePlus, DBeaver, Adobe, Figma, Notion
          </Tool>
        </ToolsSection>
        <ToolsSection title="Hardware">
          <Tool title="Laptop">
            MacBook Pro 14&#34; M1, MacBook Pro 13&#34; Intel, PC Asus ZenBook
            14&#34;
          </Tool>
          <Tool title="Monitor">LG UltraFine 27&#34; 4K</Tool>
          <Tool title="Misc">
            AirPods Pro, Fujifilm Cameras and Lenses, Prusa and Ultimaker 3D
            Printers
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
