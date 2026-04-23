'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Star, Sparkles } from 'lucide-react'
import { Mascot, MASCOTS } from '../constants/MascotData'
import MascotPanel from '../components/MascotPanel'

/* ── Confetti Dots ── */
const Confetti = () => {
  const [dots, setDots] = useState<any[]>([])
  useEffect(() => {
    setDots([...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF', '#FF9A3C'][i % 6],
      size: 6 + Math.random() * 12,
      dur: 3 + Math.random() * 4,
      delay: Math.random() * 4,
    })))
  }, [])
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map(d => (
        <motion.div
          key={d.id}
          className="absolute rounded-full opacity-30"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size, backgroundColor: d.color }}
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ── Scroll Bar ── */
const ProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] origin-left z-[60]" style={{ scaleX }} />
}

/* ── Wave SVG ── */
const Wave = ({ fill = '#ffffff', flip = false }: { fill?: string; flip?: boolean }) => (
  <div className={`absolute w-full left-0 ${flip ? 'top-0 rotate-180 -translate-y-[1px]' : 'bottom-0 translate-y-[1px]'}`}>
    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20">
      <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={fill} />
    </svg>
  </div>
)

/* ── Nav ── */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`rounded-2xl px-6 py-3 flex items-center justify-between transition-all ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg border border-white/20' : 'bg-transparent'}`}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.svg" alt="TaleTussle Logo" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-[#1a1a2e] tracking-tight">TaleTussle</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {[['✨ Özellikler', '#ozellikler'], ['🎭 Karakterler', '#karakterler'], ['👑 Premium', '#premium']].map(([l, h]) => (
              <Link key={h} href={h} className="text-slate-600 hover:text-[#FF6B6B] font-bold transition-colors">{l}</Link>
            ))}
          </div>
          <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF9A3C] text-white font-bold py-2.5 px-6 rounded-full shadow-[0_4px_0_#c94c4c] active:shadow-[0_0px_0_#c94c4c] active:translate-y-[4px] transition-all whitespace-nowrap">
            Ücretsiz Dene 🚀
          </button>
        </motion.div>
      </div>
    </nav>
  )
}

/* ── Ferris Wheel SVG ── */
const FerrisWheel = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
    className="w-[240px] h-[240px] md:w-[350px] md:h-[350px] inline-block"
  >
    <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="110" cy="110" r="95" stroke="#FF6B6B" strokeWidth="6" strokeDasharray="12 8" opacity="0.6" />
      <circle cx="110" cy="110" r="75" stroke="#FFD93D" strokeWidth="3" opacity="0.4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const x2 = 110 + 93 * Math.cos(rad)
        const y2 = 110 + 93 * Math.sin(rad)
        return <line key={i} x1="110" y1="110" x2={x2} y2={y2} stroke={['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF', '#FF9A3C', '#FF6B6B', '#6BCB77'][i]} strokeWidth="3" opacity="0.7" />
      })}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const cx = 110 + 93 * Math.cos(rad)
        const cy = 110 + 93 * Math.sin(rad)
        const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF', '#FF9A3C', '#FF6B6B', '#6BCB77']
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="14" fill={colors[i]} opacity="0.9" />
            <text x={cx} y={cy + 4} textAnchor="middle" fontSize="12" fill="white">{['🌟', '🎈', '⭐', '🎉', '🌸', '✨', '🦋', '🎠'][i]}</text>
          </g>
        )
      })}
      <circle cx="110" cy="110" r="14" fill="#FF9A3C" />
      <circle cx="110" cy="110" r="7" fill="#fff" />
    </svg>
  </motion.div>
)

