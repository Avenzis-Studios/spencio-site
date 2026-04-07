import Seo from '../components/Seo'
import { Link } from 'react-router-dom'

const featurePanels = [
    {
        title: 'Budgets that match real life',
        text: 'Monthly, weekly, or custom periods. Track percent used and remaining in real time.',
        hoverBorder: 'hover:border-emerald-accent/50',
        accentBg: 'bg-gradient-to-r from-emerald-accent to-transparent',
        delay: 'delay-300',
    },
    {
        title: 'Clear insights',
        text: 'Understand where your money goes with simple totals and breakdowns.',
        hoverBorder: 'hover:border-violet-accent/50',
        accentBg: 'bg-gradient-to-r from-violet-accent to-transparent',
        delay: 'delay-400',
    },
    {
        title: 'Privacy-first',
        text: 'Your financial data stays yours. No ads, no selling data.',
        hoverBorder: 'hover:border-cyan-accent/50',
        accentBg: 'bg-gradient-to-r from-cyan-accent to-transparent',
        delay: 'delay-500',
    },
]

export default function Home() {
    return (
        <>
            <Seo
                title="Expense Manager - Track spending. Control money."
                description="Expense Manager helps you track expenses, manage budgets, and understand your spending with a clean, privacy-first experience."
            />

            <section className="grid grid-cols-[1.3fr_0.9fr] gap-5 items-stretch mt-2.5 max-[900px]:grid-cols-1">
                <div className="animate-fade-in-up">
                    <h1 className="text-[clamp(34px,4vw,52px)] font-bold tracking-tight mb-3 leading-tight bg-gradient-to-r from-emerald-accent via-cyan-accent to-violet-accent bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">
                        Track spending. Control money.
                    </h1>
                    <p className="text-text-muted text-lg leading-relaxed mb-4 animate-fade-in-up delay-100">
                        Spencio-Expense Manager is a fast, privacy-first way to track expenses and plan budgets.
                        Simple daily logging, clear insights, and budget discipline without clutter.
                    </p>

                    <div className="flex gap-3 flex-wrap mt-3.5 animate-fade-in-up delay-200">
                        <a
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold border border-white/[0.08] bg-gradient-to-r from-emerald-accent/30 to-cyan-accent/20 hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 hover:no-underline"
                            href="#download"
                        >
                            Get the app
                        </a>
                        <Link
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] hover:scale-105 transition-all duration-300 hover:no-underline"
                            to="/privacy"
                        >
                            Privacy Policy
                        </Link>
                    </div>

                    <div className="mt-3 text-text-muted text-sm animate-fade-in-up delay-300">
                        No ads. No trackers. Built for daily use.
                    </div>
                </div>

                <div
                    className="bg-gradient-to-b from-panel-dark/95 to-panel-darker/75 border border-violet-accent/30 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm animate-fade-in-right delay-200 animate-float"
                    aria-label="App highlights"
                >
                    <div className="font-bold mb-2.5 text-violet-accent">Highlights</div>
                    <ul className="m-0 pl-4.5 text-text-muted leading-loose">
                        <li>Fast expense logging with categories and tags</li>
                        <li>Budgets by category or whole wallet</li>
                        <li>Real-time spent/remaining and alerts</li>
                        <li>Offline-first performance</li>
                    </ul>
                </div>
            </section>

            <section className="grid grid-cols-3 gap-3.5 mt-5 max-[900px]:grid-cols-1">
                {featurePanels.map((panel) => (
                    <div
                        key={panel.title}
                        className={`bg-panel-dark/65 border border-white/[0.08] rounded-2xl p-4 hover:scale-105 ${panel.hoverBorder} transition-all duration-300 animate-fade-in-up ${panel.delay} relative overflow-hidden`}
                    >
                        <div className={`absolute top-0 left-0 right-0 h-0.5 ${panel.accentBg}`} />
                        <div className="font-bold mb-1.5">{panel.title}</div>
                        <div className="text-text-muted leading-relaxed">{panel.text}</div>
                    </div>
                ))}
            </section>

            <section
                id="download"
                className="mt-6 p-5 border border-transparent rounded-2xl bg-panel-dark/45 relative overflow-hidden animate-fade-in-up delay-600"
                style={{ borderImage: 'linear-gradient(135deg, #10b981, #8b5cf6, #f59e0b) 1' }}
            >
                <h2 className="text-[22px] font-bold mb-2.5">Download</h2>
                <p className="text-text-muted">
                    Available now on iOS and Android.
                </p>

                <div className="flex gap-3 flex-wrap mt-3.5">
                    <a
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold border border-white/[0.08] bg-gradient-to-r from-violet-accent/30 to-rose-accent/20 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-300 hover:no-underline"
                        href="https://apps.apple.com/us/app/spencio-expense-manager/id6758623618"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        App Store
                    </a>
                    <a
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] hover:scale-105 transition-all duration-300 hover:no-underline"
                        href="https://play.google.com/store/apps/details?id=com.avenzis.spencio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Google Play
                    </a>
                </div>
            </section>
        </>
    )
}
