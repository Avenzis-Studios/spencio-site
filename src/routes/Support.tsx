import Seo from '../components/Seo'

const supportPanels = [
    {
        title: 'Email',
        accentClass: 'bg-emerald-accent',
        hoverBorder: 'hover:border-emerald-accent/50',
        delay: 'delay-200',
        content: (
            <>
                <a href="mailto:support@avenzis.studios.com" className="text-emerald-accent hover:underline">
                    support@avenzis.studios.com
                </a>
                <div className="text-text-muted text-sm mt-1">Typical response: 1-3 business days</div>
            </>
        ),
    },
    {
        title: 'Report a bug',
        accentClass: 'bg-rose-accent',
        hoverBorder: 'hover:border-rose-accent/50',
        delay: 'delay-300',
        content: 'Include: app version, device model, OS version, steps to reproduce, and screenshots if possible.',
    },
    {
        title: 'Feature requests',
        accentClass: 'bg-amber-accent',
        hoverBorder: 'hover:border-amber-accent/50',
        delay: 'delay-400',
        content: 'Tell us your workflow and what outcome you want. We prioritize based on impact and complexity.',
    },
]

const faqItems = [
    { q: 'Does the app require an account?', a: 'No. You can use it without signing up.' },
    { q: 'Where is my data stored?', a: 'On your device by default (offline-first).' },
    {
        q: 'Can I export my data?',
        a: "If export is available in your build, you'll see it in Settings. (Update this once implemented.)",
    },
]

export default function Support() {
    return (
        <>
            <Seo
                title="Support - Expense Manager"
                description="Support page for Expense Manager. Get help, report bugs, and request features."
            />

            <article className="max-w-[880px]">
                <h1 className="text-[clamp(34px,4vw,52px)] font-bold tracking-tight mb-3 animate-fade-in-up">
                    Support
                </h1>
                <p className="text-text-muted text-lg leading-relaxed mb-4 animate-fade-in-up delay-100">
                    Need help or want to report a bug? Use the options below.
                </p>

                <div className="grid grid-cols-3 gap-3.5 mt-3.5 max-[900px]:grid-cols-1">
                    {supportPanels.map((panel) => (
                        <div
                            key={panel.title}
                            className={`bg-panel-dark/65 border border-white/[0.08] rounded-2xl p-4 ${panel.hoverBorder} transition-all duration-300 relative overflow-hidden animate-fade-in-up ${panel.delay}`}
                        >
                            <div className={`absolute top-0 left-0 right-0 h-0.5 ${panel.accentClass}`} />
                            <div className="font-bold mb-1.5">{panel.title}</div>
                            <div className="text-text-muted leading-relaxed">
                                {panel.content}
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-[22px] font-bold mt-6 mb-2.5 animate-fade-in-up delay-500">FAQ</h2>
                <div className="mt-3 grid gap-2.5">
                    {faqItems.map((item, i) => (
                        <div
                            key={i}
                            className={`border border-white/[0.08] rounded-2xl p-3.5 bg-panel-dark/45 hover:border-emerald-accent/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300 animate-fade-in-up ${i === 0 ? 'delay-600' : i === 1 ? 'delay-700' : 'delay-700'}`}
                        >
                            <div className="font-bold mb-1.5">{item.q}</div>
                            <div className="text-text-muted leading-relaxed">{item.a}</div>
                        </div>
                    ))}
                </div>
            </article>
        </>
    )
}