/* ── Hero ── */
const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const floaters = ['🎈', '🌸', '⭐', '✨', '🦋', '🌈', '🎉', '🌟']

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-[#FFF9F0] to-[#FFEFE0] overflow-hidden">
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-[#FFD93D]/20 text-amber-700 border-2 border-[#FFD93D] font-bold px-4 py-2 rounded-full mb-8">
                <Sparkles size={16} className="text-[#FF9A3C]" /> Yapay Zeka ile Kişisel Masallar 🌟
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, type: 'spring' }}
              className="font-extrabold text-[#1a1a2e] leading-[1.1] mb-6 text-5xl md:text-6xl lg:text-7xl"
            >
              Çocuğunun <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#C77DFF] to-[#4D96FF]">Sihirli Masalı</span><br />
              Başlıyor! 🪄
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 font-medium mb-10 leading-relaxed"
            >
              Sadece bir isim yaz, yapay zeka saniyeler içinde{' '}
              <strong className="text-[#FF6B6B]">sesli + görsel</strong> bir masal oluştursun. Her gece yeni bir macera! 🎉
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, type: 'spring', stiffness: 200 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#FF6B6B] to-[#FF9A3C] text-white text-lg font-bold py-4 px-8 rounded-full shadow-[0_6px_0_#c94c4c] active:shadow-[0_0px_0_#c94c4c] active:translate-y-[6px] transition-all w-full sm:w-auto justify-center">
                Hemen Masal Yarat! <ArrowRight size={20} />
              </button>
              <a href="#ozellikler" className="bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-300 text-lg font-bold py-4 px-8 rounded-full shadow-sm hover:bg-slate-50 transition-all w-full sm:w-auto text-center">
                Nasıl Çalışır? 🤔
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex -space-x-3">
                {['👦', '👧', '🦊', '🐱', '🦁'].map((e, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-lg shadow-sm z-10">{e}</div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#FFD93D] fill-[#FFD93D]" />)}</div>
                <p className="text-slate-500 font-bold text-sm mt-0.5">10,000+ mutlu aile</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
            className="flex-shrink-0 flex flex-col items-center gap-6 mt-10 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFD93D] blur-3xl opacity-20 rounded-full"></div>
              <FerrisWheel />
            </div>
            <p className="font-bold text-[#FF6B6B] text-xl px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-sm">Lunapark Seni Bekliyor!</p>
          </motion.div>
        </div>
      </motion.div>

      <Wave fill="#ffffff" />
    </section>
  )
}

/* ── Marquee ── */
const MarqueeStrip = () => {
  const items = ['🌟 Sesli Masallar', '🎭 8 Kahraman', '🧠 Eğitici İçerik', '🇹🇷 Türkçe', '🔒 Reklamsız', '⚡ 10 Saniyede', '🏆 Aile Paneli', '🎨 Görsel Masal']
  const dbl = [...items, ...items, ...items]
  return (
    <div className="bg-white py-5 overflow-hidden border-b border-slate-100 flex">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap px-6"
      >
        {dbl.map((t, i) => (
          <span key={i} className="text-slate-400 font-bold text-lg">{t}</span>
        ))}
      </motion.div>
    </div>
  )
}

