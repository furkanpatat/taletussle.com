'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Sparkles } from 'lucide-react'
import { Mascot } from '../constants/MascotData'
import { useLang, mascotI18n } from '../lib/i18n'

const TRAIT_EMOJIS = ['💖', '⚡', '🛡️', '🏆']

export default function MascotPanel({ mascot, onClose }: { mascot: Mascot | null; onClose: () => void }) {
  const { t, lang } = useLang()
  if (!mascot) return null

  const localized = mascotI18n[mascot.id]?.[lang] ?? { name: mascot.name, trait: mascot.trait, description: mascot.description }
  const traits = t.panel.traits.map((tr, i) => ({ ...tr, emoji: TRAIT_EMOJIS[i] }))

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
      />

      {/* Full-screen split modal */}
      <motion.div
        key="panel"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: 'spring', damping: 26, stiffness: 260 }}
        className="fixed inset-4 md:inset-8 z-[101] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Left: Featured Character ── */}
        <div className={`relative md:w-[45%] h-80 md:h-auto flex-shrink-0 overflow-hidden flex items-center justify-center p-12`}
             style={{ background: `linear-gradient(135deg, ${mascot.color.includes('blue') ? '#EBF5FF' : mascot.color.includes('pink') ? '#FFF0F5' : mascot.color.includes('rose') ? '#FFF0F2' : mascot.color.includes('amber') ? '#FFF8E8' : mascot.color.includes('purple') ? '#F5EEFF' : mascot.color.includes('violet') ? '#F3EEFF' : mascot.color.includes('indigo') ? '#EEF0FF' : '#F5F5F5'} 0%, #fff 100%)` }}>
          
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            src={mascot.imageUrl}
            alt={localized.name}
            className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          />

          {/* Decorative background shape */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          {/* Trait badge bottom-left */}
          <div className="absolute bottom-6 left-6 hidden md:block z-20">
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-white/40 backdrop-blur-md text-slate-800 border border-white/60 shadow-sm`}>
              {localized.trait}
            </span>
          </div>

          {/* Floating mini decorations */}
          {['⭐','✨','🌸','🎈'].map((e, i) => (
            <motion.span
              key={i}
              className="absolute text-xl opacity-40 select-none pointer-events-none"
              style={{ top: `${12 + i * 20}%`, left: i % 2 === 0 ? '8%' : '78%' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
            >{e}</motion.span>
          ))}
        </div>

        {/* ── Right: Info ── */}
        <div
          className="flex-1 bg-[#fdfaf5] overflow-y-auto flex flex-col"
          style={{ scrollbarWidth: 'none' }}
        >
          {/* Rainbow top bar */}
          <div className="h-1.5 w-full shrink-0" style={{ background: 'linear-gradient(90deg,#FF6B6B,#FFD93D,#6BCB77,#4D96FF,#C77DFF)' }} />

          {/* Close */}
          <div className="flex justify-end p-5 shrink-0">
            <button
              onClick={onClose}
              className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-md border border-slate-100 hover:scale-110 hover:bg-rose-50 transition-all"
            >
              <X size={20} className="text-slate-500" />
            </button>
          </div>

          <div className="px-8 pb-10 flex flex-col gap-8 flex-1">
            {/* Name & trait */}
            <div>
              <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${mascot.color} border mb-4`}>
                {localized.trait}
              </span>
              <h2 className="font-extrabold text-4xl md:text-5xl text-[#1a1a2e] leading-tight mb-3">
                {localized.name}<br />
                <span className="text-2xl md:text-3xl">{mascot.emoji}</span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                {localized.description}
              </p>
            </div>

            {/* Trait cards */}
            <div className="grid grid-cols-2 gap-3">
              {traits.map((tr, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, type: 'spring' }}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"
                >
                  <div className="text-2xl mb-2">{tr.emoji}</div>
                  <p className="font-bold text-[#1a1a2e] text-sm mb-0.5">{tr.title}</p>
                  <p className="text-slate-400 text-xs">{tr.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="mt-auto rounded-[1.75rem] overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #C77DFF 60%, #4D96FF 100%)' }}
            >
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={18} className="text-white/80" />
                  <p className="text-white/80 font-bold text-sm uppercase tracking-widest">{t.panel.adventureWaiting}</p>
                </div>
                <h3 className="font-extrabold text-2xl md:text-3xl text-white mb-2">
                  {localized.name} {t.panel.startWith}
                </h3>
                <p className="text-white/70 font-medium text-sm mb-6">
                  {t.panel.startDesc}
                </p>
                <button className="flex items-center gap-2 bg-white text-[#FF6B6B] font-black text-lg px-8 py-4 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all">
                  {t.panel.tryNow} <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
