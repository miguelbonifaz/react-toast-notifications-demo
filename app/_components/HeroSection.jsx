'use client'

import { ArrowUpRight, Check, Code2 } from 'lucide-react'
import { useToast } from '@zilver/react-toast-notifications'
import { GITHUB_URL } from '../content'

export default function HeroSection({ content }) {
    const { toast } = useToast()

    function approveNotification() {
        toast({
            message: content.messages.approved,
            type: 'success',
        })
    }

    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__grid" aria-hidden="true" />
            <div className="hero__content page-width">
                <div className="hero__copy">
                    <p className="eyebrow">{content.hero.eyebrow}</p>
                    <h1 id="hero-title">{content.hero.title}</h1>
                    <p className="hero__body">{content.hero.body}</p>
                    <div className="hero__actions">
                        <button className="button button--primary" type="button" onClick={approveNotification}>
                            <Check size={17} aria-hidden="true" />
                            {content.hero.approve}
                        </button>
                        <a
                            className="button button--quiet"
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {content.hero.github}
                            <ArrowUpRight size={17} aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="hero__visual" aria-label={content.hero.visualLabel}>
                    <div className="hero__visual-glow" />
                    <div className="code-window">
                        <div className="code-window__bar">
                            <div className="code-window__dots" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                            </div>
                            <span>{content.hero.visualFile}</span>
                            <Code2 size={15} aria-hidden="true" />
                        </div>
                        <div className="code-window__body" aria-hidden="true">
                            <span className="code-line code-line--muted">01</span>
                            <span className="code-line">
                                <b>toast</b>(
                                <i>{`{ message: 'Saved!', type: 'success' }`}</i>)
                            </span>
                            <span className="code-line code-line--muted">02</span>
                            <span className="code-line code-line--soft">// feedback, handled</span>
                        </div>
                        <div className="hero__fake-toast">
                            <span className="hero__fake-toast-icon">
                                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                            </span>
                            <span>{content.hero.visualLine}</span>
                        </div>
                    </div>
                    <span className="hero__visual-label">{content.hero.visualLabel}</span>
                </div>
            </div>
        </section>
    )
}