/* ── Stats ── */
const Stats = () => (
  <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {[
          { n: '10K+', label: 'Mutlu Aile', emoji: '👨‍👩‍👧', color: 'text-blue-500' },
          { n: '500K+', label: 'Masal Üretildi', emoji: '📖', color: 'text-orange-500' },
          { n: '8', label: 'Eşsiz Karakter', emoji: '🎭', color: 'text-purple-500' },
          { n: '4.9★', label: 'App Store', emoji: '⭐', color: 'text-amber-400' },
        ].map(({ n, label, emoji, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-lg shadow-blue-100/50 border border-blue-50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="text-4xl md:text-5xl mb-4">{emoji}</div>
            <div className={`text-3xl md:text-4xl font-black mb-2 ${color}`}>{n}</div>
            <p className="text-slate-500 font-bold text-xs md:text-sm uppercase tracking-widest">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <Wave fill="#F2FFF5" />
  </section>
)

/* ── Features ── */
const Features = () => {
  const list = [
    { emoji: '🪄', title: 'Anında Oluşturma', desc: 'Bir isim yaz, bir tema seç — yapay zeka saniyeler içinde benzersiz bir masal yazar, seslendirir ve görselleştirir.', bg: 'bg-orange-100', text: 'text-orange-500', border: 'hover:border-orange-300' },
    { emoji: '🎭', title: 'Çocuğun Kahramandır', desc: 'Her hikayenin başrolü çocuğunuzun adını taşır. Bu kişiselleştirme okumayı sevilir kılar.', bg: 'bg-purple-100', text: 'text-purple-500', border: 'hover:border-purple-300' },
    { emoji: '🔒', title: '%100 Güvenli', desc: 'Reklamsız, takipçisiz, pedagojik onaylı içerik. Ebeveynler her şeyi kontrol eder.', bg: 'bg-green-100', text: 'text-green-500', border: 'hover:border-green-300' },
    { emoji: '📊', title: 'Gelişim Raporu', desc: 'Haftalık kelime dağarcığı, okuma süresi ve favori temalar hakkında detaylı ebeveyn paneli.', bg: 'bg-blue-100', text: 'text-blue-500', border: 'hover:border-blue-300' },
    { emoji: '⚡', title: '10 Saniyede Masal', desc: 'Uzun yükleme süreleri yok. Çocuğunuz beklemeden hemen masalına başlar.', bg: 'bg-amber-100', text: 'text-amber-500', border: 'hover:border-amber-300' },
    { emoji: '🌍', title: 'Türkçe & Eğitici', desc: 'Tamamen Türkçe, MEB müfredatı ile uyumlu, yaş grubuna göre zorluk seviyesi ayarlanır.', bg: 'bg-rose-100', text: 'text-rose-500', border: 'hover:border-rose-300' },
  ]
  return (
    <section id="ozellikler" className="bg-gradient-to-b from-[#F2FFF5] to-[#F9F5FF] py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex bg-green-100 text-green-700 border-2 border-green-300 font-bold px-4 py-2 rounded-full mb-6">🏆 Neden TaleTussle?</div>
          <h2 className="font-extrabold text-[#1a1a2e] text-4xl md:text-5xl">
            Masalların <span className="text-green-500">Büyülü</span> Dünyası
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              className={`bg-white rounded-3xl p-8 shadow-sm border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${f.border}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 ${f.bg} ${f.text}`}>
                {f.emoji}
              </div>
              <h3 className="font-bold text-2xl text-[#1a1a2e] mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
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
  const byId = (id: string) => MASCOTS.find(m => m.id === id)!
  const groups: DisplayGroup[] = [
    { type: 'single', mascot: byId('BOY'),       index: 0 },
    { type: 'single', mascot: byId('GIRL'),      index: 1 },
    { type: 'single', mascot: byId('PRINCESS'),  index: 2 },
    { type: 'single', mascot: byId('KNIGHT'),    index: 3 },
    { type: 'pair', mascot1: byId('SCIENTIST'), mascot2: byId('SCIENTIST_GIRL'), label: '🧪 Bilim Dünyası', index: 4 },
    { type: 'pair', mascot1: byId('ASTRONAUT'), mascot2: byId('ASTRONAUT_GIRL'), label: '🚀 Uzay Ekibi',    index: 5 },
  ]

  return (
    <section id="karakterler" className="bg-[#F9F5FF] py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex bg-purple-100 text-purple-700 border-2 border-purple-300 font-bold px-4 py-2 rounded-full mb-6">🎭 Kahramanlar</div>
          <h2 className="font-extrabold text-[#1a1a2e] text-4xl md:text-5xl">
            Kim Olmak <span className="text-purple-500">İstersin?</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium mt-6 max-w-2xl mx-auto">Her karakterin kendine özel kişiliği ve seni bekleyen maceraları var!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map(group => {
            if (group.type === 'single') {
              const m = group.mascot
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
                  {/* Full-bleed photo */}
                  <img
                    src={m.imageUrl}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 bg-white/20 backdrop-blur-sm text-white border border-white/30`}>
                      {m.trait}
                    </div>
                    <h3 className="font-extrabold text-2xl text-white drop-shadow">{m.name}</h3>
                    <p className="text-white/70 font-bold text-xs mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Tanı <ArrowRight size={12} />
                    </p>
                  </div>

                </motion.div>
              )
            }

            /* ── Pair Card ── */
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
                {/* Label pill — floats on top */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-purple-700 border border-purple-200 font-bold text-sm px-4 py-1.5 rounded-full shadow">
                    {label}
                  </span>
                </div>

                {/* Two full-bleed photos side by side */}
                <div className="grid grid-cols-2 h-full">
                  {[mascot1, mascot2].map((m, idx) => (
                    <div
                      key={m.id}
                      onClick={() => onSelect(m)}
                      className={`relative group cursor-pointer overflow-hidden ${idx === 0 ? 'border-r border-white/20' : ''}`}
                    >
                      <img
                        src={m.imageUrl}
                        alt={m.name}
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide mb-1.5 bg-white/20 backdrop-blur-sm text-white border border-white/30">
                          {m.trait}
                        </div>
                        <h3 className="font-extrabold text-xl text-white drop-shadow">{m.name}</h3>
                        <p className="text-white/70 font-bold text-xs mt-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Tanı <ArrowRight size={11} />
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <Wave fill="#FFFBEB" />
    </section>
  )
}

/* ── Testimonials ── */
const Testimonials = () => (
  <section className="bg-gradient-to-b from-[#FFFBEB] to-white py-32 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="font-extrabold text-[#1a1a2e] text-4xl md:text-5xl">Aileler Ne Diyor? 💛</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { text: '"Kızım her gece kendi masalını istiyor! Adıyla hikaye oluşturulması onu çok mutlu ediyor."', name: 'Ayşe K.', role: '5 yaşında kızın annesi', emoji: '👧' },
          { text: '"Oğlum okumayı sevmiyordu. TaleTussle ile bir ayda kelime dağarcığı inanılmaz gelişti!"', name: 'Mehmet T.', role: '7 yaşında oğlun babası', emoji: '👦' },
          { text: '"Pedagojik yaklaşımı ve içerik kalitesi beni çok etkiledi. Hem eğleniyorlar hem öğreniyorlar."', name: 'Dr. Fatma Ş.', role: 'Çocuk Gelişimi Uzmanı', emoji: '👩‍⚕️' },
        ].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[2rem] p-8 shadow-lg shadow-amber-100/50 border border-amber-50 relative"
          >
            <div className="text-4xl absolute -top-4 -left-2 text-amber-200 opacity-50 font-serif">"</div>
            <div className="flex gap-1 mb-5 relative z-10">{[...Array(5)].map((_, s) => <Star key={s} size={18} className="text-[#FFD93D] fill-[#FFD93D]" />)}</div>
            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8 relative z-10">{t.text}</p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center text-2xl shrink-0">{t.emoji}</div>
              <div>
                <p className="font-bold text-[#1a1a2e] text-lg">{t.name}</p>
                <p className="text-slate-400 text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

/* ── Premium ── */
const Premium = () => (
  <section id="premium" className="py-24 relative overflow-hidden bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#FFD93D]/20 text-amber-700 border-2 border-[#FFD93D] font-bold px-4 py-2 rounded-full mb-6">👑 TaleTussle Royale</div>
        <h2 className="font-extrabold text-[#1a1a2e] mb-6 text-4xl md:text-5xl">
          Sınırsız Masal, <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400">Sınırsız Macera!</span>
        </h2>
        <p className="text-slate-500 font-medium text-lg md:text-xl max-w-2xl mx-auto">Çocuğunuz için en iyi yatırım — her gece yeni bir sihirli dünya.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative overflow-hidden rounded-[3rem] shadow-2xl bg-gradient-to-br from-slate-900 to-indigo-900 border border-indigo-500/30"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 grid lg:grid-cols-3 gap-0">
          {/* Left */}
          <div className="flex flex-col items-center justify-center p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-[100px] leading-none mb-6">👑</motion.div>
            <p className="text-white/70 font-bold text-sm uppercase tracking-widest mb-2">Aylık Sadece</p>
            <p className="font-black text-white text-6xl md:text-7xl mb-2">₺149</p>
            <p className="text-white/50 text-sm">İstediğin an iptal et</p>
          </div>

          {/* Middle */}
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <h3 className="font-bold text-white text-2xl md:text-3xl mb-8">Pakete Dahil Olanlar</h3>
            <div className="space-y-6">
              {[
                { e: '📖', t: 'Sınırsız kişiselleştirilmiş masal' },
                { e: '🎭', t: '8 özel kahraman ve kostümler' },
                { e: '🎙️', t: 'Sesli profesyonel anlatım' },
                { e: '🔒', t: 'Reklamsız %100 güvenli' },
                { e: '📊', t: 'Detaylı ebeveyn paneli' },
              ].map(({ e, t }) => (
                <div key={t} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl shrink-0 backdrop-blur-sm border border-white/5">{e}</div>
                  <span className="text-white/90 font-medium text-lg">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center justify-center p-10 md:p-14 border-t lg:border-t-0 lg:border-l border-white/10 gap-8 bg-black/10">
            <div className="flex gap-3">
              {['🎡', '🎠', '🎪'].map((e, i) => (
                <motion.span key={i} className="text-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}>{e}</motion.span>
              ))}
            </div>
            <button className="w-full bg-white text-[#FF6B6B] hover:text-rose-500 font-black text-xl md:text-2xl py-5 px-8 rounded-full shadow-[0_6px_0_rgba(255,255,255,0.4)] active:shadow-[0_0px_0_rgba(255,255,255,0.4)] active:translate-y-[6px] transition-all">
              Hemen Başla! 🎉
            </button>
            <p className="text-white/60 font-medium text-center text-sm leading-relaxed">✅ 7 gün ücretsiz dene<br />❌ Kart bilgisi gerekmez</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

/* ── Footer ── */
const Footer = () => (
  <footer className="bg-[#1a1a2e] text-white py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.svg" alt="TaleTussle Logo" className="w-12 h-12 object-contain" />
            <span className="text-2xl font-bold tracking-tight">TaleTussle</span>
          </div>
          <p className="text-white/50 font-medium leading-relaxed">Her çocuk kendi masalının kahramanıdır. Yapay zeka ile sınırsız hayal gücü! 🌈</p>
        </div>
        <div className="flex gap-16">
          <div>
            <p className="text-white/30 font-bold text-xs uppercase tracking-widest mb-6">Keşfet</p>
            {[
              ['✨ Özellikler', '#ozellikler'],
              ['🎭 Karakterler', '#karakterler'],
              ['👑 Premium', '#premium'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="block text-white/60 hover:text-white font-medium mb-4 transition-colors">{label}</Link>
            ))}
          </div>
          <div>
            <p className="text-white/30 font-bold text-xs uppercase tracking-widest mb-6">Yasal</p>
            {[
              ['🔒 Gizlilik', '/privacy'],
              ['📜 Şartlar', '/terms'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="block text-white/60 hover:text-white font-medium mb-4 transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 font-medium text-sm">© 2026 TaleTussle — Her çocuğun bir masalı vardır 🌟</p>
      </div>
    </div>
  </footer>
)

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
        <MarqueeStrip />
        <Stats />
        <Features />
        <Characters onSelect={setSelected} />
        <Testimonials />
        <Premium />
      </main>
      <Footer />
      {/* Constants klasöründen gelen MascotPanel aynen çalışacaktır */}
      <MascotPanel mascot={selected} onClose={() => setSelected(null)} />
    </div>
  )
}