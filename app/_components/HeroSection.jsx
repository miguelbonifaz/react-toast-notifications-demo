'use client'

import { useState } from 'react'
import { ArrowUpRight, Bell, Code2 } from 'lucide-react'
import { useToast } from '@miguel-bonifaz/react-toast-notifications'
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
const DEFAULT_DURATION_SECONDS = 3
const MAX_DURATION_SECONDS = 60

function getRandomMessageIndex(length, currentIndex) {
    if (length <= 1) {
        return 0
    }

    const randomIndex = Math.floor(Math.random() * (length - 1))

    return randomIndex >= currentIndex ? randomIndex + 1 : randomIndex
}

export default function HeroSection({ content, onPositionChange, position }) {
    const { toast } = useToast()
    const [messageIndex, setMessageIndex] = useState(0)
    const [type, setType] = useState('success')
    const [durationSeconds, setDurationSeconds] = useState(DEFAULT_DURATION_SECONDS)
    const messages = content.hero.playground.messages
    const message = messages[messageIndex]

    const durationMilliseconds = durationSeconds * 1000

    function launchNotification(event) {
        event.preventDefault()

        const nextMessageIndex = getRandomMessageIndex(messages.length, messageIndex)
        const nextMessage = messages[nextMessageIndex]

        toast({
            message: nextMessage,
            type,
            duration: durationMilliseconds,
        })

        setMessageIndex(nextMessageIndex)
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

                <div className="hero__visual">
                    <div className="hero__visual-glow" />
                    <div className="code-window">
                        <div className="code-window__bar">
                            <div className="code-window__dots" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                            </div>
                            <Code2 size={15} aria-hidden="true" />
                        </div>
                        <div className="code-window__body" aria-hidden="true">
                            <span className="code-line code-line--muted">01</span>
                            <span className="code-line code-line--active">
                                <b>toast</b>({'{'}
                            </span>
                            <span className="code-line code-line--muted">02</span>
                            <span className="code-line code-line--active">
                                <i>{`    message: '${codeMessage}',`}</i>
                            </span>
                            <span className="code-line code-line--muted">03</span>
                            <span className="code-line code-line--active">
                                <i>{`    type: '${type}',`}</i>
                            </span>
                            <span className="code-line code-line--muted">04</span>
                            <span className="code-line code-line--active">
                                <i>{`    duration: ${durationMilliseconds}`}</i>
                            </span>
                            <span className="code-line code-line--muted">05</span>
                            <span className="code-line code-line--active">
                                {'})'}
                            </span>
                        </div>
                        <form className="notification-form" onSubmit={launchNotification}>
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
                                <label className="notification-form__field">
                                    <span>{content.hero.playground.duration}</span>
                                    <input
                                        inputMode="numeric"
                                        max={MAX_DURATION_SECONDS}
                                        min="1"
                                        step="1"
                                        type="number"
                                        value={durationSeconds}
                                        onChange={(event) => {
                                            const nextDuration = event.target.valueAsNumber

                                            if (!Number.isFinite(nextDuration)) {
                                                return
                                            }

                                            setDurationSeconds(Math.min(
                                                MAX_DURATION_SECONDS,
                                                Math.max(1, nextDuration),
                                            ))
                                        }}
                                    />
                                </label>
                            </div>
                            <button className="button button--primary notification-form__submit" type="submit">
                                <Bell size={16} aria-hidden="true" />
                                {content.hero.playground.launch}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
