'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

/**
 * Hafif client-side i18n.
 * - URL routing yok (SPA gibi tek sayfa, anchor'lar TR sabit kalıyor).
 * - localStorage persistence.
 * - SSR'da varsayılan TR ile render → mount sonrası kullanıcı tercihine geçer.
 */

export type Lang = 'tr' | 'en'

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
]

// ── Translation dictionary ──────────────────────────────────────────────
const _dict = {
  tr: {
    nav: {
      features: '✨ Özellikler',
      characters: '🎭 Karakterler',
      parents: '🛡️ Ebeveyn',
      faq: '❓ SSS',
      download: 'İndir 🚀',
    },
    store: {
      comingSoon: 'Yakında',
      appStoreAria: "App Store'da yakında",
      googlePlayAria: "Google Play'de yakında",
    },
    hero: {
      badge: 'Yapay Zekâ ile Çocuğa Özel Masallar',
      title1: 'Onun adıyla,',
      title2: 'onun masalıyla',
      desc1: 'Bir isim yaz, bir tema seç — yapay zekâ saniyeler içinde',
      descBold: 'sesli ve görsel',
      desc2: ' bir masal yazar. Her gece, çocuğun adıyla başlayan yeni bir macera. Reklamsız, güvenli, %100 Türkçe.',
      adFree: 'Reklamsız',
      compliant: 'KVKK / COPPA / GDPR uyumlu',
      familyFriendly: 'Aile dostu',
      mascotCaption: '8 farklı kahraman, sayısız hikâye 🌈',
    },
    how: {
      badge: '🚀 Nasıl Çalışır?',
      title: '3 Adımda Sihirli Bir Gece',
      step: 'Adım',
      s1Title: 'Profil Oluştur',
      s1Desc: 'Çocuğun adı, yaşı ve maskotunu seç. Premium istersen sınırsız masal aç.',
      s2Title: 'Tema Seç',
      s2Desc: 'Uzay, orman, sualtı, şato veya sürpriz. Korku konusu ekle, mod seç (komik / uyku / aksiyon).',
      s3Title: 'Masalın Hazır',
      s3Desc: 'Yapay zekâ saniyeler içinde hikâyeyi yazar, sesli okur ve sayfa sayfa görselleştirir.',
    },
    features: {
      badge: '🏆 TaleTussle Ne Sunuyor?',
      title: 'Bir Masaldan Daha Fazlası',
      subtitle:
        'Hayal gücünü besleyen masallar, beyni geliştiren oyunlar ve aileyi içine alan günlük etkinlikler — tek bir uygulamada.',
      list: [
        {
          title: 'Yapay Zekâ Masallar',
          desc: 'Çocuğun adı, yaşı ve favorileriyle özelleştirilmiş hikâyeler. Her masal sayfa sayfa illüstrasyonlu ve profesyonel sesli okuma ile.',
        },
        {
          title: 'Eğitici Mini Oyunlar',
          desc: 'Matematik, bilim, kelime, görsel hafıza, ritim ve bilmece — yaş grubuna göre seviyelendirilmiş, ödüllü oyun seçenekleri.',
        },
        {
          title: 'Günlük Etkinlik Günleri',
          desc: 'Her gün yeni bir tema, yeni bir yarışma. Çocuk skorboardda yer alır, ödüller kazanır ve günlük serisini korur.',
        },
        {
          title: 'Topluluk Masalları',
          desc: 'Editörler tarafından özenle seçilmiş masallar feed\'i. Her masal hassas içerik filtresinden geçer.',
        },
        {
          title: 'Ünvan, Rozet ve Lig',
          desc: 'XP, seviye, başarımlar, haftalık liderlik tabloları ve ünvanlar — çocuk hem öğrenir hem motive olur.',
        },
        {
          title: 'Karakter Kişiselleştirme',
          desc: '8 maskot karakter, sihirli gardırop ve yıldız mağazasından kostüm ve karakter aksesuarı.',
        },
        {
          title: 'Ebeveyn Paneli',
          desc: 'Çocuk gelişim raporu, okuma süresi, favori temalar, kelime dağarcığı istatistikleri ve tüm bildirim tercihleri.',
        },
        {
          title: 'Tamamen Türkçe',
          desc: 'Pedagojik bakışla yazılmış, yaş grubuna duyarlı, kültürümüze uygun içerikler. Korku konuları opt-in.',
        },
      ],
    },
    characters: {
      badge: '🎭 Maskotlar',
      title: 'Çocuğun Profil Maskotu',
      subtitle:
        '8 sevimli maskottan birini seç — uygulama içi rehber karakter ve profil fotoğrafı olarak çocuğuna eşlik etsin. Dilediğin zaman değiştirebilirsin.',
      labelScience: '🧪 Bilim Dünyası',
      labelSpace: '🚀 Uzay Ekibi',
      meet: 'Tanı',
    },
    parents: {
      badge: '🛡️ Ebeveynler İçin',
      title: 'Güvenle Ellerinizdeyiz',
      subtitle:
        'Çocuk uygulaması demek, ebeveyn güvenidir. Şeffaf veri politikası, açık fiyatlandırma ve tam kontrol.',
      points: [
        {
          title: 'KVKK / COPPA / GDPR Uyumlu',
          desc: 'Çocuk verilerini koruma standartlarının tümüne uyuyoruz. Veri silme ve dışa aktarma her an kullanıcının kontrolünde.',
        },
        {
          title: 'Reklamsız ve Takipsiz',
          desc: 'Üçüncü taraf reklam ağı yok. Davranış izleme yok. Pazarlama amaçlı veri paylaşımı yok.',
        },
        {
          title: 'Pedagojik Yaklaşım',
          desc: 'Yaş gruplarına göre seviyelendirilmiş içerik. Korku temaları opt-in. Şiddet, küfür ve uygunsuz içerik filtrelenir.',
        },
        {
          title: 'Aile Paneli',
          desc: 'Çocuğun gelişimini takip et, bildirim tercihlerini yönet, premium aboneliği App Store / Google Play\'den kontrol et.',
        },
      ],
      contactNote: 'Veri haklarını kullanmak veya soru sormak için:',
    },
    faq: {
      badge: '❓ Sık Sorulan Sorular',
      title: 'Merak Edilenler',
      lead1: 'Aklındaki başka bir soru varsa',
      lead2: ' yaz, en geç 30 gün içinde döneriz.',
      items: [
        {
          q: 'Hangi yaş grubu için uygun?',
          a: 'TaleTussle 3-12 yaş arası çocuklar için tasarlandı. Yaş seçimine göre kelime hazinesi, cümle uzunluğu ve tema karmaşıklığı otomatik ayarlanır. Korku temaları (karanlık, gürültü, canavar vb.) opt-in — varsayılan olarak kapalı.',
        },
        {
          q: 'Çocuğum okumayı bilmiyor, kullanabilir mi?',
          a: 'Evet, tüm masallar profesyonel sesli okuma ile gelir. Çocuk dinleyerek takip eder, sayfa sayfa illüstrasyonlarla görsel deneyim yaşar. Okumayı yeni öğrenenler için ideal.',
        },
        {
          q: 'Ücretli mi, ne kadar?',
          a: 'TaleTussle ücretsiz olarak indirilir ve temel özellikler sınırlı kullanım ile açıktır. Premium üyelik (sınırsız masal, tüm karakterler, özel kostümler) Apple App Store ve Google Play üzerinden satın alınır. Fiyatlandırma uygulama içinde gösterilir; istediğin zaman iptal edebilirsin.',
        },
        {
          q: 'Hangi cihazlarda çalışır?',
          a: 'iOS 14+ ve Android 8+ destekleniyor. Tablet ve telefonda eşit deneyim sunulur. İnternet bağlantısı gerekir (yapay zekâ üretimi için).',
        },
        {
          q: 'Reklam gösterilir mi? Çocuğumun verisi satılır mı?',
          a: 'Hayır. Üçüncü taraf reklam ağları yok, davranış izleme yok, pazarlama amacıyla veri paylaşımı yok. KVKK / COPPA / GDPR uyumlu çalışırız. Detaylı bilgi: Gizlilik Politikası sayfamız.',
        },
        {
          q: 'Veriler nerede saklanır?',
          a: 'Sunucularımız Avrupa\'da. Çocuğun adı, yaşı ve ürettiği masallar şifrelenmiş bağlantı (HTTPS/TLS) üzerinden iletilir. Hesabını ve tüm verilerini istediğin an Ayarlar → Hesabımı Sil ile kalıcı olarak silebilirsin.',
        },
        {
          q: 'Yapay zeka uygunsuz içerik üretir mi?',
          a: 'Çoklu güvenlik filtresi kullanıyoruz: yaş grubu prompt\'a baştan dahil edilir, üretilen metin pedagojik kontrolden geçer, korkutucu/şiddet/uygun olmayan kelimeler bloklanır. Yine de uygunsuz bir şey görürsen geri bildirim ekranından bildir, hemen ele alırız.',
        },
        {
          q: 'Aboneliği nasıl iptal ederim?',
          a: 'Aboneliklerin Apple/Google hesabın üzerinden yönetilir: iOS\'ta Ayarlar → Apple ID → Abonelikler, Android\'de Google Play → Abonelikler. İptal sonrası mevcut dönem sonuna kadar Premium erişimin sürer.',
        },
      ],
    },
    finalCta: {
      title: 'Yarın Akşam Yeni Bir Masal?',
      desc: 'TaleTussle yayında olduğunda haberdar olmak için aşağıdaki düğmelerden mağaza sayfasına git, bildirim al.',
      questions: 'Sorular için',
    },
    footer: {
      tagline: 'Çocukların adıyla başlayan, yapay zekâ ile özelleştirilmiş sesli ve görsel masallar.',
      explore: 'Keşfet',
      legal: 'Yasal',
      contact: 'İletişim',
      links: {
        features: 'Özellikler',
        characters: 'Karakterler',
        parents: 'Ebeveynler',
        faq: 'SSS',
        privacy: 'Gizlilik Politikası',
        terms: 'Kullanım Koşulları',
      },
      rights: '© 2026 TaleTussle. Tüm hakları saklıdır.',
      madeIn: 'Türkiye\'den ❤ ile yapıldı',
    },
    panel: {
      adventureWaiting: 'Macera Seni Bekliyor',
      startWith: 'ile Başla! 🎉',
      startDesc: 'Kendi masalının kahramanı ol, her gece yeni bir dünya keşfet.',
      tryNow: 'Hemen Dene',
      traits: [
        { title: 'Empati Ustası', desc: 'Anlayışlı ve yardımsever.' },
        { title: 'Süper Cesur', desc: 'Hiçbir macerada pes etmez.' },
        { title: 'Güvenilir', desc: 'İyiyi her zaman savunur.' },
        { title: 'Şampiyon', desc: 'Binlerce masalda zafer.' },
      ],
    },
    legal: {
      back: 'Ana Sayfa',
      privacy: 'Gizlilik',
      terms: 'Koşullar',
      questionsFor: 'Sorularınız için:',
    },
  },
  en: {
    nav: {
      features: '✨ Features',
      characters: '🎭 Characters',
      parents: '🛡️ Parents',
      faq: '❓ FAQ',
      download: 'Download 🚀',
    },
    store: {
      comingSoon: 'Coming Soon',
      appStoreAria: 'Coming soon on App Store',
      googlePlayAria: 'Coming soon on Google Play',
    },
    hero: {
      badge: 'AI-Powered Personalized Stories',
      title1: 'In their name,',
      title2: 'their tale',
      desc1: 'Type a name, pick a theme — AI writes a',
      descBold: 'narrated, illustrated',
      desc2: ' tale in seconds. A new adventure starring your child every night. Ad-free, safe, crafted in Turkish.',
      adFree: 'Ad-free',
      compliant: 'KVKK / COPPA / GDPR compliant',
      familyFriendly: 'Family-friendly',
      mascotCaption: '8 unique heroes, endless stories 🌈',
    },
    how: {
      badge: '🚀 How It Works',
      title: 'A Magical Night in 3 Steps',
      step: 'Step',
      s1Title: 'Create a Profile',
      s1Desc: "Pick your child's name, age and mascot. Unlock unlimited stories with Premium if you wish.",
      s2Title: 'Choose a Theme',
      s2Desc: 'Space, forest, underwater, castle or surprise. Add fear topics, pick a mode (funny / sleepy / action).',
      s3Title: 'Tale Ready',
      s3Desc: 'AI writes the story, narrates it and illustrates it page-by-page in seconds.',
    },
    features: {
      badge: '🏆 What TaleTussle Offers',
      title: 'More Than Just a Story',
      subtitle:
        'Tales that fuel imagination, games that grow the brain, and daily events that bring the family in — all in one app.',
      list: [
        {
          title: 'AI-Powered Stories',
          desc: "Stories tailored to your child's name, age and favorites. Every tale is page-by-page illustrated with professional narration.",
        },
        {
          title: 'Educational Mini Games',
          desc: 'Math, science, vocabulary, visual memory, rhythm and riddles — leveled by age group with rewarding gameplay.',
        },
        {
          title: 'Daily Event Days',
          desc: 'A new theme, a new contest every day. Your child appears on the leaderboard, earns rewards and keeps a daily streak.',
        },
        {
          title: 'Community Stories',
          desc: 'A curated feed of editor-approved stories. Each story passes through a strict content filter.',
        },
        {
          title: 'Titles, Badges & Leagues',
          desc: 'XP, levels, achievements, weekly leaderboards and titles — kids learn while staying motivated.',
        },
        {
          title: 'Character Customization',
          desc: '8 mascot characters, a magical wardrobe and a star shop full of costumes and accessories.',
        },
        {
          title: 'Parent Dashboard',
          desc: "Child progress reports, reading time, favorite themes, vocabulary stats and full notification controls.",
        },
        {
          title: 'Crafted in Turkish',
          desc: 'Pedagogically written, age-aware, culturally appropriate content. Fear topics are opt-in.',
        },
      ],
    },
    characters: {
      badge: '🎭 Mascots',
      title: 'Your Child\'s Profile Mascot',
      subtitle:
        'Pick one of 8 lovable mascots — an in-app guide character used as your child\'s profile picture. Change it anytime.',
      labelScience: '🧪 Science Crew',
      labelSpace: '🚀 Space Crew',
      meet: 'Meet',
    },
    parents: {
      badge: '🛡️ For Parents',
      title: 'You Are in Safe Hands',
      subtitle:
        "A children's app means parental trust. Transparent data policy, clear pricing, and full control.",
      points: [
        {
          title: 'KVKK / COPPA / GDPR Compliant',
          desc: 'We follow every standard for protecting children\'s data. Data deletion and export are always under user control.',
        },
        {
          title: 'No Ads, No Tracking',
          desc: 'No third-party ad networks. No behavioral tracking. No data sharing for marketing.',
        },
        {
          title: 'Pedagogical Approach',
          desc: 'Content leveled by age group. Fear themes opt-in. Violence, profanity and inappropriate content are filtered.',
        },
        {
          title: 'Family Dashboard',
          desc: "Track your child's progress, manage notification preferences, control your premium subscription via the App Store / Google Play.",
        },
      ],
      contactNote: 'For data rights or questions:',
    },
    faq: {
      badge: '❓ Frequently Asked',
      title: 'Curious Minds',
      lead1: 'Have another question?',
      lead2: ' — drop us a note and we\'ll reply within 30 days.',
      items: [
        {
          q: 'What age range is it suitable for?',
          a: 'TaleTussle is designed for children aged 3-12. Vocabulary, sentence length and theme complexity adapt automatically to the chosen age. Fear themes (darkness, loud noises, monsters etc.) are opt-in — off by default.',
        },
        {
          q: 'My child can\'t read yet — can they use it?',
          a: 'Yes — every story comes with professional narration. Kids can listen along while enjoying page-by-page illustrations. Ideal for early readers.',
        },
        {
          q: 'Is it paid? How much?',
          a: 'TaleTussle is free to download with limited free use of core features. Premium (unlimited stories, all characters, special costumes) is purchased via the Apple App Store or Google Play. Pricing is shown inside the app and you can cancel anytime.',
        },
        {
          q: 'Which devices does it run on?',
          a: 'iOS 14+ and Android 8+ are supported. The experience is equally good on tablet and phone. An internet connection is required (for AI generation).',
        },
        {
          q: 'Are there ads? Will my child\'s data be sold?',
          a: 'No. No third-party ad networks, no behavioral tracking, no data sharing for marketing. We work in line with KVKK / COPPA / GDPR. Details on our Privacy Policy page.',
        },
        {
          q: 'Where is data stored?',
          a: 'Our servers are in Europe. Your child\'s name, age and generated stories travel over an encrypted connection (HTTPS/TLS). You can permanently delete your account and all data anytime via Settings → Delete My Account.',
        },
        {
          q: 'Can the AI produce inappropriate content?',
          a: 'We use multi-layer safety filters: the age group is included in the prompt from the start, generated text passes a pedagogical check, and frightening/violent/inappropriate words are blocked. If you ever see something off, report it via the feedback screen and we\'ll act on it immediately.',
        },
        {
          q: 'How do I cancel my subscription?',
          a: 'Subscriptions are managed via your Apple/Google account: on iOS, Settings → Apple ID → Subscriptions; on Android, Google Play → Subscriptions. After cancellation, Premium access continues until the end of the current period.',
        },
      ],
    },
    finalCta: {
      title: 'A New Tale Tomorrow Night?',
      desc: 'Tap the buttons below to head to the store page and get notified when TaleTussle goes live.',
      questions: 'For questions',
    },
    footer: {
      tagline: 'AI-personalized narrated, illustrated tales that begin with your child\'s name.',
      explore: 'Explore',
      legal: 'Legal',
      contact: 'Contact',
      links: {
        features: 'Features',
        characters: 'Characters',
        parents: 'Parents',
        faq: 'FAQ',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
      },
      rights: '© 2026 TaleTussle. All rights reserved.',
      madeIn: 'Crafted with ❤ from Türkiye',
    },
    panel: {
      adventureWaiting: 'Adventure Awaits',
      startWith: 'Start with! 🎉',
      startDesc: 'Be the hero of your own tale — discover a new world every night.',
      tryNow: 'Try Now',
      traits: [
        { title: 'Empathy Master', desc: 'Understanding and helpful.' },
        { title: 'Super Brave', desc: 'Never gives up on adventure.' },
        { title: 'Trustworthy', desc: 'Always defends the good.' },
        { title: 'Champion', desc: 'Victory in thousands of tales.' },
      ],
    },
    legal: {
      back: 'Home',
      privacy: 'Privacy',
      terms: 'Terms',
      questionsFor: 'Questions:',
    },
  },
}

