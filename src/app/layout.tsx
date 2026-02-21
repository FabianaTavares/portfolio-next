import { Footer } from '@/components/layout/Footer/Footer'
import { Header } from '@/components/layout/Header/Header'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.scss'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fabianatavares.com'),
  title: {
    default: 'Fabiana Tavares | Desenvolvedora Frontend',
    template: '%s | Fabiana Tavares',
  },
  description:
    'Portfólio profissional com projetos, artigos e experiências em desenvolvimento frontend.',
  keywords: [
    'Frontend',
    'React',
    'Next.js',
    'TypeScript',
    'Desenvolvimento Web',
  ],
  openGraph: {
    title: 'Fabiana Tavares | Desenvolvedora Frontend',
    description: 'Portfólio profissional com projetos e conteúdos técnicos.',
    url: 'https://fabianatavares.com',
    siteName: 'Fabiana Tavares',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabiana Tavares | Desenvolvedora Frontend',
    description: 'Portfólio profissional com projetos e conteúdos técnicos.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
