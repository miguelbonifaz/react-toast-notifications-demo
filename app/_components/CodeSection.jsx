const installCode = `npm install @zilver/react-toast-notifications lucide-react`

const usageCode = `import { ToastProvider, useToast } from
  '@zilver/react-toast-notifications'

function SaveButton() {
  const { toast } = useToast()

  return <button onClick={() => toast({
    message: 'Saved!', type: 'success'
  })}>Save</button>
}`

export default function CodeSection({ content }) {
    return (
        <section className="code-section page-width" aria-labelledby="code-title">
            <div className="section-intro">
                <p className="eyebrow">{content.code.eyebrow}</p>
                <h2 id="code-title">{content.code.title}</h2>
                <p>{content.code.body}</p>
            </div>
            <div className="code-panels">
                <div className="code-panel">
                    <div className="code-panel__header">
                        <span>{content.code.install}</span>
                        <span className="code-panel__language">shell</span>
                    </div>
                    <pre><code>{installCode}</code></pre>
                </div>
                <div className="code-panel">
                    <div className="code-panel__header">
                        <span>{content.code.usage}</span>
                        <span className="code-panel__language">jsx</span>
                    </div>
                    <pre><code>{usageCode}</code></pre>
                </div>
            </div>
        </section>
    )
}
