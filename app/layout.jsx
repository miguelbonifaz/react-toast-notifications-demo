import { DM_Sans, Space_Grotesk } from 'next/font/google'
import '@miguel-bonifaz/react-toast-notifications/styles.css'
import './globals.css'
import './styles/hero.css'

const bodyFont = DM_Sans({
    subsets: ['latin'],
    variable: '--font-body',
})

const displayFont = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-display',
})

export const metadata = {
    title: 'React Toast Notifications — Live Demo',
    description: 'Explore the accessible React toast notification package through an interactive demo.',
    openGraph: {
        title: 'React Toast Notifications — Live Demo',
        description: 'A small, accessible toast layer for React interfaces.',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
        </html>
    )
}
