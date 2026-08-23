'use client'

import { useEffect, useState } from 'react'
import { ToastProvider } from '@miguel-bonifaz/react-toast-notifications'
import { copy } from '../content'
import HeroSection from './HeroSection'
import SiteHeader from './SiteHeader'

export default function DemoExperience() {
    const [language, setLanguage] = useState('en')
    const [position, setPosition] = useState('bottom-center')
    const content = copy[language]

    useEffect(() => {
        document.documentElement.lang = language
    }, [language])

    return (
        <ToastProvider position={position}>
            <SiteHeader
                content={content}
                language={language}
                onLanguageChange={setLanguage}
            />
            <main>
                <HeroSection
                    content={content}
                    onPositionChange={setPosition}
                    position={position}
                />
            </main>
        </ToastProvider>
    )
}
