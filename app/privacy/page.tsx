import type { Metadata } from 'next'
import LegalLayout, { type LegalContent } from '../../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy — TaleTussle',
  description:
    'TaleTussle privacy policy — KVKK, COPPA, GDPR compliant child data protection.',
}

const TR: LegalContent = {
  title: 'Gizlilik Politikası',
  updated: 'Son güncelleme: 4 Mayıs 2026',
  sections: [
    {
      heading: '1. Hakkımızda',
      body: `TaleTussle, çocuklar için yapay zeka destekli hikaye deneyimleri sunan bir mobil uygulamadır. Uygulama, bireysel bir geliştirici tarafından Türkiye'den sunulmaktadır.

İletişim: info@taletussle.com`,
    },
    {
      heading: '2. Topladığımız Veriler',
      body: `Ebeveyn Hesabı:
• E-posta adresi
• Ad ve soyad (isteğe bağlı)
• Şifrelenmiş parola (bcrypt)
• Abonelik durumu (RevenueCat aracılığıyla)
• Bildirim tercihleriniz (her bildirim türü için ayrı açma/kapama: seri, görev, premium, topluluk, hareketsizlik)

Çocuk Profilleri:
• Ad
• Yaş
• Maskot tipi (görsel tercih)
• Son aktivite tarihi (hatırlatma bildirimleri için)

Uygulama Kullanımı:
• Oluşturulan ve okunan masallar
• XP puanları, rozetler, başarımlar, oyun istatistikleri
• Bildirim tokeni (Expo push bildirimleri için)

Oturum Verileri:
• 90 gün geçerli yenileme tokeni — cihazınızın güvenli alanında (iOS Keychain / Android Keystore) saklanır; sunucu tarafında yalnızca kimlik referansı tutulur.

13 yaş altı çocuklara ait veriler yalnızca ebeveyn onayı ile toplanır. Ebeveyn hesabı oluşturmak bu onayı kapsar.`,
    },
    {
      heading: '3. Verilerinizi Nasıl Kullanıyoruz',
      body: `• Kişiselleştirilmiş hikaye ve içerik üretimi
• Çocuğun gelişim istatistiklerini ebeveyne raporlama
• Abonelik ve ödeme yönetimi
• Hatırlatma ve bildirim gönderimi (sadece açtığınız bildirim türleri için; son aktivite tarihiniz "maskotun seni özledi" gibi pasiflik hatırlatıcılarında kullanılır)
• Uygulama performansını iyileştirme
• Güvenlik, dolandırıcılık önleme ve hata teşhisi

Verilerinizi üçüncü taraflara satmıyor, kiralamıyor veya pazarlama amacıyla paylaşmıyoruz.`,
    },
    {
      heading: '4. Üçüncü Taraf Hizmetler',
      body: `TaleTussle aşağıdaki hizmetlerden yararlanır:

• Google Gemini AI — Hikaye metni üretimi. Çocuğun adı, yaşı, tema tercihleri ve ebeveynin o anlık olarak girdiği opsiyonel alanlar (örn. sevdiği oyuncak adı, evcil hayvan adı) prompt olarak iletilir. Bu opsiyonel alanlar TaleTussle veritabanında saklanmaz; yalnızca tek seferlik üretim isteği için Google'a gönderilir. Google Gizlilik Politikası geçerlidir.

• Together AI — Sayfa illüstrasyonu üretimi (bireysel masallar + cron/admin tetikli topluluk masalları için). Yalnızca sahne açıklamaları (kişisel veri içermez) gönderilir.

• Cloudinary — Üretilen görsellerin bulutta depolanması.

• RevenueCat — Abonelik ve satın alma yönetimi. Apple/Google ödeme altyapısı kullanılır. Sistem güvenirliği için olay kimliği (eventId) tekrar işleme önlemek amacıyla kayıt edilir.

• Brevo (Sendinblue) — Transactional e-posta gönderimi (e-posta doğrulama, şifre sıfırlama, hoş geldin, abonelik bildirimleri) ve geliştiriciye yönelik sistem hatası teşhis e-postaları. AB merkezli işleyici.

• Expo — Anlık bildirimler için cihaz tokeni işlenir.`,
    },
    {
      heading: '4a. Hata Telemetrisi',
      body: `Sunucuda kritik bir hata oluştuğunda geliştiriciye, sorunu hızlıca teşhis edebilmek için bir teşhis e-postası gönderilir. Bu e-posta yalnızca:
• Hata türü ve teknik özet
• İz takip kimliği (traceId)
• İlgili kullanıcının e-posta adresi (varsa, sadece kimliklendirme amaçlı)

bilgilerini içerir; mesaj içeriği, çocuk profili detayları veya pazarlama amaçlı veri gönderilmez.

İsteğe bağlı: Geri Bildirim ekranında "Hata Bildirimi" gönderirken son 5 teknik hata kaydını (traceId + HTTP durum kodu) otomatik eklemeyi seçebilirsiniz. Bu opt-in özelliktir; varsayılan olarak işaretli olsa da gönderim öncesi her zaman kaldırabilirsiniz.

Yasal dayanak: meşru menfaat (servis güvenliği ve operasyonel sürdürülebilirlik).`,
    },
    {
      heading: '5. Çocukların Gizliliği (COPPA)',
      body: `TaleTussle, 13 yaş altı çocuklara yönelik içerik sunar. ABD'nin COPPA (Çocukların Online Gizlilik Koruma Yasası) gerekliliklerine uyarız:

• Çocuklara ait kişisel veriler yalnızca ebeveyn hesabı aracılığıyla toplanır.
• Çocukların e-posta adresi, telefon numarası veya konum bilgisi toplanmaz.
• Çocuk profillerine yönelik bildirimler ebeveyn hesabı tarafından açıkça etkinleştirilmedikçe gönderilmez; ebeveyn her bildirim türünü Ayarlar → Bildirimler ekranından bağımsız olarak kapatabilir.
• Ebeveynler herhangi bir zamanda çocuklarına ait tüm verilerin silinmesini talep edebilir.
• Çocuk profili verileri yalnızca hizmetin sunulması için zorunlu olan üçüncü taraf işleyicilere (Madde 4) iletilir; pazarlama, profilleme veya reklam amacıyla hiçbir tarafla paylaşılmaz.

Ebeveyn hakları için: info@taletussle.com`,
    },
    {
      heading: '6. KVKK (Türkiye)',
      body: `6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında haklarınız:

• Verilerinizin işlenip işlenmediğini öğrenme
• İşlenen verilere erişim ve düzeltme talep etme
• Belirli koşullarda silinmesini isteme
• İşlemeye itiraz etme
• Yurt dışına aktarıma itiraz etme

Başvurularınız için: info@taletussle.com`,
    },
    {
      heading: '7. GDPR (Avrupa)',
      body: `AB/AEA'da ikamet eden kullanıcılar için GDPR kapsamındaki haklarınız:

• Erişim, düzeltme ve silme hakkı
• İşlemeyi kısıtlama hakkı
• Veri taşınabilirliği hakkı
• İtiraz hakkı

Veri işleme yasal dayanağımız: sözleşmenin ifası ve meşru menfaat.

Talep için: info@taletussle.com`,
    },
    {
      heading: '8. Veri Saklama',
      body: `• Hesap verileri, hesabı silene kadar saklanır.
• Çocuk profil verileri, profil silindiğinde otomatik olarak silinir.
• Üretilen masallar, siz silinceye kadar saklanır.
• Abonelik kayıtları yasal yükümlülükler gereği 5 yıl saklanabilir.`,
    },
    {
      heading: '9. Güvenlik',
      body: `Verilerinizi korumak için şu önlemleri alıyoruz:

• Parolalar bcrypt ile şifrelenir, açık metin saklanmaz.
• Tüm API iletişimleri HTTPS/TLS ile şifrelenir.
• Erişim için 14 gün geçerli JWT, oturum sürekliliği için 90 gün geçerli yenileme tokeni kullanılır. Yenileme tokeni cihazın güvenli alanında (iOS Keychain / Android Keystore) saklanır.
• Şifre değişikliğinde tüm aktif oturum tokenleri (tüm cihazlar) sunucu tarafında geçersiz kılınır; kullanıcının yeniden giriş yapması gerekir.
• API hızı sınırlandırması (rate limit) ile kimlik bilgisi saldırılarına ve doğrulama kodu deneme saldırılarına karşı koruma sağlanır.
• Üçüncü taraf API anahtarları ortam değişkenlerinde, kod içinde değil saklanır.`,
    },
    {
      heading: '10. Hesabınızı ve Verilerinizi Silme / İhraç',
      body: `Uygulama içi seçenekler:
• Ayarlar → Güvenlik → "Hesabımı ve Verilerimi Sil": tüm hesap ve çocuk profili verilerinin kalıcı olarak silinmesini başlatır. Bu işlem geri alınamaz.
• Ayarlar → Güvenlik → "Verilerimi İndir" (GDPR Madde 20 / KVKK Madde 11 — veri taşınabilirliği): hesap bilgileriniz ve çocuk profillerinize ait verileri makine-okunabilir JSON formatında alabilirsiniz.

E-posta üzerinden talep:
• info@taletussle.com adresine e-posta göndererek de silme veya kopyalama talep edebilirsiniz; talepler en geç 30 gün içinde yerine getirilir.

Abonelik kayıtları:
• Aboneliğinizi App Store / Google Play hesap ayarlarından dilediğiniz zaman iptal edebilirsiniz. Geçmiş satın alma kayıtları muhasebe ve yasal yükümlülükler gereği RevenueCat tarafından belirli süre saklanabilir.`,
    },
    {
      heading: '11. Politika Değişiklikleri',
      body: `Bu politikayı güncelleyebiliriz. Önemli değişiklikler uygulamada bildirim yoluyla duyurulur. Güncel politika her zaman bu sayfada mevcuttur.`,
    },
    {
      heading: '12. İletişim',
      body: `Her türlü soru, şikayet ve talepleriniz için:

• E-posta: info@taletussle.com
• Uygulama içi: Ayarlar → Geri Bildirim Gönder
• Web: https://taletussle.com

KVKK / GDPR / COPPA başvurularınıza en geç 30 gün içinde yanıt veriyoruz.`,
    },
  ],
}

