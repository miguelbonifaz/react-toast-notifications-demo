import { DM_Sans, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import '@miguel-bonifaz/react-toast-notifications/styles.css'
import './globals.css'
import './styles/hero.css'
import {
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_TITLE,
    SITE_URL,
    GA_MEASUREMENT_ID,
} from './site-config'

const bodyFont = DM_Sans({
    subsets: ['latin'],
    variable: '--font-body',
})

const displayFont = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-display',
})

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: [
        'React toast notifications',
        'React toast',
        'accessible notifications',
        'toast notification component',
    ],
    applicationName: SITE_NAME,
    category: 'technology',
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        siteName: SITE_NAME,
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: 'React Toast Notifications accessible React demo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: ['/opengraph-image'],
    },
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#f4f8f5',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${bodyFont.variable} ${displayFont.variable}`}>
                {children}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){window.dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_MEASUREMENT_ID}');
                    `}
                </Script>
            </body>
        </html>
    )
}
