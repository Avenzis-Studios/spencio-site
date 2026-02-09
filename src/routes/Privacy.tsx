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
                <p className="muted">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="h2">Overview</h2>
                <p>
                    Spencio - Expense Manager is designed to help you track expenses and manage budgets
                    while respecting your privacy. We do not collect, transmit, or store any
                    personal data on our servers.
                </p>

                <h2 className="h2">Information We Collect</h2>
                <p>
                    Spencio - Expense Manager does not collect any personal information from users.
                    All expense data, categories, and budgets are stored locally on your device.
                    We do not require account creation or user identification.
                </p>

                <h2 className="h2">Analytics and Tracking</h2>
                <p>
                    Spencio - Expense Manager does not use analytics, tracking technologies, or advertising
                    SDKs. We do not track user activity and we do not profile users in any way.
                </p>

                <h2 className="h2">Data Sharing</h2>
                <p>
                    We do not share, sell, rent, or disclose user data to third parties.
                    Since no data is collected, there is no data to share.
                </p>

                <h2 className="h2">Data Security</h2>
                <p>
                    Your data remains on your device and is protected by the security mechanisms
                    of your operating system. We do not transmit data to external servers.
                </p>

                <h2 className="h2">Changes to This Policy</h2>
                <p>
                    If this Privacy Policy changes, the updated version will be published on
                    this page. Continued use of the app after changes indicates acceptance
                    of the updated policy.
                </p>

                <h2 className="h2">Contact</h2>
                <p>
                    If you have questions about this Privacy Policy, contact us at{' '}
                    <a href="mailto:support@avencis.studios.com">
                        support@avencis.studios.com
                    </a>
                </p>
            </article>
        </>
    )
}
