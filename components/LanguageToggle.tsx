'use client'
import React from 'react'
import { LANGS, useLang } from '../lib/i18n'

/**
 * Hafif TR | EN segmented toggle. Nav ve Legal layout için ortak.
 * Variant 'light' beyaz/şeffaf üstüne, 'dark' koyu arka plan üstüne uygundur.
 */
export default function LanguageToggle({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { lang, setLang } = useLang()
  const base = variant === 'dark'
    ? 'bg-white/10 border-white/20'
    : 'bg-white/70 border-slate-200'
  const activeClass = variant === 'dark'
    ? 'bg-white text-[#1a1a2e]'
    : 'bg-[#1a1a2e] text-white'
  const idleClass = variant === 'dark'
    ? 'text-white/70 hover:text-white'
    : 'text-slate-600 hover:text-[#1a1a2e]'

  return (
    <div className={`inline-flex items-center gap-0.5 rounded-full border ${base} p-0.5`} role="group" aria-label="Language">
      {LANGS.map((l) => {
        const active = lang === l.code
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            className={`px-2.5 py-1 rounded-full text-xs font-extrabold tracking-wide transition-colors ${active ? activeClass : idleClass}`}
          >
            {l.label}
          </button>
        )
      })}
    </div>
  )
}
