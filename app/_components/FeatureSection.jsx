export default function FeatureSection({ content }) {
    return (
        <section className="feature-section page-width" id="how-it-works" aria-labelledby="features-title">
            <div className="section-intro">
                <p className="eyebrow">{content.features.eyebrow}</p>
                <h2 id="features-title">{content.features.title}</h2>
            </div>
            <div className="feature-list">
                {content.features.items.map((item) => (
                    <article className="feature-item" key={item.number}>
                        <span className="feature-item__number">{item.number}</span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
