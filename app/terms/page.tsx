import type { Metadata } from 'next'
import LegalLayout, { type LegalContent } from '../../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Use — TaleTussle',
  description: 'TaleTussle terms of use — subscription, intellectual property, and limitation of liability.',
}

const TR: LegalContent = {
  title: 'Kullanım Koşulları',
  updated: 'Son güncelleme: 4 Mayıs 2026',
  intro: 'TaleTussle uygulamasını indirerek veya kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Lütfen dikkatlice okuyun.',
  sections: [
    {
      heading: '1. Taraflar',
      body: `Bu Kullanım Koşulları, TaleTussle uygulamasının bireysel geliştiricisi ("Geliştirici") ile uygulamayı kullanan kişi ("Kullanıcı") arasında geçerlidir.

İletişim: info@taletussle.com`,
    },
    {
      heading: '2. Hizmetin Tanımı',
      body: `TaleTussle; ebeveynlerin çocukları için yapay zeka destekli, kişiselleştirilmiş masallar oluşturmasına, klasik hikayeleri okumasına ve eğitici mini oyunlar oynamasına olanak tanıyan bir mobil uygulamadır.

Hizmet, ücretsiz (standart) ve ücretli (Premium) olmak üzere iki katmanda sunulur. Özellik kapsamı önceden bildirim yapılmaksızın değiştirilebilir.`,
    },
    {
      heading: '3. Hesap ve Yaş Gereksinimleri',
      body: `• Hesap oluşturmak için 18 yaşında veya daha büyük olmanız ya da ebeveyn/vasi onayıyla 13 yaşında veya daha büyük olmanız gerekir.
• Hesabınıza yetkisiz erişimi önlemekten siz sorumlusunuz.
• Her e-posta adresi için yalnızca bir hesap oluşturulabilir.
• Sahte veya yanlış bilgi vererek hesap oluşturmak yasaktır.
• Çocuk profilleri yalnızca ebeveyn hesabı üzerinden yönetilir; çocuklar doğrudan hesap oluşturamaz.
• Hesap güvenliği için şifre değişikliğinde tüm aktif cihazlardaki oturumlar otomatik olarak sonlandırılır; cihazlarınızda yeniden giriş yapmanız gerekecektir.`,
    },
    {
      heading: '4. Kabul Edilebilir Kullanım',
      body: `Uygulamayı kullanırken aşağıdakilerden kaçınmanız gerekmektedir:

• Yasadışı, zararlı veya taciz edici içerik üretmek
• Sistemi otomatik araçlarla (bot, scraper vb.) kullanmak
• Uygulamanın güvenlik mekanizmalarını atlatmaya çalışmak
• Başkalarının hesabına erişmeye çalışmak
• Ticari amaçla içerik toplamak veya yeniden dağıtmak
• Uygulamayı tersine mühendislik yapmak veya kaynak kodunu çıkarmaya çalışmak`,
    },
    {
      heading: '5. Abonelik ve Ödeme',
      body: `Premium üyelik, Apple App Store veya Google Play Store üzerinden sunulmaktadır.

• Abonelikler, iptal edilmediği sürece otomatik olarak yenilenir.
• Ücretlendirme, mevcut dönem sona ermeden 24 saat önce gerçekleşir.
• İptal; iOS'ta App Store Ayarları → Abonelikler, Android'de Google Play → Abonelikler üzerinden yapılabilir.
• İptal sonrası mevcut dönem sonuna kadar Premium erişim devam eder.
• Dijital içerik olduğundan iade politikası Apple ve Google'ın ilgili kurallarına tabidir.
• Geliştirici, fiyatları önceden bildirerek değiştirme hakkını saklı tutar.`,
    },
    {
      heading: '6. Yapay Zeka İçerikleri',
      body: `Uygulama, içerik üretmek için üçüncü taraf yapay zeka servisleri (Google Gemini, Together AI) kullanmaktadır.

• Üretilen içerikler her zaman doğru, eksiksiz veya uygun olmayabilir.
• Geliştirici, yapay zeka tarafından üretilen içeriklerden kaynaklanan zararlardan sorumlu tutulamaz.
• Uygunsuz bir içerikle karşılaşmanız halinde info@taletussle.com adresinden bildirmenizi rica ederiz.
• Üretilen masallar üzerindeki fikri mülkiyet hakları Geliştirici'ye aittir; kişisel kullanım için ücretsiz lisans tanınır.`,
    },
    {
      heading: '7. Fikri Mülkiyet',
      body: `• Uygulama adı, logosu, tasarımı ve kaynak kodu Geliştirici'nin mülkiyetindedir.
• Uygulamada yer alan klasik hikayeler kamu malı (public domain) eserlerdir.
• Kullanıcı tarafından sağlanan içerikler (çocuk adı, tercihler vb.) yalnızca hizmetin sunulması amacıyla kullanılır.
• Bu Koşullar size uygulamayı kişisel, ticari olmayan amaçlarla kullanma lisansı tanır.`,
    },
    {
      heading: '8. Sorumluluk Sınırlaması',
      body: `Yürürlükteki yasaların izin verdiği azami ölçüde:

• Uygulama "olduğu gibi" sunulur; kesintisiz veya hatasız çalışacağı garanti edilmez.
• Geliştirici, dolaylı, arızi veya sonuç niteliğindeki zararlardan sorumlu tutulamaz.
• Toplam sorumluluğumuz, son 12 ay içinde ödediğiniz abonelik ücretini aşamaz.
• Bu sınırlamalar tüketici koruma mevzuatı kapsamındaki haklarınızı etkilemez.`,
    },
    {
      heading: '9. Hesap Feshi',
      body: `Geliştirici, bu Koşullar'ın ihlali durumunda hesabınızı önceden bildirim yapmaksızın askıya alabilir veya silebilir.

Kullanıcı istediği zaman:
• Ayarlar → Hesabımı ve Verilerimi Sil seçeneğiyle hesabını silebilir.
• Fesih sonrası veriler Gizlilik Politikası'nda belirtilen süre boyunca saklanabilir.`,
    },
    {
      heading: '10. Değişiklikler',
      body: `Bu Koşullar zaman zaman güncellenebilir. Önemli değişiklikler uygulamada bildirim yoluyla duyurulur. Değişiklikten sonra uygulamayı kullanmaya devam etmeniz yeni koşulları kabul ettiğiniz anlamına gelir.`,
    },
    {
      heading: '11. Uygulanacak Hukuk',
      body: `Bu Koşullar Türk hukukuna tabi olup uyuşmazlıklar öncelikle dostane yollarla çözülmeye çalışılacaktır. Çözülememesi halinde İstanbul mahkemeleri ve icra daireleri yetkilidir.`,
    },
    {
      heading: '12. İletişim',
      body: `Sorularınız için:

E-posta: info@taletussle.com
Uygulama: Ayarlar → Geri Bildirim Gönder`,
    },
  ],
}

