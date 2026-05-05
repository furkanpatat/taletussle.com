import type { Metadata } from 'next'
import LegalLayout, { type LegalContent } from '../../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Hesap Silme / Account Deletion — TaleTussle',
  description:
    'TaleTussle hesabınızı ve tüm verilerinizi nasıl silersiniz — uygulama içinden veya e-posta ile.',
}

const TR: LegalContent = {
  title: 'Hesap ve Veri Silme',
  updated: 'Son güncelleme: 5 Mayıs 2026',
  intro:
    'TaleTussle hesabınızı ve ilişkili tüm verilerinizi (parent hesabı + tüm çocuk profilleri + üretilen masallar) kalıcı olarak silebilirsiniz. Bu sayfa hesap silme adımlarını ve hangi verilerin silineceğini açıklar.',
  sections: [
    {
      heading: '1. Uygulama İçinden Silme (Önerilen Yöntem)',
      body: `En hızlı ve doğrulanabilir yöntem doğrudan uygulama içinden silmektir:

1. TaleTussle uygulamasını açın ve hesabınıza giriş yapın
2. Sağ alttaki "Ayarlar" sekmesine dokunun
3. Sayfayı aşağı kaydırın → "Güvenlik" bölümünü açın
4. "Hesabımı ve Verilerimi Sil" düğmesine dokunun
5. Onay ekranında parolanızı girerek silme işlemini onaylayın

Silme işlemi anında başlar ve birkaç dakika içinde tamamlanır.`,
    },
    {
      heading: '2. E-posta Yoluyla Silme Talebi',
      body: `Uygulamaya erişiminiz yoksa veya başka bir nedenle uygulama içinden silemiyorsanız, e-posta yoluyla talep gönderebilirsiniz.

E-posta gönderin: info@taletussle.com

Konu: Hesap Silme Talebi

İçerikte belirtin:
• TaleTussle hesabınızla kayıtlı e-posta adresi
• Kimlik doğrulama amacıyla istenecek ek bilgi (gerektiğinde sorulur)

Talepleriniz en geç 30 gün içinde işleme alınır ve onay e-postası gönderilir.`,
    },
    {
      heading: '3. Silinen Veriler',
      body: `Hesap silme işleminde aşağıdaki tüm veriler kalıcı olarak silinir:

Ebeveyn Hesabı:
• E-posta adresi, ad/soyad (varsa), şifrelenmiş parola
• Abonelik durumu kayıtları (TaleTussle veritabanında)
• Bildirim tercihleri ve push tokenleri
• Aktif oturum tokenleri (tüm cihazlar)

Çocuk Profilleri:
• Tüm çocuk profilleri (ad, yaş, maskot tercihi)
• XP puanları, rozetler, başarımlar, oyun istatistikleri
• Üretilen tüm masallar ve illüstrasyonları
• Etkinlik kayıtları, son aktivite tarihleri

Diğer:
• Geri bildirim mesajları (silinmesi istenirse ayrıca belirtin)
• İçerik şikayetleri (silinmesi istenirse ayrıca belirtin)`,
    },
    {
      heading: '4. Saklanan Veriler (Yasal Zorunluluk)',
      body: `Aşağıdaki veriler, yasal yükümlülükler nedeniyle belirli süre saklanır:

• Geçmiş abonelik / satın alma kayıtları: RevenueCat ve App Store / Google Play tarafından muhasebe ve vergi yükümlülükleri gereği 5 yıla kadar saklanabilir. Bu kayıtlar TaleTussle veritabanında değil, ödeme altyapısında tutulur.

• Sistem hata logları: Hata teşhis amaçlı saklanan teknik kayıtlar (hata zamanı, traceId) en fazla 90 gün içinde otomatik silinir; içinde kişisel veri yer almaz.

• Hukuki süreçlere konu olan veriler: Devam eden bir hukuki süreç varsa, ilgili veriler süreç tamamlanana kadar saklanır.`,
    },
    {
      heading: '5. Aboneliğinizi İptal Etme',
      body: `Hesap silme işlemi otomatik abonelik iptalini içermez. Aboneliğinizin yenilenmesini durdurmak için:

iOS (Apple App Store):
Ayarlar → Apple ID → Abonelikler → TaleTussle → İptal

Android (Google Play):
Google Play → Profil ikonu → Ödemeler ve abonelikler → Abonelikler → TaleTussle → İptal

İptal sonrası mevcut dönem sonuna kadar Premium erişiminiz devam eder.`,
    },
    {
      heading: '6. Veri Dışa Aktarma (Silme Yerine)',
      body: `Verilerinizi silmek yerine bir kopyasını almak isterseniz GDPR Madde 20 / KVKK Madde 11 (veri taşınabilirliği) hakkı çerçevesinde:

1. Uygulama içinden: Ayarlar → Güvenlik → "Verilerimi İndir"
2. E-posta yoluyla: info@taletussle.com adresine talep gönderin

Verileriniz makine-okunabilir JSON formatında size sunulur.`,
    },
    {
      heading: '7. İletişim',
      body: `Sorularınız veya silme talepleriniz için:

• E-posta: info@taletussle.com
• Web: https://taletussle.com
• Uygulama içi: Ayarlar → Geri Bildirim Gönder

KVKK / GDPR / COPPA başvurularınıza en geç 30 gün içinde yanıt veriyoruz.`,
    },
  ],
}

