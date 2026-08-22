'use client'

import { useEffect, useState } from 'react'
import { ToastProvider } from '@zilver/react-toast-notifications'
import { copy } from '../content'
import HeroSection from './HeroSection'
import SiteHeader from './SiteHeader'

export default function DemoExperience() {
    const [language, setLanguage] = useState('en')
    const content = copy[language]

    useEffect(() => {
        document.documentElement.lang = language
    }, [language])

    return (
        <ToastProvider defaultDuration={4800} position="bottom-center">
            <SiteHeader
                content={content}
                language={language}
                onLanguageChange={setLanguage}
            />
            <main>
                <HeroSection content={content} />
            </main>
        </ToastProvider>
    )
}
