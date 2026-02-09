import Seo from '../components/Seo'
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <Seo
                title="Expense Manager - Track spending. Control money."
                description="Expense Manager helps you track expenses, manage budgets, and understand your spending with a clean, privacy-first experience."
            />

            <section className="hero">
                <div className="heroText">
                    <h1 className="h1">Track spending. Control money.</h1>
                    <p className="lead">
                        Spencio-Expense Manager is a fast, privacy-first way to track expenses and plan budgets.
                        Simple daily logging, clear insights, and budget discipline without clutter.
                    </p>

                    <div className="ctaRow">
                        <a className="btnPrimary" href="#download">
                            Get the app
                        </a>
                        <Link className="btnSecondary" to="/privacy">
                            Privacy Policy
                        </Link>
                    </div>

                    <div className="heroMeta">
                        No ads. No trackers. Built for daily use.
                    </div>
                </div>

                <div className="heroCard" aria-label="App highlights">
                    <div className="cardTitle">Highlights</div>
                    <ul className="list">
                        <li>Fast expense logging with categories and tags</li>
                        <li>Budgets by category or whole wallet</li>
                        <li>Real-time spent/remaining and alerts</li>
                        <li>Offline-first performance</li>
                    </ul>
                </div>
            </section>

            <section className="grid">
                <div className="panel">
                    <div className="panelTitle">Budgets that match real life</div>
                    <div className="panelText">
                        Monthly, weekly, or custom periods. Track percent used and remaining in real time.
                    </div>
                </div>

                <div className="panel">
                    <div className="panelTitle">Clear insights</div>
                    <div className="panelText">
                        Understand where your money goes with simple totals and breakdowns.
                    </div>
                </div>

                <div className="panel">
                    <div className="panelTitle">Privacy-first</div>
                    <div className="panelText">
                        Your financial data stays yours. No ads, no selling data.
                    </div>
                </div>
            </section>

            <section id="download" className="download">
                <h2 className="h2">Download</h2>
                <p className="muted">
                    Replace these buttons with your App Store / Play Store links once published.
                </p>

                <div className="ctaRow">
                    <a className="btnPrimary" href="#" onClick={(e) => e.preventDefault()}>
                        App Store (Coming soon)
                    </a>
                    <a className="btnSecondary" href="#" onClick={(e) => e.preventDefault()}>
                        Google Play (Coming soon)
                    </a>
                </div>
            </section>
        </>
    )
}
