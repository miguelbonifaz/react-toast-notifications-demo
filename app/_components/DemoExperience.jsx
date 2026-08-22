'use client'

import { useEffect, useState } from 'react'
import { ToastProvider, useToast } from '@zilver/react-toast-notifications'
import { copy } from '../content'
import CodeSection from './CodeSection'
import FeatureSection from './FeatureSection'
import FooterCta from './FooterCta'
import HeroSection from './HeroSection'
import SiteHeader from './SiteHeader'
import ToastPlayground from './ToastPlayground'

function IntroToast({ message }) {
    const { toast } = useToast()

    useEffect(() => {
        const timer = window.setTimeout(() => {
            toast({ message, type: 'success' })
        }, 700)

        return () => window.clearTimeout(timer)
    }, [message, toast])

    return null
}

export default function DemoExperience() {
    const [language, setLanguage] = useState('en')
    const [position, setPosition] = useState('bottom-center')
    const content = copy[language]

    useEffect(() => {
        document.documentElement.lang = language
    }, [language])

    return (
        <ToastProvider defaultDuration={4800} position={position}>
            <IntroToast message={content.messages.ready} />
            <SiteHeader
                content={content}
                language={language}
                onLanguageChange={setLanguage}
            />
            <main>
                <HeroSection content={content} />
                <ToastPlayground
                    content={content}
                    position={position}
                    onPositionChange={setPosition}
                />
                <FeatureSection content={content} />
                <CodeSection content={content} />
                <FooterCta content={content} />
            </main>
        </ToastProvider>
    )
}
