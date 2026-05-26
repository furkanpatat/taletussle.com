'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Mascot, MASCOTS } from '../constants/MascotData'
import MascotPanel from '../components/MascotPanel'
import LanguageToggle from '../components/LanguageToggle'
import { useLang, mascotI18n } from '../lib/i18n'

/**
 * Inline SVG icon'lar — lucide-react 1.x sürümünde Instagram/Heart/Lock/Mail/
 * ShieldCheck export'ları yok. Dependency upgrade yapmayıp inline minimal
 * SVG kullanıyoruz; tek bir versiyon değişikliği bütün siteyi kırma riski yok.
 */
const InstagramIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const ShieldIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)
const HeartIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)
const LockIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)
const MailIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

/* ── Confetti dots ── */
type Dot = { id: number; x: number; y: number; color: string; size: number; dur: number; delay: number }

const buildDots = (): Dot[] =>
  [...Array(24)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF', '#FF9A3C'][i % 6],
    size: 6 + Math.random() * 10,
    dur: 4 + Math.random() * 4,
    delay: Math.random() * 4,
  }))

const Confetti = () => {
  const [dots, setDots] = useState<Dot[]>([])
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setDots(buildDots()) }, [])
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full opacity-25"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size, backgroundColor: d.color }}
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

const ProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] origin-left z-[60]"
      style={{ scaleX }}
    />
  )
}

const Wave = ({ fill = '#ffffff', flip = false }: { fill?: string; flip?: boolean }) => (
  <div className={`absolute w-full left-0 ${flip ? 'top-0 rotate-180 -translate-y-[1px]' : 'bottom-0 translate-y-[1px]'}`}>
    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20">
      <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={fill} />
    </svg>
  </div>
)

/* ── App Store / Google Play badges ── */
// iOS canlı (App Store yayında), Android hâlâ Closed Test'te → iki ayrı state.
const APP_STORE_URL = 'https://apps.apple.com/tr/app/taletussle/id6764353120'

const StoreBadges = ({ size = 'md' }: { size?: 'md' | 'lg' }) => {
  const { t } = useLang()
  const ICON = size === 'lg' ? 'h-14 md:h-16' : 'h-12'
  const PAD = size === 'lg' ? 'px-7 py-3.5' : 'px-5 py-2.5'

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.store.iosAria}
        className={`group inline-flex items-center gap-3 bg-black text-white rounded-2xl ${PAD} shadow-lg hover:bg-zinc-800 transition-colors`}
      >
        <svg className={ICON} viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM256.3 99.5c30.1-35.8 27.4-68.4 26.5-80.1-26.6 1.5-57.4 18.1-74.9 38.5-19.3 21.9-30.6 49-28.2 79.5 28.8 2.2 55.1-12.6 76.6-37.9z"/>
        </svg>
        <div className="text-left leading-tight">
          <div className="text-[10px] font-medium opacity-70">{t.store.iosTopLabel}</div>
          <div className="text-base font-bold">{t.store.iosBottomLabel}</div>
        </div>
      </a>

      <a
        href="#yakinda"
        aria-label={t.store.androidAria}
        className={`group inline-flex items-center gap-3 bg-black text-white rounded-2xl ${PAD} shadow-lg hover:bg-zinc-800 transition-colors opacity-80`}
      >
        <svg className={ICON} viewBox="0 0 512 512" aria-hidden="true">
          <path fill="#34A853" d="M77 467l244-211L77 45v422z"/>
          <path fill="#FBBC04" d="M321 256l-78-67 78 67-78 67z"/>
          <path fill="#EA4335" d="M321 256l86-74 28 14c14 8 14 28 0 36l-28 14-86 74V256z" opacity=".6"/>
          <path fill="#4285F4" d="M77 45l244 211-86 74L77 467V45z" opacity=".75"/>
        </svg>
        <div className="text-left leading-tight">
          <div className="text-[10px] font-medium opacity-70">{t.store.androidTopLabel}</div>
          <div className="text-base font-bold">{t.store.androidBottomLabel}</div>
        </div>
      </a>
    </div>
  )
}

