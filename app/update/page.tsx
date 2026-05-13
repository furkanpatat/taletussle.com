'use client'

import { useEffect, useState } from 'react'

// 'use client' olduğu için export const metadata kullanılamıyor; title
// useEffect içinde dinamik set ediliyor. Sayfa SEO için değil zorunlu
// update yönlendirmesi için — meta önemli değil.

const IOS_APP_URL = 'https://apps.apple.com/app/id6764353120'
const ANDROID_APP_URL = 'https://play.google.com/store/apps/details?id=com.taletussle.app'

type Platform = 'ios' | 'android' | 'unknown'

function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'unknown'
  const ua = navigator.userAgent || ''
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios'
  if (/Android/i.test(ua)) return 'android'
  return 'unknown'
}

export default function UpdatePage() {
  const [platform, setPlatform] = useState<Platform>('unknown')

  useEffect(() => {
    const p = detectPlatform()
    setPlatform(p)
    document.title = 'TaleTussle — Güncelle'

    // Mobile cihazda kullanıcı zaten "Güncelle" butonuna basıp burayı açtı —
    // otomatik direkt store'a yönlendir, ekstra tıklama bekleme. Web/desktop'ta
    // sayfayı göster (link tıkla seçeneğiyle).
    if (p === 'ios') {
      window.location.href = IOS_APP_URL
    } else if (p === 'android') {
      window.location.href = ANDROID_APP_URL
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EFF6FF] via-[#F5F3FF] to-[#FEF3C7] flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white/90 backdrop-blur rounded-3xl border border-indigo-100 shadow-xl p-8 text-center">
        <div className="text-6xl mb-4">⬆️</div>

        <h1 className="text-3xl font-extrabold text-indigo-900 mb-3">
          TaleTussle&apos;ı Güncelle
        </h1>

        <p className="text-indigo-700 font-semibold leading-relaxed mb-8">
          {platform === 'ios' && 'App Store sayfasına yönlendiriliyorsun...'}
          {platform === 'android' && 'Google Play sayfasına yönlendiriliyorsun...'}
          {platform === 'unknown' &&
            'Cihazına uygun mağazadan en yeni sürümü indir.'}
        </p>

        <div className="space-y-3">
          <a
            href={IOS_APP_URL}
            className="block w-full bg-black text-white font-bold py-4 px-6 rounded-2xl hover:bg-gray-800 transition-colors"
          >
            📱 App Store&apos;dan İndir (iOS)
          </a>

          <a
            href={ANDROID_APP_URL}
            className="block w-full bg-[#01875F] text-white font-bold py-4 px-6 rounded-2xl hover:bg-[#016B4A] transition-colors"
          >
            🤖 Google Play&apos;den İndir (Android)
          </a>
        </div>

        <p className="text-sm text-indigo-500 mt-8 font-medium">
          Güncelleme tamamlandıktan sonra uygulamayı yeniden açın.
        </p>

        <div className="mt-10 pt-6 border-t border-indigo-100">
          <a
            href="/"
            className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
          >
            ← Ana Sayfa
          </a>
        </div>
      </div>
    </main>
  )
}
