import { ArrowUpRight, Github } from 'lucide-react'
import Link from 'next/link'
import { GITHUB_URL } from '../content'

export default function SiteHeader({ content, language, onLanguageChange }) {
    return (
        <header className="site-header">
            <Link className="brand" href="/" aria-label="React Toast Notifications home">
                <span className="brand__mark">rt</span>
                <span className="brand__name">react toast</span>
            </Link>

            <nav className="site-nav" aria-label="Main navigation">
                <a
                    className="site-nav__github"
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Github size={15} aria-hidden="true" />
                    {content.nav.github}
                    <ArrowUpRight size={14} aria-hidden="true" />
                </a>
            </nav>

            <div className="language-switcher" aria-label="Language">
                <button
                    className={language === 'en' ? 'is-active' : ''}
                    type="button"
                    aria-pressed={language === 'en'}
                    onClick={() => onLanguageChange('en')}
                >
                    EN
                </button>
                <span aria-hidden="true">/</span>
                <button
                    className={language === 'es' ? 'is-active' : ''}
                    type="button"
                    aria-pressed={language === 'es'}
                    onClick={() => onLanguageChange('es')}
                >
                    ES
                </button>
            </div>
        </header>
    )
}
