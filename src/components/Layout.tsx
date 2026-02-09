import { Link, NavLink } from 'react-router-dom'

function NavItem({ to, label }: { to: string; label: string }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `navLink ${isActive ? 'navLinkActive' : ''}`
            }
        >
            {label}
        </NavLink>
    )
}

export default function Layout({ children }: { children: React.ReactNode }) {
    const year = new Date().getFullYear()

    return (
        <div className="page">
            <header className="header">
                <div className="container headerInner">
                    <Link to="/" className="brand">
                        <span className="brandMark" aria-hidden="true" />
                        <span className="brandText">Expense Manager</span>
                    </Link>

                    <nav className="nav">
                        <NavItem to="/" label="Home" />
                        <NavItem to="/privacy" label="Privacy" />
                        <NavItem to="/support" label="Support" />
                    </nav>
                </div>
            </header>

            <main className="main">
                <div className="container">{children}</div>
            </main>

            <footer className="footer">
                <div className="container footerInner">
                    <div className="footerLeft">
                        <div className="footerBrand">Expense Manager</div>
                        <div className="footerMeta">© {year} Expense Manager</div>
                    </div>
                    <div className="footerRight">
                        <Link className="footerLink" to="/privacy">
                            Privacy Policy
                        </Link>
                        <Link className="footerLink" to="/support">
                            Support
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
