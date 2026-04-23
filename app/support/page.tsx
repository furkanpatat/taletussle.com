'use client'

import { useState } from 'react'
import Link from 'next/link'

const FAQ_ITEMS = [
  {
    category: '🚀 Başlarken',
    questions: [
      {
        q: 'TaleTussle nasıl çalışır?',
        a: 'Çocuğunuz için bir profil oluşturursunuz, maskot karakterini seçersiniz. Yapay zeka, çocuğunuzun adını, yaşını ve ilgi alanlarını kullanarak özel masallar oluşturur. Ayrıca mini oyunlar ve günlük yarışmalarla öğrenme eğlenceli hale gelir.',
      },
      {
        q: 'Kaç yaş için uygundur?',
        a: 'TaleTussle 4-12 yaş arası çocuklar için tasarlanmıştır. Yapay zeka, çocuğun yaş aralığına göre uygun zorluk ve içerik seviyesinde hikayeler üretir.',
      },
      {
        q: 'Birden fazla çocuk profili oluşturabilir miyim?',
        a: 'Evet! Tek bir ebeveyn hesabıyla birden fazla çocuk profili oluşturabilirsiniz. Her çocuk kendi maskotunu, ilerlemesini ve hikayelerini ayrı ayrı takip eder.',
      },
      {
        q: 'İnternet bağlantısı şart mıdır?',
        a: 'Yapay zeka hikaye üretimi ve günlük yarışma için internet bağlantısı gereklidir. Klasik masallar kütüphanesinin bir bölümü çevrimdışı kullanılabilir.',
      },
    ],
  },
  {
    category: '💎 Premium Abonelik',
    questions: [
      {
        q: 'Ücretsiz ve Premium arasındaki fark nedir?',
        a: 'Ücretsiz kullanıcılar günlük 3 yapay zeka hikayesi, temel mini oyunlar ve günlük yarışmaya erişebilir. Premium aboneler sınırsız hikaye, tüm maskotlar ve kıyafetler, tüm mini oyunlar ve haftalık ebeveyn raporlarına sahip olur.',
      },
      {
        q: 'Aboneliği nasıl iptal ederim?',
        a: 'iOS için: Ayarlar → Apple ID → Abonelikler → TaleTussle → İptal. Android için: Play Store → Profil → Ödemeler ve abonelikler → TaleTussle → İptal. İptal, mevcut dönem sonunda geçerli olur.',
      },
      {
        q: 'Aboneliği iptal edersem verilerim silinir mi?',
        a: 'Hayır. Aboneliği iptal etseniz bile çocuğunuzun profili, ilerleme bilgileri ve daha önce oluşturulan hikayeler korunur. Yalnızca Premium özelliklerine erişim kapanır.',
      },
      {
        q: 'Ücretsiz deneme var mı?',
        a: 'Evet, yeni kullanıcılar 7 gün ücretsiz Premium deneyimi yaşayabilir. Deneme süresi sonunda ücretlendirme başlar.',
      },
    ],
  },
  {
    category: '📖 Maskotlar ve İçerik',
    questions: [
      {
        q: 'Maskotumu değiştirebilir miyim?',
        a: 'Evet, Gardırop ekranından istediğiniz zaman maskotunuzu değiştirebilirsiniz. Farklı kostümler de kazanabilirsiniz.',
      },
      {
        q: 'Yapay zeka içeriği her zaman güvenli mi?',
        a: 'Yapay zekamız çocuklara uygun içerik filtreleriyle çalışır. Yine de nadiren beklenmedik içerikler üretilebilir. Uygunsuz bir içerikle karşılaşırsanız bildirin, 24 saat içinde inceleriz.',
      },
      {
        q: 'Yıldızlar ne işe yarar?',
        a: 'Yıldızlar uygulama içi bir ödül sistemidir. Hikaye okuma, oyun tamamlama ve günlük görevlerle yıldız kazanılır. Yıldızlarla yeni kostümler ve rozetler açılabilir. Gerçek para değeri yoktur.',
      },
      {
        q: 'Günlük yarışma nedir?',
        a: 'Her gün yeni bir konu etrafında kısa bir eğitim aktivitesi yapılır (örn. "Uzayı keşfedelim!"). Katılanlar puan kazanır ve haftalık lider tablosunda sıralanır.',
      },
    ],
  },
  {
    category: '🔧 Teknik Sorunlar',
    questions: [
      {
        q: 'Uygulama açılmıyor, ne yapmalıyım?',
        a: '1) Uygulamayı tamamen kapatıp yeniden açın. 2) Cihazınızı yeniden başlatın. 3) Uygulama güncellemesi var mı kontrol edin. 4) Uygulamayı silip yeniden yükleyin (verileriniz korunur, sunucuda saklanır). Sorun devam ederse destek birimine yazın.',
      },
      {
        q: 'Satın alma işlemim tamamlandı ama Premium aktif değil?',
        a: 'Uygulamayı kapatıp açın, birkaç dakika bekleyin. Hâlâ çözülmediyse Ayarlar → Profil → Satın Alımları Geri Yükle seçeneğini deneyin. Sorun devam ederse ödeme makbuzuyla birlikte info@taletussle.com adresine yazın.',
      },
      {
        q: 'Hikayeler yüklenmiyor?',
        a: 'İnternet bağlantınızı kontrol edin. Bağlantı iyiyse sunucu bakım modunda olabilir — birkaç dakika bekleyip tekrar deneyin. Sorun 30 dakikadan uzun sürerse lütfen bildirin.',
      },
      {
        q: 'Şifremi unuttum?',
        a: 'Giriş ekranında "Şifremi Unuttum" bağlantısına tıklayın. E-posta adresinize sıfırlama bağlantısı gönderilir. E-posta gelmezse spam klasörünü kontrol edin.',
      },
    ],
  },
]

