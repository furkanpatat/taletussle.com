import type { Metadata } from 'next'
import LegalLayout, { type LegalSection } from '../../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Kullanım Koşulları — TaleTussle',
  description: 'TaleTussle uygulamasının kullanım koşulları, abonelik, fikri mülkiyet ve sorumluluk sınırlaması.',
}

const SECTIONS: LegalSection[] = [
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
]

export default function TermsPage() {
  return (
    <LegalLayout
      title="Kullanım Koşulları"
      updated="Son güncelleme: 4 Mayıs 2026"
      intro="TaleTussle uygulamasını indirerek veya kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Lütfen dikkatlice okuyun."
      sections={SECTIONS}
    />
  )
}
