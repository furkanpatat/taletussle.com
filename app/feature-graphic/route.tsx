import { ImageResponse } from 'next/og'

/**
 * Google Play Feature Graphic — 1024×500 banner.
 * Mağaza girişinin tepesinde gösterilen büyük tanıtım görseli.
 *
 * Test:  https://taletussle.com/feature-graphic
 * Save:  Sağ tık → "Save Image As" → feature-graphic.png
 *
 * Boyut spec: Google Play 1024×500 PNG/JPEG, max 15 MB.
 */
export const runtime = 'edge'
export const contentType = 'image/png'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          background: 'linear-gradient(135deg, #FFD93D 0%, #FF9A3C 35%, #FF6B6B 70%, #C77DFF 100%)',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          position: 'relative',
        }}
      >
        {/* Floating decorations */}
        <div style={{ position: 'absolute', top: 30, left: 60, fontSize: 50, opacity: 0.4 }}>✨</div>
        <div style={{ position: 'absolute', top: 50, right: 80, fontSize: 60, opacity: 0.4 }}>🌟</div>
        <div style={{ position: 'absolute', bottom: 40, left: 100, fontSize: 50, opacity: 0.4 }}>🎈</div>
        <div style={{ position: 'absolute', bottom: 60, right: 50, fontSize: 70, opacity: 0.4 }}>🪄</div>

        {/* Left: brand block */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 60,
            paddingRight: 30,
          }}
        >
          {/* Logo placeholder + brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 18,
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 42,
                boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
              }}
            >
              📖
            </div>
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: '#1a1a2e',
                letterSpacing: -2,
              }}
            >
              TaleTussle
            </div>
          </div>

          {/* Slogan */}
          <div
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: '#1a1a2e',
              textAlign: 'center',
              lineHeight: 1.05,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              letterSpacing: -1.5,
              marginBottom: 18,
            }}
          >
            <span>Onun adıyla,</span>
            <span style={{ fontStyle: 'italic', marginTop: 4 }}>onun masalıyla 🪄</span>
          </div>

          {/* Sub-line */}
          <div
            style={{
              fontSize: 18,
              color: 'rgba(26, 26, 46, 0.75)',
              textAlign: 'center',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            Yapay Zekâ • %100 Türkçe • Reklamsız
          </div>
        </div>

        {/* Right: visual block - emoji-based mascot stack */}
        <div
          style={{
            width: 380,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            paddingRight: 40,
          }}
        >
          {/* Glow blobs */}
          <div
            style={{
              position: 'absolute',
              top: 60,
              left: 30,
              width: 220,
              height: 220,
              background: 'rgba(255, 217, 61, 0.45)',
              borderRadius: '50%',
              filter: 'blur(60px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              right: 20,
              width: 200,
              height: 200,
              background: 'rgba(199, 125, 255, 0.4)',
              borderRadius: '50%',
              filter: 'blur(60px)',
            }}
          />

          {/* Big emoji card */}
          <div
            style={{
              width: 240,
              height: 320,
              background: '#fff',
              borderRadius: 28,
              boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              border: '6px solid #fff',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <div style={{ fontSize: 140, lineHeight: 1 }}>🧒</div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: '#1a1a2e',
                background: '#FFD93D',
                padding: '6px 16px',
                borderRadius: 20,
              }}
            >
              ⭐ Macera!
            </div>
          </div>

          {/* Small floating mascot card */}
          <div
            style={{
              position: 'absolute',
              top: 50,
              right: 25,
              width: 90,
              height: 90,
              background: '#fff',
              borderRadius: 22,
              boxShadow: '0 8px 22px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 50,
              border: '4px solid #fff',
              zIndex: 11,
            }}
          >
            👸
          </div>

          {/* Another small floating */}
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              left: 10,
              width: 80,
              height: 80,
              background: '#fff',
              borderRadius: 20,
              boxShadow: '0 8px 22px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 45,
              border: '4px solid #fff',
              zIndex: 11,
            }}
          >
            👨‍🚀
          </div>
        </div>
      </div>
    ),
    {
      width: 1024,
      height: 500,
    },
  )
}