const EN: LegalContent = {
  title: 'Privacy Policy',
  updated: 'Last updated: 4 May 2026',
  sections: [
    {
      heading: '1. About Us',
      body: `TaleTussle is a mobile app offering AI-powered story experiences for children. The app is operated by an individual developer based in Türkiye.

Contact: info@taletussle.com`,
    },
    {
      heading: '2. Data We Collect',
      body: `Parent Account:
• Email address
• First and last name (optional)
• Hashed password (bcrypt)
• Subscription status (via RevenueCat)
• Notification preferences (independent on/off for each notification type: streak, mission, premium, community, inactivity)

Child Profiles:
• Name
• Age
• Mascot type (visual preference)
• Last activity date (for reminder notifications)

App Usage:
• Stories generated and read
• XP, badges, achievements, game statistics
• Notification token (for Expo push notifications)

Session Data:
• 90-day refresh token — stored in your device's secure storage (iOS Keychain / Android Keystore); only an identity reference is kept on the server.

Data belonging to children under 13 is collected only with parental consent. Creating a parent account constitutes that consent.`,
    },
    {
      heading: '3. How We Use Your Data',
      body: `• Generating personalized stories and content
• Reporting child progress to the parent
• Managing subscriptions and payments
• Sending reminders and notifications (only for the notification types you enable; your last activity date is used for inactivity reminders such as "your mascot misses you")
• Improving app performance
• Security, fraud prevention and error diagnosis

We do not sell, rent or share your data with third parties for marketing purposes.`,
    },
    {
      heading: '4. Third-Party Services',
      body: `TaleTussle uses the following services:

• Google Gemini AI — Story text generation. The child's name, age, theme preferences and any optional fields the parent enters at that moment (e.g. favorite toy, pet name) are sent in the prompt. Those optional fields are not stored in TaleTussle's database; they are sent to Google only for the one-shot generation request. Google's Privacy Policy applies.

• Together AI — Page illustration generation (for individual stories + cron/admin-triggered community stories). Only scene descriptions (no personal data) are sent.

• Cloudinary — Cloud storage for generated images.

• RevenueCat — Subscription and purchase management. Apple/Google billing infrastructure is used. For system reliability, an event ID (eventId) is recorded to prevent duplicate processing.

• Brevo (Sendinblue) — Transactional email delivery (email verification, password reset, welcome, subscription notices) and developer-facing system error diagnostic emails. EU-based processor.

• Expo — Device tokens are processed for push notifications.`,
    },
    {
      heading: '4a. Error Telemetry',
      body: `When a critical error occurs on the server, a diagnostic email is sent to the developer to enable rapid diagnosis. This email contains only:
• Error type and technical summary
• Trace identifier (traceId)
• The relevant user's email address (if any, for identification only)

No message content, child profile details or marketing data is sent.

Optional: When sending an "Error Report" via the Feedback screen, you may choose to automatically attach the last 5 technical error records (traceId + HTTP status code). This is opt-in; although enabled by default, you can always uncheck it before sending.

Legal basis: legitimate interest (service security and operational sustainability).`,
    },
    {
      heading: '5. Children\'s Privacy (COPPA)',
      body: `TaleTussle offers content directed at children under 13. We comply with the U.S. Children's Online Privacy Protection Act (COPPA):

• Personal data of children is collected only via the parent account.
• We do not collect children's email addresses, phone numbers or location data.
• Notifications targeting child profiles are not sent unless explicitly enabled by the parent account; parents can disable each notification type independently in Settings → Notifications.
• Parents may request deletion of all data belonging to their child at any time.
• Child profile data is shared only with third-party processors strictly necessary to deliver the service (see Section 4); never with any party for marketing, profiling or advertising.

For parental rights: info@taletussle.com`,
    },
    {
      heading: '6. KVKK (Türkiye)',
      body: `Under Turkish Personal Data Protection Law (No. 6698), your rights include:

• Learning whether your data is being processed
• Requesting access to and correction of processed data
• Requesting deletion under certain conditions
• Objecting to processing
• Objecting to international transfers

Requests: info@taletussle.com`,
    },
    {
      heading: '7. GDPR (Europe)',
      body: `For users residing in the EU/EEA, your rights under GDPR include:

• Right to access, rectify and erase
• Right to restrict processing
• Right to data portability
• Right to object

Our legal basis for processing: performance of contract and legitimate interest.

Requests: info@taletussle.com`,
    },
    {
      heading: '8. Data Retention',
      body: `• Account data is retained until you delete your account.
• Child profile data is automatically deleted when the profile is deleted.
• Generated stories are retained until you delete them.
• Subscription records may be retained for 5 years to meet legal obligations.`,
    },
    {
      heading: '9. Security',
      body: `We take the following measures to protect your data:

• Passwords are hashed with bcrypt; plaintext is never stored.
• All API communication is encrypted with HTTPS/TLS.
• A 14-day JWT is used for access; a 90-day refresh token maintains the session. The refresh token is stored in the device's secure storage (iOS Keychain / Android Keystore).
• On password change, all active session tokens (across all devices) are invalidated server-side; the user must sign in again.
• Rate limiting protects against credential-stuffing and verification-code brute force attacks.
• Third-party API keys are stored in environment variables, not in code.`,
    },
    {
      heading: '10. Deleting / Exporting Your Account and Data',
      body: `In-app options:
• Settings → Security → "Delete My Account and Data": permanently deletes all account and child profile data. This cannot be undone.
• Settings → Security → "Download My Data" (GDPR Article 20 / KVKK Article 11 — data portability): you can obtain your account information and child profile data in a machine-readable JSON format.

Email request:
• You may also request deletion or export by emailing info@taletussle.com; requests are fulfilled within 30 days at the latest.

Subscription records:
• You can cancel your subscription anytime from your App Store / Google Play account settings. Past purchase records may be retained for some time by RevenueCat to meet accounting and legal obligations.`,
    },
    {
      heading: '11. Policy Changes',
      body: `We may update this policy. Significant changes are announced via in-app notice. The current policy is always available on this page.`,
    },
    {
      heading: '12. Contact',
      body: `For any questions, complaints or requests:

• Email: info@taletussle.com
• In-app: Settings → Send Feedback
• Web: https://taletussle.com

We respond to KVKK / GDPR / COPPA requests within 30 days at the latest.`,
    },
  ],
}

export default function PrivacyPage() {
  return <LegalLayout tr={TR} en={EN} />
}
