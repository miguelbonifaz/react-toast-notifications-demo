'use client'

import { Bell, Check, ChevronDown, Layers3, Sparkles, X } from 'lucide-react'
import { positionTypes, toastTypes } from '../content'
import { useToast } from '@zilver/react-toast-notifications'

function MockSchedule({ content }) {
    return (
        <div className="mock-schedule">
            <div className="mock-schedule__heading">
                <div>
                    <span className="mock-label">{content.demo.workspace}</span>
                    <strong>{content.demo.today}</strong>
                </div>
                <span className="mock-status">
                    <span className="mock-status__dot" />
                    {content.demo.open}
                </span>
            </div>
            <div className="mock-schedule__rule" />
            <span className="mock-label">{content.demo.schedule}</span>
            <div className="schedule-row schedule-row--current">
                <span className="schedule-row__time">09:30</span>
                <div className="schedule-row__item">
                    <strong>María Bonilla</strong>
                    <span>Signature cut · 45 min</span>
                </div>
                <span className="schedule-row__check"><Check size={14} aria-hidden="true" /></span>
            </div>
            <div className="schedule-row">
                <span className="schedule-row__time">11:00</span>
                <div className="schedule-row__item">
                    <strong>Andrés León</strong>
                    <span>Color refresh · 60 min</span>
                </div>
            </div>
            <div className="schedule-row schedule-row--muted">
                <span className="schedule-row__time">13:30</span>
                <div className="schedule-row__item">
                    <strong>Open slot</strong>
                    <span>Available for booking</span>
                </div>
            </div>
        </div>
    )
}

export default function ToastPlayground({ content, position, onPositionChange }) {
    const { toast, dismissAll } = useToast()

    function showToast(type, options = {}) {
        toast({
            message: content.messages[options.messageKey ?? type],
            type,
            ...options,
        })
    }

    function stackToasts() {
        showToast('created')
        showToast('updated')
        showToast('success')
    }

    return (
        <section className="playground-section page-width" id="demo" aria-labelledby="demo-title">
            <div className="section-intro section-intro--wide">
                <p className="eyebrow">{content.demo.eyebrow}</p>
                <h2 id="demo-title">{content.demo.title}</h2>
                <p>{content.demo.body}</p>
            </div>

            <div className="playground-frame">
                <div className="playground-frame__bar">
                    <div className="playground-frame__identity">
                        <span className="playground-frame__dot" />
                        <span>{content.demo.status}</span>
                    </div>
                    <span className="playground-frame__hint">@zilver/react-toast-notifications</span>
                </div>
                <div className="playground-frame__body">
                    <MockSchedule content={content} />
                    <div className="playground-controls">
                        <div className="playground-controls__heading">
                            <span className="mock-label">{content.demo.trigger}</span>
                            <Layers3 size={18} aria-hidden="true" />
                        </div>
                        <div className="type-grid">
                            {toastTypes.map((type) => (
                                <button
                                    className={`type-button type-button--${type}`}
                                    key={type}
                                    type="button"
                                    onClick={() => showToast(type)}
                                >
                                    <span className="type-button__dot" />
                                    {content.demo.typeLabels[type]}
                                </button>
                            ))}
                        </div>
                        <div className="control-divider" />
                        <div className="control-actions">
                            <button className="control-button" type="button" onClick={stackToasts}>
                                <Layers3 size={15} aria-hidden="true" />
                                {content.demo.stack}
                            </button>
                            <button className="control-button" type="button" onClick={() => showToast('success', { messageKey: 'custom', icon: Sparkles })}>
                                <Sparkles size={15} aria-hidden="true" />
                                {content.demo.custom}
                            </button>
                            <button className="control-button" type="button" onClick={() => showToast('warning', { duration: 0 })}>
                                <Bell size={15} aria-hidden="true" />
                                {content.demo.persistent}
                            </button>
                            <button className="control-button control-button--danger" type="button" onClick={dismissAll}>
                                <X size={15} aria-hidden="true" />
                                {content.demo.dismiss}
                            </button>
                        </div>
                        <label className="position-control">
                            <span>{content.demo.position}</span>
                            <span className="select-wrap">
                                <select value={position} onChange={(event) => onPositionChange(event.target.value)}>
                                    {positionTypes.map((item) => (
                                        <option key={item} value={item}>{content.demo.positions[item]}</option>
                                    ))}
                                </select>
                                <ChevronDown size={15} aria-hidden="true" />
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    )
}
