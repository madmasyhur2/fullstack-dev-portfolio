import { ImageResponse } from 'next/og'

// Generated social card — mirrors the site palette (deep slate + electric
// indigo). Replaces the previously-referenced /og-image.png that never existed.
export const alt =
  'Muhammad Bin Djafar Almasyhur — AI Automation Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#0F1117',
          color: '#F8F9FA',
          fontFamily: 'sans-serif',
        }}
      >
        {/* eyebrow: indigo tick + role */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '56px', height: '6px', backgroundColor: '#6366F1' }} />
          <div
            style={{
              fontSize: '24px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#94A3B8',
            }}
          >
            AI AUTOMATION ENGINEER
          </div>
        </div>

        {/* name */}
        <div
          style={{
            display: 'flex',
            fontSize: '92px',
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: '-0.02em',
            maxWidth: '960px',
          }}
        >
          Muhammad Bin Djafar Almasyhur
        </div>

        {/* footer: availability + competencies */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '28px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '999px', backgroundColor: '#10B981' }} />
          <div style={{ color: '#94A3B8' }}>
            Agentic systems · LLM integration · workflow automation
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