const EN: LegalContent = {
  title: 'Terms of Use',
  updated: 'Last updated: 4 May 2026',
  intro: 'By downloading or using the TaleTussle app you agree to the following terms. Please read them carefully.',
  sections: [
    {
      heading: '1. Parties',
      body: `These Terms of Use apply between the individual developer of the TaleTussle app ("Developer") and the person using the app ("User").

Contact: info@taletussle.com`,
    },
    {
      heading: '2. Description of the Service',
      body: `TaleTussle is a mobile app that lets parents create AI-powered, personalized stories for their children, read classic stories, and play educational mini-games.

The service is offered in two tiers: free (standard) and paid (Premium). Feature scope may change without prior notice.`,
    },
    {
      heading: '3. Account and Age Requirements',
      body: `• To create an account you must be 18 or older, or 13 or older with the consent of a parent/guardian.
• You are responsible for preventing unauthorized access to your account.
• Only one account may be created per email address.
• Creating an account with false or misleading information is prohibited.
• Child profiles are managed only via a parent account; children may not create accounts directly.
• For account security, on a password change all sessions on active devices are automatically terminated; you will need to sign in again on each device.`,
    },
    {
      heading: '4. Acceptable Use',
      body: `When using the app you must refrain from:

• Generating illegal, harmful or harassing content
• Using the system with automated tools (bots, scrapers, etc.)
• Attempting to bypass the app's security mechanisms
• Attempting to access another user's account
• Collecting or redistributing content for commercial purposes
• Reverse engineering the app or attempting to extract its source code`,
    },
    {
      heading: '5. Subscription and Payment',
      body: `Premium membership is offered through the Apple App Store or Google Play Store.

• Subscriptions auto-renew unless cancelled.
• Charges occur 24 hours before the current period ends.
• To cancel: on iOS, App Store Settings → Subscriptions; on Android, Google Play → Subscriptions.
• After cancellation, Premium access continues until the end of the current period.
• As digital content, refund policies are subject to Apple's and Google's respective rules.
• The Developer reserves the right to change prices with prior notice.`,
    },
    {
      heading: '6. AI-Generated Content',
      body: `The app uses third-party AI services (Google Gemini, Together AI) to generate content.

• Generated content may not always be accurate, complete or appropriate.
• The Developer cannot be held liable for damages arising from AI-generated content.
• If you encounter inappropriate content, please report it to info@taletussle.com.
• Intellectual property rights in generated stories belong to the Developer; a free license is granted for personal use.`,
    },
    {
      heading: '7. Intellectual Property',
      body: `• The app's name, logo, design and source code are the property of the Developer.
• Classic stories included in the app are public domain works.
• Content provided by the user (child name, preferences etc.) is used only to deliver the service.
• These Terms grant you a license to use the app for personal, non-commercial purposes.`,
    },
    {
      heading: '8. Limitation of Liability',
      body: `To the maximum extent permitted by applicable law:

• The app is provided "as is"; uninterrupted or error-free operation is not guaranteed.
• The Developer cannot be held liable for indirect, incidental or consequential damages.
• Our total liability shall not exceed the subscription fees you paid in the last 12 months.
• These limitations do not affect your rights under consumer protection legislation.`,
    },
    {
      heading: '9. Account Termination',
      body: `The Developer may suspend or delete your account without prior notice in case of a breach of these Terms.

The User may at any time:
• Delete their account via Settings → Delete My Account and Data.
• After termination, data may be retained for the period stated in the Privacy Policy.`,
    },
    {
      heading: '10. Changes',
      body: `These Terms may be updated from time to time. Significant changes are announced via in-app notice. Continuing to use the app after a change means you accept the new terms.`,
    },
    {
      heading: '11. Governing Law',
      body: `These Terms are governed by the laws of Türkiye and disputes shall first be resolved amicably. Failing that, the courts and execution offices of Istanbul shall have jurisdiction.`,
    },
    {
      heading: '12. Contact',
      body: `For questions:

Email: info@taletussle.com
App: Settings → Send Feedback`,
    },
  ],
}

export default function TermsPage() {
  return <LegalLayout tr={TR} en={EN} />
}
