import { ImageResponse } from 'next/og'
import { SITE_NAME, SITE_URL } from './site-config'

export const alt = 'React Toast Notifications accessible React demo'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#f4f8f5',
                    color: '#17372b',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'Arial',
                    height: '100%',
                    padding: '72px',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        alignItems: 'center',
                        color: '#188b68',
                        display: 'flex',
                        fontSize: 30,
                        fontWeight: 700,
                        gap: 18,
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            background: '#a7f3d0',
                            borderRadius: 16,
                            display: 'flex',
                            height: 58,
                            justifyContent: 'center',
                            width: 58,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 5,
                                width: 26,
                            }}
                        >
                            <div style={{ background: '#17372b', height: 6, width: 26 }} />
                            <div style={{ background: '#17372b', height: 6, width: 18 }} />
                        </div>
                    </div>
                    <span>{SITE_NAME}</span>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 'auto',
                        marginTop: 'auto',
                    }}
                >
                    <div
                        style={{
                            color: '#188b68',
                            fontSize: 24,
                            letterSpacing: 3,
                            textTransform: 'uppercase',
                        }}
                    >
                        React toast notifications
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: 72,
                            fontWeight: 600,
                            letterSpacing: -3,
                            lineHeight: 1.05,
                            marginTop: 24,
                        }}
                    >
                        <span>Accessible feedback</span>
                        <span>for React interfaces.</span>
                    </div>
                    <div
                        style={{
                            color: '#4d675a',
                            fontSize: 28,
                            marginTop: 28,
                        }}
                    >
                        Live demo · success · info · warning · error
                    </div>
                </div>

                <div style={{ color: '#71877a', fontSize: 22 }}>{SITE_URL}</div>
            </div>
        ),
        size,
    )
}
