'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Bell, Check, Code2 } from 'lucide-react'
import { useToast } from '@zilver/react-toast-notifications'
import { GITHUB_URL } from '../content'

const TOAST_TYPES = ['success', 'info', 'warning', 'error']
const TOAST_POSITIONS = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
]

export default function HeroSection({ content, onPositionChange, position }) {
    const { toast } = useToast()
    const initialMessage = content.hero.playground.initialMessage
    const [message, setMessage] = useState(initialMessage)
    const [type, setType] = useState('success')
    const previousInitialMessage = useRef(initialMessage)

    useEffect(() => {
        setMessage((current) => (
            current === previousInitialMessage.current ? initialMessage : current
        ))
        previousInitialMessage.current = initialMessage
    }, [initialMessage])

    function approveNotification() {
        toast({
            message: content.messages.approved,
            type: 'success',
        })
    }

    function launchNotification(event) {
        event.preventDefault()

        const trimmedMessage = message.trim()

        if (!trimmedMessage) {
            return
        }

        toast({
            message: trimmedMessage,
            type,
        })
    }

    const codeMessage = message.replaceAll('\\', '\\\\').replaceAll("'", "\\'")

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
                            <span className="code-line code-line--active">
                                <b>toast</b>(
                                <i>{`{ message: '${codeMessage}', type: '${type}' }`}</i>)
                            </span>
                            <span className="code-line code-line--muted">02</span>
                            <span className="code-line code-line--soft">// feedback, handled</span>
                        </div>
                        <form className="notification-form" onSubmit={launchNotification}>
                            <label className="notification-form__field notification-form__field--message">
                                <span>{content.hero.playground.message}</span>
                                <input
                                    maxLength={80}
                                    required
                                    type="text"
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                />
                            </label>
                            <div className="notification-form__row">
                                <label className="notification-form__field">
                                    <span>{content.hero.playground.type}</span>
                                    <select value={type} onChange={(event) => setType(event.target.value)}>
                                        {TOAST_TYPES.map((option) => (
                                            <option key={option} value={option}>
                                                {content.hero.playground.types[option]}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                                <label className="notification-form__field">
                                    <span>{content.hero.playground.position}</span>
                                    <select
                                        value={position}
                                        onChange={(event) => onPositionChange(event.target.value)}
                                    >
                                        {TOAST_POSITIONS.map((option) => (
                                            <option key={option} value={option}>
                                                {content.hero.playground.positions[option]}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            <button className="button button--primary notification-form__submit" type="submit">
                                <Bell size={16} aria-hidden="true" />
                                {content.hero.playground.launch}
                            </button>
                        </form>
                    </div>
                    <span className="hero__visual-label">{content.hero.visualLabel}</span>
                </div>
            </div>
        </section>
    )
}
