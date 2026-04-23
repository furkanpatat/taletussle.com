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
      className="bg-white rounded-3xl p-8 shadow-sm border-2 border-transparent hover:border-orange-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-orange-100">
        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-xl shrink-0">{emoji}</div>
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
          <span className="text-[#FF9A3C] mt-0.5 shrink-0">✦</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 text-left font-bold text-amber-700 text-sm bg-amber-50">{children}</th>
  )
}

function Tr({ children, alt }: { children: React.ReactNode; alt?: boolean }) {
  return <tr className={alt ? 'bg-orange-50/30' : 'bg-white'}>{children}</tr>
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-4 py-3 border-t border-slate-100 text-sm text-slate-600">{children}</td>
  )
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F0] to-[#FFEFE0] text-[#1a1a2e] font-sans">
      <Confetti />

      {/* Header / Nav */}
      <header className="relative bg-gradient-to-r from-[#FF6B6B] to-[#FF9A3C] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {['🌟', '🎈', '✨', '🎉', '⭐'].map((e, i) => (
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
        <Wave fill="#FFF9F0" />
      </header>

      {/* Hero Banner */}
      <div className="relative pt-16 pb-12 text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#FFD93D]/20 text-amber-700 border-2 border-[#FFD93D] font-bold px-4 py-2 rounded-full mb-6">
            🔒 Güvenlik & Gizlilik
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl text-[#1a1a2e] mb-4">
            Gizlilik <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FF9A3C]">Politikası</span> 🛡️
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
            Son güncelleme: 1 Nisan 2025
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-24 relative z-10 flex flex-col gap-6">

        <Section title="1. Giriş" emoji="👋">
          <p>
            TaleTussle olarak çocuğunuzun ve ailenizin gizliliğini en üst düzeyde önemsiyoruz. Bu Gizlilik Politikası,
            TaleTussle uygulamasını kullandığınızda hangi bilgileri topladığımızı, bu bilgileri nasıl kullandığımızı
            ve koruduğumuzu açıklamaktadır.
          </p>
          <p>
            Uygulamayı kullanmaya devam ederek bu Gizlilik Politikası'nı kabul etmiş sayılırsınız. Herhangi bir sorunuz
            için{' '}
            <a href="mailto:info@taletussle.com" className="text-[#FF9A3C] font-bold hover:underline">
              info@taletussle.com
            </a>{' '}
            adresinden bizimle iletişime geçebilirsiniz.
          </p>
        </Section>

        <Section title="2. Topladığımız Bilgiler" emoji="📋">
          <SubTitle>2.1 Hesap Bilgileri</SubTitle>
          <p>Kayıt sırasında aşağıdaki bilgileri toplarız:</p>
          <BulletList items={[
            'E-posta adresi (ebeveyn)',
            'Kullanıcı adı',
            'Şifre (şifrelenmiş olarak saklanır, asla düz metin olarak)',
          ]} />

          <SubTitle>2.2 Çocuk Profil Bilgileri</SubTitle>
          <p>Kişiselleştirilmiş içerik için ebeveynin girdiği:</p>
          <BulletList items={[
            'Çocuğun adı veya takma adı',
            'Yaş aralığı (kesin doğum tarihi değil)',
            'İlgi alanları ve tercihler',
            'Seçilen maskot karakteri',
          ]} />

          <SubTitle>2.3 Kullanım Verileri</SubTitle>
          <p>Uygulamayı iyileştirmek için otomatik olarak toplanan:</p>
          <BulletList items={[
            'Oturum süreleri ve özellik kullanımı',
            'Tamamlanan hikaye ve oyunlar',
            'Kazanılan rozetler ve yıldızlar',
            'Uygulama kilitlenme raporları (kişisel veri içermez)',
          ]} />

          <SubTitle>2.4 Ödeme Bilgileri</SubTitle>
          <p>
            Premium abonelik ödemeleri Apple App Store veya Google Play Store üzerinden işlenir.
            Kredi kartı veya ödeme bilgileriniz hiçbir zaman sunucularımıza iletilmez; doğrudan Apple/Google tarafından işlenir.
          </p>
        </Section>

        <Section title="3. Bilgileri Nasıl Kullanırız" emoji="🧠">
          <BulletList items={[
            'Kişiselleştirilmiş içerik: Çocuğunuzun yaşı ve ilgi alanlarına uygun masal ve oyunlar oluşturmak için',
            'Hesap yönetimi: Oturum açma, şifre sıfırlama ve profil işlemleri için',
            'İlerleme takibi: Yıldız, rozet ve sıralama tablosu özelliklerini desteklemek için',
            'Uygulama geliştirme: Hata tespiti ve kullanıcı deneyimini iyileştirmek için',
            'İletişim: Abonelik bildirimleri ve önemli güncellemeler için (reklam amaçlı değil)',
          ]} />
        </Section>

        <Section title="4. Çocukların Gizliliği (COPPA / KVKK)" emoji="🧒">
          <div className="bg-gradient-to-br from-[#FFD93D]/20 to-[#FF9A3C]/10 border-2 border-[#FFD93D] rounded-2xl p-5">
            <p className="font-bold text-amber-800 mb-2">⚠️ Önemli: Çocuk Koruma Taahhüdümüz</p>
            <p className="text-amber-900 text-sm leading-relaxed">
              TaleTussle, 13 yaşın altındaki çocuklardan doğrudan veri toplamaz. Tüm hesaplar ebeveyn tarafından
              oluşturulur. Çocuklara ait içerikler yalnızca kişiselleştirme amacıyla kullanılır ve üçüncü taraflarla
              kesinlikle paylaşılmaz.
            </p>
          </div>
          <BulletList items={[
            'Çocukların konumuna erişmeyiz',
            'Çocuklara yönelik reklam göstermeyiz',
            'Çocuk profillerini analiz veya pazarlama firmalarıyla paylaşmayız',
            '13 yaş altı kullanıcıların verileri için ebeveyn onayı zorunludur',
          ]} />
        </Section>

        <Section title="5. Yapay Zeka ve Hikaye Üretimi" emoji="🤖">
          <p>
            Uygulamamız, kişiselleştirilmiş masallar oluşturmak için Google Gemini API'sini kullanmaktadır.
            Hikaye oluşturma sırasında:
          </p>
          <BulletList items={[
            'Çocuğun adı ve ilgi alanları içerik parametresi olarak gönderilir',
            'Bu veriler Google\'ın modeli eğitmek için kullanılmaz (API kullanım şartları gereği)',
            'Oluşturulan hikayeler sunucularımızda şifreli olarak saklanır',
            'Hikayeler kişisel tanımlayıcı içermeden işlenir',
          ]} />
        </Section>

        <Section title="6. Veri Güvenliği" emoji="🔐">
          <BulletList items={[
            'Şifreleme: Tüm veriler HTTPS/TLS üzerinden iletilir, veritabanında şifreli saklanır',
            'Şifre güvenliği: Şifreler bcrypt ile hashlenir, asla düz metin olarak tutulmaz',
            'JWT token\'ları: Kısa ömürlü erişim token\'ları ve refresh token sistemi kullanılır',
            'Sunucu güvenliği: Hetzner veri merkezleri, GDPR uyumlu Avrupa altyapısı',
            'Düzenli denetim: Güvenlik açıkları düzenli olarak taranır ve kapatılır',
          ]} />
        </Section>

        <Section title="7. Veri Paylaşımı ve Üçüncü Taraflar" emoji="🤝">
          <p>Verilerinizi satmayız veya kiralamayız. Yalnızca aşağıdaki hizmet sağlayıcılarla çalışırız:</p>
          <div className="overflow-x-auto rounded-2xl border border-slate-100 mt-2">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <Th>Hizmet</Th>
                  <Th>Sağlayıcı</Th>
                  <Th>Amaç</Th>
                </tr>
              </thead>
              <tbody>
                <Tr><Td>Yapay Zeka</Td><Td>Google Gemini</Td><Td>Hikaye üretimi</Td></Tr>
                <Tr alt><Td>Görsel Depolama</Td><Td>Cloudinary</Td><Td>Maskot görselleri</Td></Tr>
                <Tr><Td>Veritabanı</Td><Td>PostgreSQL (Hetzner)</Td><Td>Kullanıcı verileri</Td></Tr>
                <Tr alt><Td>Abonelik</Td><Td>RevenueCat</Td><Td>Ödeme yönetimi</Td></Tr>
                <Tr><Td>Uygulama Dağıtımı</Td><Td>Apple / Google</Td><Td>Uygulama mağazaları</Td></Tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm">
            Tüm bu sağlayıcılar kendi gizlilik politikaları kapsamında ve yalnızca hizmet sunmak amacıyla veri işler.
          </p>
        </Section>

        <Section title="8. Haklarınız" emoji="⚖️">
          <p>Türkiye KVKK ve AB GDPR kapsamında aşağıdaki haklara sahipsiniz:</p>
          <BulletList items={[
            'Erişim: Hakkınızdaki verileri görme hakkı',
            'Düzeltme: Hatalı verilerin düzeltilmesini talep hakkı',
            'Silme: Hesabınızı ve tüm verilerinizi silme hakkı ("unutulma hakkı")',
            'Taşıma: Verilerinizi makine okunabilir formatta alma hakkı',
            'İtiraz: Belirli veri işleme faaliyetlerine itiraz hakkı',
          ]} />
          <p className="mt-2">
            Bu haklarınızı kullanmak için{' '}
            <a href="mailto:privacy@taletussle.com" className="text-[#FF9A3C] font-bold hover:underline">
              privacy@taletussle.com
            </a>{' '}
            adresine e-posta gönderin. Talepler 30 gün içinde yanıtlanır.
          </p>
        </Section>

        <Section title="9. Hesap Silme" emoji="🗑️">
          <p>
            Hesabınızı silmek için uygulamada <strong>Profil → Ayarlar → Hesabı Sil</strong> seçeneğini kullanabilirsiniz
            veya{' '}
            <a href="mailto:info@taletussle.com" className="text-[#FF9A3C] font-bold hover:underline">
              info@taletussle.com
            </a>{' '}
            adresine e-posta gönderebilirsiniz.
          </p>
          <p>
            Hesap silindiğinde: profil bilgileri, hikayeler, oyun geçmişi ve çocuk verileri kalıcı olarak silinir.
            Abonelik kayıtları yasal zorunluluk nedeniyle 3 yıl saklanabilir (kişisel tanımlayıcı olmaksızın).
          </p>
        </Section>

        <Section title="10. Çerezler" emoji="🍪">
          <p>
            Mobil uygulama çerez kullanmamaktadır. Bu web sitesi (taletussle.com) yalnızca teknik zorunluluk
            nedeniyle oturum tanımlama amacıyla geçici çerezler kullanabilir; reklam veya izleme çerezi kullanılmaz.
          </p>
        </Section>

        <Section title="11. Politika Değişiklikleri" emoji="📢">
          <p>
            Bu politikayı zaman zaman güncelleyebiliriz. Önemli değişikliklerde uygulama içinde bildirim gönderilir
            veya e-posta ile bilgilendirilirsiniz. Değişiklikler yayımlandıktan sonra uygulamayı kullanmaya devam
            etmeniz yeni politikayı kabul ettiğiniz anlamına gelir.
          </p>
        </Section>

        <Section title="12. İletişim" emoji="📬">
          <p>Gizlilik ile ilgili soru ve talepleriniz için:</p>
          <div className="bg-gradient-to-br from-[#FFF9F0] to-white border-2 border-orange-100 rounded-2xl p-6 mt-2 flex flex-col gap-2">
            <p className="font-bold text-[#1a1a2e] text-lg">🏠 TaleTussle</p>
            <p>📧 <a href="mailto:info@taletussle.com" className="text-[#FF9A3C] font-bold hover:underline">info@taletussle.com</a></p>
            <p>🌐 <a href="https://taletussle.com" className="text-[#FF9A3C] font-bold hover:underline">taletussle.com</a></p>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-12 mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FF9A3C] flex items-center justify-center text-lg">📚</div>
            <span className="font-bold text-xl tracking-tight">TaleTussle</span>
          </div>
          <p className="text-white/40 text-center font-medium text-sm mb-6">
            Her çocuk kendi masalının kahramanıdır. 🌈
          </p>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">© 2026 TaleTussle. Tüm hakları saklıdır.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-[#FF9A3C] font-bold text-sm hover:text-orange-300 transition-colors">Gizlilik</Link>
              <Link href="/terms" className="text-white/50 font-medium text-sm hover:text-white transition-colors">Kullanım Şartları</Link>
              <Link href="/support" className="text-white/50 font-medium text-sm hover:text-white transition-colors">Destek</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
