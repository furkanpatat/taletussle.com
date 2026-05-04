import type { Metadata } from 'next'
import LegalLayout, { type LegalSection } from '../../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası — TaleTussle',
  description:
    'TaleTussle gizlilik politikası — KVKK, COPPA, GDPR uyumlu çocuk verisi koruması.',
}

const SECTIONS: LegalSection[] = [
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
]

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Gizlilik Politikası"
      updated="Son güncelleme: 4 Mayıs 2026"
      sections={SECTIONS}
    />
  )
}