export default function SupportPage() {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: send to API or Formspree
    setSubmitted(true)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fffbf0' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
        }}>
          <span style={{ fontSize: '28px' }}>📚</span>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '22px' }}>TaleTussle</span>
        </Link>
        <Link href="/" style={{
          color: '#fff',
          textDecoration: 'none',
          fontSize: '14px',
          opacity: 0.9,
        }}>
          ← Ana Sayfa
        </Link>
      </header>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
        padding: '48px 24px 80px',
        textAlign: 'center',
        color: '#fff',
      }}>
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>🙋</div>
        <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px' }}>
          Nasıl Yardımcı Olabiliriz?
        </h1>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '500px', margin: '0 auto' }}>
          Sık sorulan sorulara göz atın veya ekibimizle iletişime geçin.
        </p>
      </div>

      {/* Quick Contact Cards */}
      <div style={{
        maxWidth: '900px',
        margin: '-40px auto 0',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
      }}>
        {[
          { icon: '📧', label: 'E-posta', value: 'info@taletussle.com', href: 'mailto:info@taletussle.com' },
          { icon: '⏱️', label: 'Yanıt Süresi', value: 'Genellikle 24 saat', href: null },
          { icon: '🌍', label: 'Dil', value: 'Türkçe & İngilizce', href: null },
        ].map((item) => (
          <div key={item.label} style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>{item.icon}</div>
            <p style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: '4px' }}>{item.label}</p>
            {item.href ? (
              <a href={item.href} style={{ color: '#f59e0b', textDecoration: 'none', fontSize: '14px' }}>
                {item.value}
              </a>
            ) : (
              <p style={{ color: '#6b7280', fontSize: '14px' }}>{item.value}</p>
            )}
          </div>
        ))}
      </div>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px 80px' }}>
        {/* FAQ */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: 800,
          color: '#1a1a2e',
          marginBottom: '32px',
          textAlign: 'center',
        }}>
          Sık Sorulan Sorular
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '64px' }}>
          {FAQ_ITEMS.map((cat) => (
            <div key={cat.category}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#92400e',
                marginBottom: '12px',
                padding: '8px 16px',
                background: '#fef3c7',
                borderRadius: '8px',
                display: 'inline-block',
              }}>
                {cat.category}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cat.questions.map((item, idx) => {
                  const key = `${cat.category}-${idx}`
                  const isOpen = openItem === key
                  return (
                    <div key={key} style={{
                      background: '#fff',
                      borderRadius: '12px',
                      border: isOpen ? '2px solid #f59e0b' : '2px solid #e5e7eb',
                      overflow: 'hidden',
                      transition: 'border-color 0.2s',
                    }}>
                      <button
                        onClick={() => toggle(key)}
                        style={{
                          width: '100%',
                          padding: '18px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          gap: '12px',
                        }}
                      >
                        <span style={{
                          fontWeight: 600,
                          color: '#1a1a2e',
                          fontSize: '15px',
                          lineHeight: 1.4,
                        }}>
                          {item.q}
                        </span>
                        <span style={{
                          fontSize: '20px',
                          color: '#f59e0b',
                          flexShrink: 0,
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.2s',
                          display: 'inline-block',
                        }}>
                          ▾
                        </span>
                      </button>
                      {isOpen && (
                        <div style={{
                          padding: '0 20px 18px',
                          color: '#4b5563',
                          fontSize: '14px',
                          lineHeight: 1.8,
                          borderTop: '1px solid #fef3c7',
                          paddingTop: '14px',
                        }}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div style={{
          background: '#fff',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 800,
            color: '#1a1a2e',
            marginBottom: '8px',
          }}>
            Bize Yazın
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '28px', fontSize: '15px' }}>
            Sorununuzu bulamadınız mı? Ekibimiz yardımcı olmak için burada.
          </p>

          {submitted ? (
            <div style={{
              background: 'linear-gradient(135deg, #d1fae5, #ecfdf5)',
              border: '2px solid #6ee7b7',
              borderRadius: '12px',
              padding: '32px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#065f46', marginBottom: '8px' }}>
                Mesajınız alındı!
              </h3>
              <p style={{ color: '#047857' }}>
                24 saat içinde <strong>{form.email}</strong> adresinize yanıt göndereceğiz.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Adınız</label>
                  <input
                    required
                    type="text"
                    placeholder="Ali Veli"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>E-posta</label>
                  <input
                    required
                    type="email"
                    placeholder="ali@ornek.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Konu</label>
                <select
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="">Konu seçin...</option>
                  <option value="technical">Teknik Sorun</option>
                  <option value="billing">Ödeme ve Abonelik</option>
                  <option value="account">Hesap</option>
                  <option value="content">İçerik Bildirimi</option>
                  <option value="feature">Öneri</option>
                  <option value="other">Diğer</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Mesajınız</label>
                <textarea
                  required
                  placeholder="Sorununuzu veya önerinizi detaylı anlatın..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                />
              </div>

              <button type="submit" style={{
                background: 'linear-gradient(135deg, #f59e0b, #f97316)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                alignSelf: 'flex-start',
              }}>
                Gönder →
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#1a1a2e',
        color: '#9ca3af',
        padding: '32px 24px',
        textAlign: 'center',
        fontSize: '14px',
      }}>
        <p>© 2025 TaleTussle. Tüm hakları saklıdır.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '12px' }}>
          <Link href="/privacy" style={{ color: '#9ca3af', textDecoration: 'none' }}>Gizlilik</Link>
          <Link href="/terms" style={{ color: '#9ca3af', textDecoration: 'none' }}>Kullanım Şartları</Link>
          <Link href="/support" style={{ color: '#f59e0b', textDecoration: 'none' }}>Destek</Link>
        </div>
      </footer>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontWeight: 600,
  color: '#374151',
  fontSize: '14px',
  marginBottom: '6px',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '2px solid #e5e7eb',
  borderRadius: '10px',
  fontSize: '15px',
  outline: 'none',
  background: '#fff',
  color: '#1a1a2e',
  boxSizing: 'border-box',
}
