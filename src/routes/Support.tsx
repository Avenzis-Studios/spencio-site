import Seo from '../components/Seo'

export default function Support() {
    return (
        <>
            <Seo
                title="Support - Expense Manager"
                description="Support page for Expense Manager. Get help, report bugs, and request features."
            />

            <article className="doc">
                <h1 className="h1">Support</h1>
                <p className="lead">
                    Need help or want to report a bug? Use the options below.
                </p>

                <div className="supportGrid">
                    <div className="panel">
                        <div className="panelTitle">Email</div>
                        <div className="panelText">
                            <a href="mailto:support@example.com">support@example.com</a>
                            <div className="muted">Typical response: 1-3 business days</div>
                        </div>
                    </div>

                    <div className="panel">
                        <div className="panelTitle">Report a bug</div>
                        <div className="panelText">
                            Include: app version, device model, OS version, steps to reproduce, and screenshots if possible.
                        </div>
                    </div>

                    <div className="panel">
                        <div className="panelTitle">Feature requests</div>
                        <div className="panelText">
                            Tell us your workflow and what outcome you want. We prioritize based on impact and complexity.
                        </div>
                    </div>
                </div>

                <h2 className="h2">FAQ</h2>
                <div className="faq">
                    <div className="faqItem">
                        <div className="faqQ">Does the app require an account?</div>
                        <div className="faqA">No. You can use it without signing up.</div>
                    </div>

                    <div className="faqItem">
                        <div className="faqQ">Where is my data stored?</div>
                        <div className="faqA">On your device by default (offline-first).</div>
                    </div>

                    <div className="faqItem">
                        <div className="faqQ">Can I export my data?</div>
                        <div className="faqA">If export is available in your build, you’ll see it in Settings. (Update this once implemented.)</div>
                    </div>
                </div>
            </article>
        </>
    )
}
