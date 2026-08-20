import { ImageResponse } from 'next/og'

// Apple touch icon. Has to be a raster format for iOS home-screen bookmarks,
// so it is generated rather than shipped as a second copy of icon.svg.
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F1117',
          color: '#F8F9FA',
          fontFamily: 'sans-serif',
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: '-0.04em',
        }}
      >
        M<span style={{ color: '#6366F1' }}>.</span>
      </div>
    ),
    size
  )
}
