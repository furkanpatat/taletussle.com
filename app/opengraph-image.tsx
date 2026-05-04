import { ImageResponse } from 'next/og'

/**
 * Dynamic Open Graph image — sosyal medyada (WhatsApp, Twitter, FB, Slack vb.)
 * link paylaşıldığında çıkan 1200x630 önizleme görseli.
 *
 * Asset upload gerekmez — Next.js bu sayfayı build sırasında render edip
 * /opengraph-image olarak serve eder; layout metadata'sındaki openGraph.url
 * otomatik bunu picker'a iletir.
 */
export const alt = 'TaleTussle — Onun adıyla, onun masalıyla'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #FFD93D 0%, #FF9A3C 35%, #FF6B6B 70%, #C77DFF 100%)',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          position: 'relative',
        }}
      >
        {/* Floating decoration */}
        <div style={{ position: 'absolute', top: 60, left: 80, fontSize: 80, opacity: 0.5 }}>✨</div>
        <div style={{ position: 'absolute', top: 100, right: 120, fontSize: 90, opacity: 0.5 }}>🌟</div>
        <div style={{ position: 'absolute', bottom: 80, left: 140, fontSize: 70, opacity: 0.5 }}>🎈</div>
        <div style={{ position: 'absolute', bottom: 100, right: 80, fontSize: 100, opacity: 0.5 }}>🪄</div>

        {/* Logo placeholder + brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 60,
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            }}
          >
            📖
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: '#1a1a2e',
              letterSpacing: -2,
            }}
          >
            TaleTussle
          </div>
        </div>

        {/* Title — şiirsel slogan, iki satır */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#1a1a2e',
            textAlign: 'center',
            lineHeight: 1.05,
            maxWidth: 1000,
            marginBottom: 28,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            letterSpacing: -2,
          }}
        >
          <span>Onun adıyla,</span>
          <span style={{ fontStyle: 'italic', marginTop: 4 }}>onun masalıyla 🪄</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 30,
            color: 'rgba(26, 26, 46, 0.75)',
            textAlign: 'center',
            maxWidth: 950,
            display: 'flex',
            justifyContent: 'center',
            lineHeight: 1.3,
          }}
        >
          Yapay zekâ saniyede sesli + görsel masal yazar — her gece yeni bir macera
        </div>

        {/* Bottom badges */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            gap: 16,
            fontSize: 24,
            fontWeight: 700,
            color: 'rgba(26, 26, 46, 0.7)',
          }}
        >
          <span>🇹🇷 Türkçe</span>
          <span>•</span>
          <span>🛡️ Güvenli</span>
          <span>•</span>
          <span>🎭 8 Kahraman</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