/* ── Nav ── */
const Nav = () => {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navLinks: [string, string][] = [
    [t.nav.features, '#ozellikler'],
    [t.nav.characters, '#karakterler'],
    [t.nav.parents, '#ebeveyn'],
    [t.nav.faq, '#sss'],
  ]

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`rounded-2xl px-5 md:px-6 py-3 flex items-center justify-between transition-all ${
            scrolled ? 'bg-white/85 backdrop-blur-md shadow-lg border border-white/20' : 'bg-transparent'
          }`}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/logo.svg" alt="TaleTussle" width={44} height={44} className="object-contain group-hover:scale-110 transition-transform" priority />
            <span className="text-xl font-extrabold text-[#1a1a2e] tracking-tight">TaleTussle</span>
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(([l, h]) => (
              <Link key={h} href={h} className="text-slate-700 hover:text-[#FF6B6B] font-bold transition-colors">
                {l}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <a
              href="https://instagram.com/taletussle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden sm:inline-flex w-10 h-10 items-center justify-center rounded-full text-slate-600 hover:text-[#FF6B6B] hover:bg-white/60 transition-all"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="#indir"
              className="bg-gradient-to-r from-[#FF6B6B] to-[#FF9A3C] text-white font-bold py-2.5 px-5 md:px-6 rounded-full shadow-[0_4px_0_#c94c4c] active:shadow-[0_0px_0_#c94c4c] active:translate-y-[4px] transition-all whitespace-nowrap"
            >
              {t.nav.download}
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

/* ── Hero ── */
const Hero = () => {
  const { t, lang } = useLang()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 120])
  const floaters = ['🎈', '🌸', '⭐', '✨', '🦋', '🌈', '🎉', '🌟']

  const featured = [
    MASCOTS.find((m) => m.id === 'GIRL')!,
    MASCOTS.find((m) => m.id === 'BOY')!,
    MASCOTS.find((m) => m.id === 'ASTRONAUT_GIRL')!,
  ]

  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 bg-gradient-to-b from-[#FFF9F0] to-[#FFEFE0] overflow-hidden">
      {floaters.map((e, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl md:text-4xl select-none pointer-events-none opacity-40"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.5 }}
          style={{ left: `${10 + i * 11}%`, top: `${15 + (i % 3) * 25}%` }}
        >
          {e}
        </motion.div>
      ))}

      <motion.div style={{ y }} className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-[#FFD93D]/20 text-amber-700 border-2 border-[#FFD93D] font-bold px-4 py-2 rounded-full mb-7">
                <Sparkles size={16} className="text-[#FF9A3C]" />
                {t.hero.badge}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, type: 'spring' }}
              className="font-extrabold text-[#1a1a2e] leading-[1.05] mb-6 text-5xl md:text-6xl lg:text-7xl tracking-tight"
            >
              {t.hero.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#C77DFF] to-[#4D96FF] italic">
                {t.hero.title2}
              </span>
              <span className="ml-3">🪄</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 font-medium mb-9 leading-relaxed"
            >
              {t.hero.desc1}{' '}
              <strong className="text-[#FF6B6B]">{t.hero.descBold}</strong>
              {t.hero.desc2}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, type: 'spring', stiffness: 200 }}
              id="indir"
              className="mb-7 flex justify-center lg:justify-start"
            >
              <StoreBadges size="lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-bold text-slate-600"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldIcon size={16} className="text-emerald-600" />
                {t.hero.adFree}
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1.5">
                <LockIcon size={16} className="text-blue-600" />
                {t.hero.compliant}
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1.5">
                <HeartIcon size={16} className="text-rose-500" />
                {t.hero.familyFriendly}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
            className="flex-shrink-0 relative w-full max-w-md"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#FFD93D]/40 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#C77DFF]/30 blur-3xl rounded-full" />

              <div className="relative grid grid-cols-3 gap-3">
                {featured.map((m, i) => {
                  const localized = mascotI18n[m.id]?.[lang] ?? { name: m.name }
                  return (
                    <motion.div
                      key={m.id}
                      animate={{ y: [0, i === 1 ? -14 : 14, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                      className={`relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white ${i === 1 ? 'mt-10' : ''}`}
                    >
                      <Image src={m.imageUrl} alt={localized.name} fill sizes="(min-width:1024px) 200px, 33vw" className="object-cover object-top" priority={i < 2} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-0 right-0 text-center">
                        <span className="text-white font-extrabold text-sm drop-shadow">{localized.name}</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <p className="text-center mt-6 font-bold text-[#FF6B6B] text-lg">
                {t.hero.mascotCaption}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Wave fill="#ffffff" />
    </section>
  )
}

/* ── How it works ── */
const HowItWorks = () => {
  const { t } = useLang()
  const steps = [
    { n: '1', emoji: '👤', title: t.how.s1Title, desc: t.how.s1Desc, color: 'from-[#FF6B6B] to-[#FF9A3C]' },
    { n: '2', emoji: '🪄', title: t.how.s2Title, desc: t.how.s2Desc, color: 'from-[#FFD93D] to-[#FF9A3C]' },
    { n: '3', emoji: '✨', title: t.how.s3Title, desc: t.how.s3Desc, color: 'from-[#C77DFF] to-[#4D96FF]' },
  ]
  return (
    <section className="bg-white py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex bg-amber-100 text-amber-700 border-2 border-amber-300 font-bold px-4 py-2 rounded-full mb-5">
            {t.how.badge}
          </div>
          <h2 className="font-extrabold text-[#1a1a2e] text-4xl md:text-5xl">{t.how.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#C77DFF] rounded-full opacity-30" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: 'spring' }}
              className="relative bg-white rounded-3xl p-7 text-center border-2 border-slate-100"
            >
              <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-5xl shadow-lg mb-5`}>
                {s.emoji}
              </div>
              <div className="inline-block bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full mb-3">
                {t.how.step} {s.n}
              </div>
              <h3 className="font-extrabold text-xl text-[#1a1a2e] mb-2">{s.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Features ── */
const Features = () => {
  const { t } = useLang()
  const styles = [
    { emoji: '🪄', bg: 'bg-orange-100', text: 'text-orange-600' },
    { emoji: '🧠', bg: 'bg-blue-100', text: 'text-blue-600' },
    { emoji: '🎯', bg: 'bg-rose-100', text: 'text-rose-600' },
    { emoji: '✨', bg: 'bg-purple-100', text: 'text-purple-600' },
    { emoji: '👑', bg: 'bg-amber-100', text: 'text-amber-600' },
    { emoji: '🎭', bg: 'bg-indigo-100', text: 'text-indigo-600' },
    { emoji: '📊', bg: 'bg-emerald-100', text: 'text-emerald-600' },
    { emoji: '🇹🇷', bg: 'bg-teal-100', text: 'text-teal-600' },
  ]
  const list = t.features.list.map((entry, i) => ({ ...entry, ...styles[i] }))

  return (
    <section id="ozellikler" className="bg-gradient-to-b from-white to-[#F9F5FF] py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex bg-green-100 text-green-700 border-2 border-green-300 font-bold px-4 py-2 rounded-full mb-5">
            {t.features.badge}
          </div>
          <h2 className="font-extrabold text-[#1a1a2e] text-4xl md:text-5xl mb-3">{t.features.title}</h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">{t.features.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: 'spring' }}
              className="bg-white rounded-3xl p-6 shadow-sm border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-slate-100"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 ${f.bg} ${f.text}`}>
                {f.emoji}
              </div>
              <h3 className="font-bold text-lg text-[#1a1a2e] mb-2">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Wave fill="#F9F5FF" />
    </section>
  )
}

/* ── Characters ── */
type DisplayGroup =
  | { type: 'single'; mascot: Mascot; index: number }
  | { type: 'pair'; mascot1: Mascot; mascot2: Mascot; label: string; index: number }

const Characters = ({ onSelect }: { onSelect: (m: Mascot) => void }) => {
  const { t, lang } = useLang()
  const byId = (id: string) => MASCOTS.find((m) => m.id === id)!
  const groups: DisplayGroup[] = [
    { type: 'single', mascot: byId('BOY'), index: 0 },
    { type: 'single', mascot: byId('GIRL'), index: 1 },
    { type: 'single', mascot: byId('PRINCESS'), index: 2 },
    { type: 'single', mascot: byId('KNIGHT'), index: 3 },
    { type: 'pair', mascot1: byId('SCIENTIST'), mascot2: byId('SCIENTIST_GIRL'), label: t.characters.labelScience, index: 4 },
    { type: 'pair', mascot1: byId('ASTRONAUT'), mascot2: byId('ASTRONAUT_GIRL'), label: t.characters.labelSpace, index: 5 },
  ]

  const localized = (m: Mascot) => mascotI18n[m.id]?.[lang] ?? { name: m.name, trait: m.trait, description: '' }

  return (
    <section id="karakterler" className="bg-[#F9F5FF] py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex bg-purple-100 text-purple-700 border-2 border-purple-300 font-bold px-4 py-2 rounded-full mb-5">
            {t.characters.badge}
          </div>
          <h2 className="font-extrabold text-[#1a1a2e] text-4xl md:text-5xl">{t.characters.title}</h2>
          <p className="text-slate-500 text-lg font-medium mt-5 max-w-2xl mx-auto">{t.characters.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((group) => {
            if (group.type === 'single') {
              const m = group.mascot
              const lm = localized(m)
              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, scale: 0.93 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 150, delay: group.index * 0.08 }}
                  whileHover={{ y: -6 }}
                  onClick={() => onSelect(m)}
                  className="relative rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 group aspect-[3/4]"
                >
                  <Image
                    src={m.imageUrl}
                    alt={lm.name}
                    fill
                    sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 90vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 bg-white/20 backdrop-blur-sm text-white border border-white/30">
                      {lm.trait}
                    </div>
                    <h3 className="font-extrabold text-2xl text-white drop-shadow">{lm.name}</h3>
                    <p className="text-white/70 font-bold text-xs mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t.characters.meet} <ArrowRight size={12} />
                    </p>
                  </div>
                </motion.div>
              )
            }

            const { mascot1, mascot2, label } = group
            return (
              <motion.div
                key={`${mascot1.id}_${mascot2.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 120, delay: group.index * 0.08 }}
                className="lg:col-span-2 rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 aspect-[3/2] relative"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-purple-700 border border-purple-200 font-bold text-sm px-4 py-1.5 rounded-full shadow">
                    {label}
                  </span>
                </div>

                <div className="grid grid-cols-2 h-full">
                  {[mascot1, mascot2].map((m, idx) => {
                    const lm = localized(m)
                    return (
                      <div
                        key={m.id}
                        onClick={() => onSelect(m)}
                        className={`relative group cursor-pointer overflow-hidden ${idx === 0 ? 'border-r border-white/20' : ''}`}
                      >
                        <Image
                          src={m.imageUrl}
                          alt={lm.name}
                          fill
                          sizes="(min-width:1024px) 22vw, 45vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide mb-1.5 bg-white/20 backdrop-blur-sm text-white border border-white/30">
                            {lm.trait}
                          </div>
                          <h3 className="font-extrabold text-xl text-white drop-shadow">{lm.name}</h3>
                          <p className="text-white/70 font-bold text-xs mt-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {t.characters.meet} <ArrowRight size={11} />
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <Wave fill="#F0FDF4" />
    </section>
  )
}

/* ── Parents ── */
const Parents = () => {
  const { t } = useLang()
  const icons = [
    <ShieldIcon key="s" size={28} className="text-emerald-600" />,
    <LockIcon key="l" size={28} className="text-blue-600" />,
    <HeartIcon key="h" size={28} className="text-rose-500" />,
    <Sparkles key="sp" size={28} className="text-purple-600" />,
  ]
  const points = t.parents.points.map((p, i) => ({ ...p, icon: icons[i] }))

  return (
    <section id="ebeveyn" className="bg-gradient-to-b from-[#F0FDF4] to-white py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex bg-emerald-100 text-emerald-700 border-2 border-emerald-300 font-bold px-4 py-2 rounded-full mb-5">
            {t.parents.badge}
          </div>
          <h2 className="font-extrabold text-[#1a1a2e] text-4xl md:text-5xl mb-4">{t.parents.title}</h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">{t.parents.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring' }}
              className="bg-white rounded-3xl p-7 shadow-sm border-2 border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">{p.icon}</div>
              <div>
                <h3 className="font-bold text-xl text-[#1a1a2e] mb-2">{p.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 font-medium mb-4">{t.parents.contactNote}</p>
          <a
            href="mailto:info@taletussle.com"
            className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-emerald-300 text-[#1a1a2e] font-bold py-3 px-6 rounded-full transition-all"
          >
            <MailIcon size={18} className="text-emerald-600" />
            info@taletussle.com
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ── */
const FAQ = () => {
  const { t } = useLang()
  return (
    <section id="sss" className="bg-white py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex bg-amber-100 text-amber-700 border-2 border-amber-300 font-bold px-4 py-2 rounded-full mb-5">
            {t.faq.badge}
          </div>
          <h2 className="font-extrabold text-[#1a1a2e] text-4xl md:text-5xl mb-3">{t.faq.title}</h2>
          <p className="text-slate-500 text-lg font-medium">
            {t.faq.lead1}{' '}
            <a href="mailto:info@taletussle.com" className="text-[#FF6B6B] underline">
              info@taletussle.com
            </a>
            {t.faq.lead2}
          </p>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <details
              key={i}
              className="group bg-[#FFFBF5] border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-[#FF6B6B]/30 transition-colors"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 md:p-6 font-bold text-[#1a1a2e] text-base md:text-lg select-none">
                <span>{item.q}</span>
                <span className="shrink-0 w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-[#FF6B6B] font-extrabold text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-600 font-medium leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Final CTA ── */
const FinalCTA = () => {
  const { t } = useLang()
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-indigo-900 to-purple-900">
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-500/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring' }}
        >
          <div className="text-6xl mb-6">🌙</div>
          <h2 className="font-extrabold text-white text-4xl md:text-5xl mb-5">{t.finalCta.title}</h2>
          <p className="text-white/70 text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto">{t.finalCta.desc}</p>
          <div className="flex justify-center mb-8">
            <StoreBadges size="lg" />
          </div>
          <p className="text-white/40 text-sm font-medium">
            {t.finalCta.questions} <a className="underline hover:text-white" href="mailto:info@taletussle.com">info@taletussle.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Footer ── */
const Footer = () => {
  const { t } = useLang()
  const exploreLinks: [string, string][] = [
    [t.footer.links.features, '#ozellikler'],
    [t.footer.links.characters, '#karakterler'],
    [t.footer.links.parents, '#ebeveyn'],
    [t.footer.links.faq, '#sss'],
  ]
  const legalLinks: [string, string][] = [
    [t.footer.links.privacy, '/privacy'],
    [t.footer.links.terms, '/terms'],
  ]
  return (
    <footer className="bg-[#0f0f1c] text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.svg" alt="TaleTussle Logo" width={44} height={44} className="object-contain" />
              <span className="text-2xl font-bold tracking-tight">TaleTussle</span>
            </div>
            <p className="text-white/50 font-medium leading-relaxed">{t.footer.tagline}</p>
            <div className="mt-5">
              <LanguageToggle variant="dark" />
            </div>
          </div>
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-white/30 font-bold text-xs uppercase tracking-widest mb-5">{t.footer.explore}</p>
              {exploreLinks.map(([label, href]) => (
                <Link key={href} href={href} className="block text-white/60 hover:text-white font-medium mb-3 transition-colors">
                  {label}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-white/30 font-bold text-xs uppercase tracking-widest mb-5">{t.footer.legal}</p>
              {legalLinks.map(([label, href]) => (
                <Link key={href} href={href} className="block text-white/60 hover:text-white font-medium mb-3 transition-colors">
                  {label}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-white/30 font-bold text-xs uppercase tracking-widest mb-5">{t.footer.contact}</p>
              <a href="mailto:info@taletussle.com" className="block text-white/60 hover:text-white font-medium mb-3 transition-colors">
                info@taletussle.com
              </a>
              <a
                href="https://instagram.com/taletussle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white font-medium mb-3 transition-colors"
              >
                <InstagramIcon size={16} />
                @taletussle
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-white/30 font-medium text-sm">{t.footer.rights}</p>
          <p className="text-white/30 font-medium text-sm">{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  )
}

/* ── PAGE ── */
export default function Page() {
  const [selected, setSelected] = useState<Mascot | null>(null)
  return (
    <div className="min-h-screen text-[#1a1a2e] font-sans selection:bg-rose-200 selection:text-rose-900">
      <ProgressBar />
      <Confetti />
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Characters onSelect={setSelected} />
        <Parents />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MascotPanel mascot={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
