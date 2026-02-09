import Seo from '../components/Seo'

export default function Privacy() {
    return (
        <>
            <Seo
                title="Privacy Policy - Expense Manager"
                description="Privacy policy for Expense Manager. Privacy-first design, no ads, and no selling of personal data."
            />

            <article className="doc">
                <h1 className="h1">Privacy Policy</h1>
                <p className="muted">Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="h2">Overview</h2>
                <p>
                    Expense Manager is designed to help you track expenses and budgets. We aim to collect the minimum data
                    necessary to operate the app.
                </p>

                <h2 className="h2">Data We Collect</h2>
                <p>
                    By default, Expense Manager stores your financial entries (expenses, categories, budgets) locally on your device.
                    We do not require account creation.
                </p>

                <h2 className="h2">Analytics and Tracking</h2>
                <p>
                    We do not use advertising SDKs. We do not sell your personal information.
                    If analytics are enabled in the future, this policy will be updated and you will be informed through an app update.
                </p>

                <h2 className="h2">Data Sharing</h2>
                <p>
                    We do not share your data with third parties for marketing purposes.
                </p>

                <h2 className="h2">Security</h2>
                <p>
                    We take reasonable measures to protect the data stored by the app. However, no system is 100% secure.
                    You are responsible for securing access to your device.
                </p>

                <h2 className="h2">Changes</h2>
                <p>
                    We may update this Privacy Policy from time to time. Updates will be reflected on this page.
                </p>

                <h2 className="h2">Contact</h2>
                <p>
                    For privacy questions, contact us at: <a href="mailto:support@example.com">support@example.com</a>
                </p>
            </article>
        </>
    )
}
