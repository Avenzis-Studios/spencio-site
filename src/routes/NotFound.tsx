import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
    return (
        <>
            <Seo title="Not found - Expense Manager" description="Page not found." />
            <div className="py-10 animate-fade-in-up">
                <h1 className="text-[clamp(60px,10vw,120px)] font-black tracking-tight mb-4 bg-gradient-to-r from-rose-accent via-violet-accent to-cyan-accent bg-clip-text text-transparent">
                    404
                </h1>
                <p className="text-text-muted text-lg leading-relaxed mb-4 animate-fade-in-up delay-100">
                    That page does not exist.
                </p>
                <Link
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold border border-white/[0.08] bg-gradient-to-r from-emerald-accent/30 to-cyan-accent/20 hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 hover:no-underline animate-fade-in-up delay-200"
                    to="/"
                >
                    Go home
                </Link>
            </div>
        </>
    )
}
