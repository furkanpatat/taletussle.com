'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { useLang } from '../lib/i18n'
import LanguageToggle from './LanguageToggle'

/**
 * Privacy Policy ve Terms sayfaları için ortak şablon.
 * In-app TR metinleriyle bire bir uyumlu olduğundan App Store reviewer
 * için "external linkable" Privacy/Terms şartını karşılar.
 */
export type LegalSection = { heading: string; body: string }
export type LegalContent = {
  title: string
  updated: string
  intro?: string
  sections: LegalSection[]
}

export default function LegalLayout({
  tr,
  en,
}: {
  tr: LegalContent
  en: LegalContent
}) {
  const { t, lang } = useLang()
  const { title, updated, intro, sections } = lang === 'en' ? en : tr
  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#1a1a2e] font-sans">
      {/* Top bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-3xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft size={18} className="text-slate-500 group-hover:-translate-x-0.5 transition-transform" />
            <Image src="/logo.svg" alt="TaleTussle" width={32} height={32} className="object-contain" />
            <span className="font-extrabold text-[#1a1a2e]">TaleTussle</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex gap-5 text-sm font-bold text-slate-600">
              <Link href="/privacy" className="hover:text-[#FF6B6B]">{t.legal.privacy}</Link>
              <Link href="/terms" className="hover:text-[#FF6B6B]">{t.legal.terms}</Link>
              <Link href="/" className="hover:text-[#FF6B6B]">{t.legal.back}</Link>
            </nav>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 md:px-6 py-12 md:py-16">
        <h1 className="font-extrabold text-3xl md:text-4xl mb-2">{title}</h1>
        <p className="text-slate-500 font-medium text-sm mb-8">{updated}</p>

        {intro ? (
          <p className="bg-amber-50 border-l-4 border-amber-400 text-amber-900 font-medium px-5 py-4 rounded-r-xl mb-10 leading-relaxed">
            {intro}
          </p>
        ) : null}

        <div className="space-y-9">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-bold text-xl md:text-2xl text-[#1a1a2e] mb-3">{s.heading}</h2>
              <div className="text-slate-700 leading-relaxed font-medium whitespace-pre-line">{s.body}</div>
            </section>
          ))}
        </div>

        <hr className="my-12 border-slate-200" />

        <p className="text-sm text-slate-500 font-medium">
          {t.legal.questionsFor}{' '}
          <a href="mailto:info@taletussle.com" className="text-[#FF6B6B] underline">
            info@taletussle.com
          </a>
        </p>
      </main>

      <footer className="bg-[#0f0f1c] text-white/60 py-8 mt-12 text-center text-sm font-medium">
        © 2026 TaleTussle. Tüm hakları saklıdır.
      </footer>
    </div>
  )
}
