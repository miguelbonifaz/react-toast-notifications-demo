import { ArrowUpRight } from 'lucide-react'
import { GITHUB_URL } from '../content'

export default function FooterCta({ content }) {
    return (
        <footer className="footer-cta page-width">
            <div className="footer-cta__inner">
                <p className="eyebrow">{content.footer.eyebrow}</p>
                <h2>{content.footer.title}</h2>
                <a
                    className="button button--primary"
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    {content.footer.button}
                    <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <p className="footer-cta__note">{content.footer.note}</p>
            </div>
            <div className="footer-cta__bottom">
                <span>© 2026 React Toast Notifications</span>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">miguelbonifaz/react-toast-notifications</a>
            </div>
        </footer>
    )
}