const EN: LegalContent = {
  title: 'Account and Data Deletion',
  updated: 'Last updated: 5 May 2026',
  intro:
    'You can permanently delete your TaleTussle account and all associated data (parent account + all child profiles + generated stories). This page explains the deletion steps and what data is deleted.',
  sections: [
    {
      heading: '1. In-App Deletion (Recommended Method)',
      body: `The fastest and most verifiable method is to delete directly from within the app:

1. Open the TaleTussle app and sign in to your account
2. Tap the "Settings" tab at the bottom right
3. Scroll down → open the "Security" section
4. Tap the "Delete My Account and Data" button
5. Confirm the deletion by entering your password on the confirmation screen

Deletion starts immediately and completes within a few minutes.`,
    },
    {
      heading: '2. Deletion Request by Email',
      body: `If you cannot access the app or cannot delete in-app for any other reason, you may request deletion by email.

Send an email to: info@taletussle.com

Subject: Account Deletion Request

In the body, include:
• The email address registered with your TaleTussle account
• Additional verification info (will be requested if needed)

Requests are processed within 30 days at the latest, and a confirmation email is sent.`,
    },
    {
      heading: '3. Data That Is Deleted',
      body: `Account deletion permanently removes the following:

Parent Account:
• Email address, name/surname (if any), hashed password
• Subscription status records (in TaleTussle database)
• Notification preferences and push tokens
• Active session tokens (across all devices)

Child Profiles:
• All child profiles (name, age, mascot preference)
• XP points, badges, achievements, game statistics
• All generated stories and their illustrations
• Activity records and last-activity dates

Other:
• Feedback messages (please request separately if you want them deleted)
• Content reports (please request separately if you want them deleted)`,
    },
    {
      heading: '4. Retained Data (Legal Requirements)',
      body: `The following data may be retained for a defined period to meet legal obligations:

• Past subscription / purchase records: RevenueCat and the App Store / Google Play may retain these for up to 5 years for accounting and tax purposes. These records are kept in the payment infrastructure, not in TaleTussle's database.

• System error logs: Technical records kept for diagnostic purposes (error timestamp, traceId) are automatically deleted within 90 days at the latest; they contain no personal data.

• Data subject to legal proceedings: If there is an ongoing legal proceeding, related data is retained until the proceeding is concluded.`,
    },
    {
      heading: '5. Cancelling Your Subscription',
      body: `Account deletion does not automatically cancel an active subscription. To stop renewals:

iOS (Apple App Store):
Settings → Apple ID → Subscriptions → TaleTussle → Cancel

Android (Google Play):
Google Play → Profile icon → Payments and subscriptions → Subscriptions → TaleTussle → Cancel

After cancellation, Premium access continues until the end of the current period.`,
    },
    {
      heading: '6. Data Export (Instead of Deletion)',
      body: `If you would like a copy of your data instead of deleting it, under your GDPR Article 20 / KVKK Article 11 (data portability) rights:

1. From within the app: Settings → Security → "Download My Data"
2. By email: send a request to info@taletussle.com

Your data will be provided to you in a machine-readable JSON format.`,
    },
    {
      heading: '7. Contact',
      body: `For any questions or deletion requests:

• Email: info@taletussle.com
• Web: https://taletussle.com
• In-app: Settings → Send Feedback

We respond to KVKK / GDPR / COPPA requests within 30 days at the latest.`,
    },
  ],
}

export default function AccountDeletePage() {
  return <LegalLayout tr={TR} en={EN} />
}