export type Dict = (typeof _dict)['tr']
export const dict: Record<Lang, Dict> = _dict

// ── Mascot localized fields ──────────────────────────────────────────────
// Mascot id → { name, trait, description } per language.
export const mascotI18n: Record<string, Record<Lang, { name: string; trait: string; description: string }>> = {
  BOY: {
    tr: { name: 'Alp', trait: 'Cesur Kaşif', description: 'Cesur ve meraklı, her maceraya hazır olan Alp, çocukların en yakın dostu!' },
    en: { name: 'Alp', trait: 'Brave Explorer', description: 'Brave and curious, Alp is ready for every adventure — a child\'s closest friend!' },
  },
  GIRL: {
    tr: { name: 'Zeynep', trait: 'Yıldız Gezgini', description: 'Zeki ve hayalperest Zeynep, yıldızlara ulaşmayı ve yeni hikayeler keşfetmeyi çok sever.' },
    en: { name: 'Zeynep', trait: 'Star Wanderer', description: 'Smart and dreamy, Zeynep loves reaching for the stars and discovering new stories.' },
  },
  PRINCESS: {
    tr: { name: 'Prenses', trait: 'Büyülü Prenses', description: 'Büyülü sarayının sevgi dolu lideri. Kalbiyle yönetir, her zorluğu cesaretle aşar.' },
    en: { name: 'Princess', trait: 'Magical Princess', description: 'The loving leader of her enchanted palace. She rules with her heart and faces every challenge with courage.' },
  },
  KNIGHT: {
    tr: { name: 'Şövalye', trait: 'Kalenin Muhafızı', description: 'Gümüş zırhı ve altın kalbiyle, iyiliğin temsilcisi olan cesur bir savaşçı.' },
    en: { name: 'Knight', trait: 'Castle Guardian', description: 'Silver armor and a heart of gold — a brave warrior who stands for what is good.' },
  },
  SCIENTIST: {
    tr: { name: 'Bilim İnsanı', trait: 'Geleceğin Mucidi', description: 'Deneyler yapmayı ve yeni icatlar keşfetmeyi çok seven meraklı bir deha.' },
    en: { name: 'Scientist', trait: 'Future Inventor', description: 'A curious genius who loves running experiments and discovering new inventions.' },
  },
  SCIENTIST_GIRL: {
    tr: { name: 'Bilim İnsanı', trait: 'Laboratuvar Dahisi', description: 'Mikroskobundan hiç ayırmadığı gözleriyle dünyayı keşfeden genç bir bilim insanı.' },
    en: { name: 'Scientist', trait: 'Lab Genius', description: 'A young scientist exploring the world through her ever-watchful microscope.' },
  },
  ASTRONAUT: {
    tr: { name: 'Astronot', trait: 'Galaksi Koruyucusu', description: 'Evrenin en uzak köşelerinden gelen bu kahraman, bilinmeyenin peşindedir.' },
    en: { name: 'Astronaut', trait: 'Galaxy Guardian', description: 'A hero from the farthest reaches of the universe, chasing the unknown.' },
  },
  ASTRONAUT_GIRL: {
    tr: { name: 'Astronot', trait: 'Uzay Kâşifi', description: 'Yıldızların arasında süzülen bu cesur kız, evreni fethetmeye kararlı.' },
    en: { name: 'Astronaut', trait: 'Space Explorer', description: 'A brave girl gliding among the stars, determined to conquer the universe.' },
  },
}

// ── Context ──────────────────────────────────────────────────────────────
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict }
const LangCtx = createContext<Ctx | null>(null)

const STORAGE_KEY = 'tt_lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('tr')

  // Mount sonrası dil tercihini belirle.
  // Öncelik: ?lang=xx query param > localStorage > default 'tr'
  // ?lang=xx geldiğinde ayrıca localStorage'a yazılır (reviewer linki kalıcı olsun).
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    try {
      const url = new URL(window.location.href)
      const q = url.searchParams.get('lang')?.toLowerCase()
      if (q === 'tr' || q === 'en') {
        setLangState(q)
        localStorage.setItem(STORAGE_KEY, q)
        document.documentElement.lang = q
        return
      }
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null
      if (saved === 'tr' || saved === 'en') {
        setLangState(saved)
        document.documentElement.lang = saved
      }
    } catch {}
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch {}
    if (typeof document !== 'undefined') document.documentElement.lang = l
  }

  return (
    <LangCtx.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangCtx.Provider>
  )
}

export function useLang(): Ctx {
  const v = useContext(LangCtx)
  if (!v) throw new Error('useLang must be used inside LanguageProvider')
  return v
}
