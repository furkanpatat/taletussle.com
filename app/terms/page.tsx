'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

/* ── Confetti Dots ── */
const Confetti = () => {
  const [dots, setDots] = useState<any[]>([])
  useEffect(() => {
    setDots([...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF', '#FF9A3C'][i % 6],
      size: 6 + Math.random() * 10,
      dur: 3 + Math.random() * 4,
      delay: Math.random() * 4,
    })))
  }, [])
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map(d => (
        <motion.div
          key={d.id}
          className="absolute rounded-full opacity-20"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size, backgroundColor: d.color }}
          animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ── Wave SVG ── */
const Wave = ({ fill = '#ffffff', flip = false }: { fill?: string; flip?: boolean }) => (
  <div className={`absolute w-full left-0 ${flip ? 'top-0 rotate-180 -translate-y-[1px]' : 'bottom-0 translate-y-[1px]'}`}>
    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-16">
      <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={fill} />
    </svg>
  </div>
)

function Section({ title, emoji, children }: { title: string; emoji: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-white rounded-3xl p-8 shadow-sm border-2 border-transparent hover:border-purple-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-purple-100">
        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-xl shrink-0">{emoji}</div>
        <h2 className="font-bold text-xl text-[#1a1a2e]">{title}</h2>
      </div>
      <div className="text-slate-600 leading-relaxed text-[15px] flex flex-col gap-3">
        {children}
      </div>
    </motion.section>
  )
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-bold text-[#1a1a2e] mt-3 mb-1">{children}</p>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-[#C77DFF] mt-0.5 shrink-0">✦</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F5FF] to-[#F0F7FF] text-[#1a1a2e] font-sans">
      <Confetti />

      {/* Header / Nav */}
      <header className="relative bg-gradient-to-r from-[#C77DFF] to-[#4D96FF] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {['📜', '⭐', '✨', '🎉', '🌟'].map((e, i) => (
            <motion.span
              key={i}
              className="absolute text-2xl opacity-30 select-none"
              style={{ left: `${10 + i * 20}%`, top: `${20 + (i % 2) * 40}%` }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
            >{e}</motion.span>
          ))}
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl shadow-sm group-hover:rotate-12 transition-transform">📚</div>
            <span className="text-white font-extrabold text-xl tracking-tight">TaleTussle</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold text-sm px-4 py-2 rounded-full transition-all"
          >
            ← Ana Sayfa
          </Link>
        </div>
        <Wave fill="#F9F5FF" />
      </header>

      {/* Hero Banner */}
      <div className="relative pt-16 pb-12 text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 border-2 border-purple-300 font-bold px-4 py-2 rounded-full mb-6">
            📜 Kullanım Koşulları
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl text-[#1a1a2e] mb-4">
            Kullanım <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C77DFF] to-[#4D96FF]">Şartları</span> 📋
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
            Son güncelleme: 1 Nisan 2025
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-24 relative z-10 flex flex-col gap-6">

        <Section title="1. Kabul" emoji="✅">
          <p>
            TaleTussle uygulamasını indirerek veya kullanarak bu Kullanım Şartları'nı kabul etmiş sayılırsınız.
            Bu şartları kabul etmiyorsanız lütfen uygulamayı kullanmayın ve cihazınızdan kaldırın.
          </p>
          <p>
            Ebeveyn veya yasal vasi olarak, uygulamayı çocuğunuz adına kullanırken bu şartların tüm sorumluluğunu üstlenirsiniz.
          </p>
        </Section>

        <Section title="2. Hizmet Tanımı" emoji="🎪">
          <p>TaleTussle, çocuklar için yapay zeka destekli kişiselleştirilmiş masallar, eğitici mini oyunlar ve
            günlük yarışmalar sunan bir mobil uygulamadır. Hizmetlerimiz:</p>
          <BulletList items={[
            'Yapay zeka ile oluşturulmuş kişiselleştirilmiş masallar',
            'Klasik Türk ve dünya masalları kütüphanesi',
            'Matematik, dil ve mantık mini oyunları',
            'Günlük yarışma ve sıralama sistemi',
            'Maskot karakterleri ve kıyafet sistemi',
            'Yıldız, rozet ve ilerleme takip sistemi',
          ]} />
        </Section>

        <Section title="3. Hesap ve Ebeveyn Sorumluluğu" emoji="👨‍👩‍👧">
          <BulletList items={[
            'Hesap, 18 yaşından büyük ebeveyn veya yasal vasi tarafından oluşturulmalıdır',
            'Hesap bilgilerinizin gizliliğinden siz sorumlusunuz',
            'Şifrenizi başkalarıyla paylaşmayın',
            'Hesabınızda gerçekleşen tüm işlemlerden siz sorumlusunuz',
          ]} />
          <p>
            Hesap bilgileriniz çalınırsa veya yetkisiz erişim olursa derhal{' '}
            <a href="mailto:info@taletussle.com" className="text-[#C77DFF] font-bold hover:underline">
              info@taletussle.com
            </a>{' '}
            adresine bildirin.
          </p>
        </Section>

        <Section title="4. Abonelik ve Ödeme" emoji="💳">
          <SubTitle>4.1 Ücretsiz Plan</SubTitle>
          <p>
            Ücretsiz kullanıcılar günlük belirli sayıda yapay zeka hikayesine, temel mini oyunlara ve
            günlük yarışmaya erişebilir.
          </p>

          <SubTitle>4.2 Premium Abonelik</SubTitle>
          <p>Premium abonelik şu seçenekte sunulur:</p>
          <BulletList items={[
            'Aylık: ₺149/ay — her ay otomatik yenilenir',
          ]} />

          <SubTitle>4.3 Otomatik Yenileme</SubTitle>
          <p>
            Abonelikler, mevcut dönemin sona ermesinden en az 24 saat önce iptal edilmezse otomatik olarak yenilenir.
            Yenileme ücreti, dönem sonundan 24 saat önce Apple ID veya Google hesabınızdan tahsil edilir.
          </p>

          <SubTitle>4.4 İptal</SubTitle>
          <p>
            Aboneliğinizi Apple App Store veya Google Play üzerinden istediğiniz zaman iptal edebilirsiniz.
            İptal, mevcut dönem sonunda geçerli olur; kalan süre için iade yapılmaz.
          </p>

          <SubTitle>4.5 İade Politikası</SubTitle>
          <p>
            İade talepleri Apple App Store ve Google Play politikaları kapsamında değerlendirilir.
            Uygulama içindeki teknik sorunlar nedeniyle iade talebi için{' '}
            <a href="mailto:info@taletussle.com" className="text-[#C77DFF] font-bold hover:underline">
              info@taletussle.com
            </a>{' '}
            adresine başvurun.
          </p>
        </Section>

        <Section title="5. Kullanım Kuralları" emoji="📏">
          <p>Uygulamamızı kullanırken aşağıdakileri yapmamayı kabul edersiniz:</p>
          <BulletList items={[
            'Uygulamayı tersine mühendislik (reverse engineering) yöntemiyle çözümlemeye çalışmak',
            'Uygulamayı otomatik araçlar veya botlarla kullanmak',
            'Diğer kullanıcıların hesaplarına yetkisiz erişim sağlamaya çalışmak',
            'Uygulamanın sunucularına aşırı yük bindirmek',
            'Üretilen içerikleri ticari amaçla izinsiz kullanmak',
            'Yanlış bilgi vererek hesap oluşturmak',
          ]} />
        </Section>

        <Section title="6. Fikri Mülkiyet" emoji="©️">
          <p>
            TaleTussle markası, logosu, maskot karakterleri, tasarımlar ve uygulama kodu bize aittir.
            Bu içerikler Telif Hakkı Kanunu ve Marka Hukuku kapsamında korunmaktadır.
          </p>
          <p>
            Yapay zeka tarafından sizin için üretilen kişiselleştirilmiş masallar kişisel kullanım için
            sizinle paylaşılır; ticari amaçla yayımlanamaz veya dağıtılamaz.
          </p>
        </Section>

        <Section title="7. Sorumluluk Sınırlaması" emoji="⚠️">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p className="text-slate-700 text-sm leading-relaxed">
              TaleTussle, hizmetin kesintisiz veya hatasız çalışacağını garanti etmez. Teknik arızalar,
              bakım süreçleri veya üçüncü taraf hizmet kesintileri nedeniyle oluşan aksaklıklardan
              dolayı sorumlu tutulamayız.
            </p>
          </div>
          <p>
            Azami sorumluluğumuz, son 12 ay içinde ödediğiniz abonelik ücretiyle sınırlıdır.
          </p>
        </Section>

        <Section title="8. İçerik ve Yapay Zeka" emoji="🤖">
          <p>
            Uygulamamız Google Gemini yapay zeka modeli kullanarak hikaye üretmektedir. Üretilen içerikler
            çocuklara uygun filtrelerden geçirilmektedir; ancak yapay zeka modellerinin sınırlılıkları nedeniyle
            beklenmedik içerikler oluşabilir.
          </p>
          <p>
            Uygunsuz bir içerikle karşılaşırsanız lütfen uygulama içindeki "Bildir" özelliğini kullanın
            veya{' '}
            <a href="mailto:info@taletussle.com" className="text-[#C77DFF] font-bold hover:underline">
              info@taletussle.com
            </a>{' '}
            adresine bildirin.
          </p>
        </Section>

        <Section title="9. Hizmet Değişiklikleri ve Sona Ermesi" emoji="🔄">
          <p>
            Önceden bildirimde bulunarak hizmeti değiştirme, askıya alma veya sonlandırma hakkını saklı tutarız.
            Hizmetin kalıcı olarak kapatılması durumunda aktif premium abonelere orantılı iade yapılır.
          </p>
          <p>
            Bu şartları ihlal etmeniz durumunda hesabınızı önceden bildirim yapmaksızın askıya alabilir veya silebiliriz.
          </p>
        </Section>

        <Section title="10. Uygulanacak Hukuk" emoji="⚖️">
          <p>
            Bu şartlar Türkiye Cumhuriyeti hukukuna tabidir. Anlaşmazlıklar öncelikle karşılıklı müzakere
            yoluyla çözülmeye çalışılır. Çözüme kavuşturulamazsa İstanbul mahkemeleri yetkilidir.
          </p>
        </Section>

        <Section title="11. Şartlarda Değişiklik" emoji="📢">
          <p>
            Bu şartları zaman zaman güncelleyebiliriz. Önemli değişikliklerde uygulama içi bildirim veya
            e-posta ile önceden haber veririz. Değişiklikten sonra uygulamayı kullanmaya devam etmeniz
            yeni şartları kabul ettiğiniz anlamına gelir.
          </p>
        </Section>

        <Section title="12. İletişim" emoji="📬">
          <p>Bu şartlarla ilgili sorularınız için:</p>
          <div className="bg-gradient-to-br from-[#F9F5FF] to-white border-2 border-purple-100 rounded-2xl p-6 mt-2 flex flex-col gap-2">
            <p className="font-bold text-[#1a1a2e] text-lg">🏠 TaleTussle</p>
            <p>📧 <a href="mailto:support@taletussle.com" className="text-[#C77DFF] font-bold hover:underline">support@taletussle.com</a></p>
            <p>🌐 <a href="https://taletussle.com" className="text-[#C77DFF] font-bold hover:underline">taletussle.com</a></p>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-12 mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C77DFF] to-[#4D96FF] flex items-center justify-center text-lg">📚</div>
            <span className="font-bold text-xl tracking-tight">TaleTussle</span>
          </div>
          <p className="text-white/40 text-center font-medium text-sm mb-6">
            Her çocuk kendi masalının kahramanıdır. 🌈
          </p>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">© 2026 TaleTussle. Tüm hakları saklıdır.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-white/50 font-medium text-sm hover:text-white transition-colors">Gizlilik</Link>
              <Link href="/terms" className="text-[#C77DFF] font-bold text-sm hover:text-purple-300 transition-colors">Kullanım Şartları</Link>
              <Link href="/support" className="text-white/50 font-medium text-sm hover:text-white transition-colors">Destek</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
