import { Link, NavLink } from 'react-router-dom'

function NavItem({ to, label }: { to: string; label: string }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-text-muted transition-all duration-300 hover:bg-white/10 hover:text-white ${isActive ? 'text-text-primary bg-white/[0.06]' : ''}`
            }
        >
            {label}
        </NavLink>
    )
}

export default function Layout({ children }: { children: React.ReactNode }) {
    const year = new Date().getFullYear()

    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <header className="shrink-0 border-b border-white/[0.08] bg-[#0a0a1a]/75 backdrop-blur-[10px]">
                <div className="w-[min(1100px,calc(100%-40px))] mx-auto flex items-center justify-between py-3.5 gap-3.5">
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <span
                            className="w-3.5 h-3.5 rounded-md bg-gradient-to-br from-cyan-accent to-violet-accent shadow-lg animate-pulse-glow"
                            aria-hidden="true"
                        />
                        <span className="font-bold tracking-tight text-text-primary group-hover:text-white transition-colors duration-300">
                            Spencio
                        </span>
                    </Link>

                    <nav className="flex gap-3 flex-wrap justify-end">
                        <NavItem to="/" label="Home" />
                        <NavItem to="/privacy" label="Privacy" />
                        <NavItem to="/support" label="Support" />
                    </nav>
                </div>
            </header>

            <main className="grow overflow-y-auto py-8 pb-12 [-webkit-overflow-scrolling:touch]">
                <div className="w-[min(1100px,calc(100%-40px))] mx-auto">{children}</div>
            </main>

            <footer className="shrink-0 border-t border-transparent bg-panel-darker/35"
                    style={{ borderImage: 'linear-gradient(to right, #10b981, #8b5cf6, #06b6d4) 1' }}>
                <div className="w-[min(1100px,calc(100%-40px))] mx-auto flex items-center justify-between py-4.5 gap-3.5 flex-wrap">
                    <div>
                        <div className="font-bold text-text-primary">Spencio - Expense Manager</div>
                        <div className="text-text-muted text-sm">&copy; {year} Avenzis Studios</div>
                    </div>
                    <div className="flex gap-3.5">
                        <Link
                            className="text-text-muted hover:text-white hover:no-underline transition-colors duration-300"
                            to="/privacy"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            className="text-text-muted hover:text-white hover:no-underline transition-colors duration-300"
                            to="/support"
                        >
                            Support
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
