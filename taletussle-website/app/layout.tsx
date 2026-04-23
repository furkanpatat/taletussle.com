import type { Metadata } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka'
})

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito'
})

export const metadata: Metadata = {
  title: 'TaleTussle — Çocuğunun Masal Dünyası',
  description: 'Yapay zeka ile kişiselleştirilmiş masallar, eğitici oyunlar ve günlük yarışmalar. Çocuğunun hayal gücünü keşfet!',
  keywords: 'çocuk masalı, yapay zeka hikaye, eğitici uygulama, masal uygulaması, çocuk oyunu',
  openGraph: {
    title: 'TaleTussle — Çocuğunun Masal Dünyası',
    description: 'Yapay zeka ile kişiselleştirilmiş masallar, eğitici oyunlar ve günlük yarışmalar.',
    url: 'https://taletussle.com',
    siteName: 'TaleTussle',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaleTussle — Çocuğunun Masal Dünyası',
    description: 'Yapay zeka ile kişiselleştirilmiş masallar ve eğitici oyunlar.',
  },
  metadataBase: new URL('https://taletussle.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="font-nunito bg-[#fff9f0]">{children}</body>
    </html>
  )
}
