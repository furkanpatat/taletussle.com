import type { Metadata } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../lib/i18n'

/**
 * Font seçimi notları:
 * - Fredoka'nın `latin-ext` subset'i Türkçe karakterleri (ş/ç/ı/ğ/İ) tutarsız
 *   render ediyordu. Bazı glyph'ler düşüyor veya yanlış basılıyordu.
 * - Baloo 2 — playful, yuvarlak, tam Türkçe (latin-ext) desteği var. Kids
 *   ekseninde Fredoka ile aynı vibe'ı veriyor.
 * - Nunito body için kalıyor; latin-ext subset'i ekleyip Türkçe garantisi
 *   alıyoruz.
 */
const baloo = Baloo_2({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TaleTussle — Onun adıyla, onun masalıyla',
  description:
    'Bir isim yaz, yapay zekâ saniyede sesli ve görsel bir masal yazsın. Her gece çocuğun adıyla başlayan yeni bir macera. Reklamsız, güvenli, %100 Türkçe.',
  keywords:
    'çocuk masalı, yapay zeka masal, kişiselleştirilmiş masal, sesli masal, eğitici uygulama, masal uygulaması, çocuk oyunu, türkçe masal',
  openGraph: {
    title: 'TaleTussle — Onun adıyla, onun masalıyla 🪄',
    description:
      'Yapay zekâ saniyede sesli + görsel masal yazar. Her gece, çocuğun adıyla başlayan yeni bir macera.',
    url: 'https://taletussle.com',
    siteName: 'TaleTussle',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaleTussle — Onun adıyla, onun masalıyla 🪄',
    description: 'Yapay zekâ saniyede sesli + görsel masal yazar. Her gece çocuğun adıyla yeni bir macera.',
    site: '@taletussle',
    creator: '@taletussle',
  },
  metadataBase: new URL('https://taletussle.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="font-nunito bg-[#fff9f0]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
