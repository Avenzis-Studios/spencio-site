import Seo from '../components/Seo'

const sections = [
    {
        title: 'Overview',
        content: (
            <p className="text-text-muted leading-loose">
                Spencio - Expense Manager ("Spencio", "we", "us", or "our") is a mobile application
                developed by Avenzis Studios. This Privacy Policy explains how we handle information
                when you use our application, available on the Google Play Store and Apple App Store.
                We are committed to protecting your privacy and being transparent about our data practices.
                By downloading, installing, or using Spencio, you agree to the terms outlined in this policy.
            </p>
        ),
    },
    {
        title: 'Information We Collect',
        content: (
            <>
                <p className="text-text-muted leading-loose mb-3">
                    Spencio is designed with a privacy-first architecture. We do <strong className="text-text-primary">not</strong> collect,
                    store, or transmit any personal information to external servers. Specifically:
                </p>
                <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                    <li><strong className="text-text-primary">Personal Information:</strong> We do not collect names, email addresses, phone numbers, or any other personally identifiable information (PII).</li>
                    <li><strong className="text-text-primary">Financial Data:</strong> All expense records, budget configurations, categories, tags, and transaction history are stored exclusively on your device's local storage.</li>
                    <li><strong className="text-text-primary">Account Information:</strong> Spencio does not require account creation, registration, or sign-in of any kind.</li>
                    <li><strong className="text-text-primary">Location Data:</strong> We do not access, collect, or store your location data.</li>
                    <li><strong className="text-text-primary">Contacts &amp; Calendar:</strong> We do not access your contacts, calendar, or any other device data unrelated to the app's core functionality.</li>
                </ul>
            </>
        ),
    },
    {
        title: 'How Your Data Is Stored',
        content: (
            <>
                <p className="text-text-muted leading-loose mb-3">
                    All data you create within Spencio — including expenses, budgets, categories, and preferences — is
                    stored locally on your device using the operating system's built-in storage mechanisms.
                </p>
                <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                    <li>Data is never uploaded to any cloud server, remote database, or third-party service by the app.</li>
                    <li>If you uninstall the app, all locally stored data will be permanently deleted unless you have manually backed it up.</li>
                    <li>We recommend using your device's built-in backup features (e.g., Google Drive backup on Android, iCloud on iOS) if you wish to preserve your data.</li>
                </ul>
            </>
        ),
    },
    {
        title: 'Analytics, Tracking & Advertising',
        content: (
            <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                <li><strong className="text-text-primary">Analytics:</strong> Spencio does not integrate any analytics SDKs (e.g., Google Analytics, Firebase Analytics, Mixpanel).</li>
                <li><strong className="text-text-primary">Tracking:</strong> We do not use cookies, pixel tags, device fingerprinting, or any other tracking technology.</li>
                <li><strong className="text-text-primary">Advertising:</strong> Spencio contains no advertisements. We do not integrate any ad networks or advertising SDKs.</li>
                <li><strong className="text-text-primary">User Profiling:</strong> We do not build user profiles, track usage patterns, or perform behavioral analysis.</li>
            </ul>
        ),
    },
    {
        title: 'Data Sharing & Third-Party Services',
        content: (
            <>
                <p className="text-text-muted leading-loose mb-3">
                    We do not share, sell, rent, trade, license, or otherwise disclose your data to any third parties.
                    Since Spencio does not collect any user data, there is no data to share.
                </p>
                <p className="text-text-muted leading-loose">
                    Spencio does not integrate with any third-party services, social media platforms, or external APIs
                    that would have access to your information.
                </p>
            </>
        ),
    },
    {
        title: 'Permissions',
        content: (
            <>
                <p className="text-text-muted leading-loose mb-3">
                    Spencio requests only the minimum permissions necessary for its core functionality.
                    We do not request access to sensitive device features unless explicitly required.
                    Permissions may include:
                </p>
                <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                    <li><strong className="text-text-primary">Storage (if applicable):</strong> Only used for local data persistence and optional data export/import features within the app.</li>
                    <li><strong className="text-text-primary">Notifications (if applicable):</strong> Only used for budget alerts and reminders that you explicitly configure.</li>
                </ul>
                <p className="text-text-muted leading-loose mt-3">
                    You can review and manage app permissions at any time through your device's Settings.
                </p>
            </>
        ),
    },
    {
        title: 'Data Security',
        content: (
            <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                <li>All data remains on your device and is protected by your operating system's built-in security mechanisms, including device encryption and app sandboxing.</li>
                <li>We do not transmit data over the internet, eliminating risks associated with data interception or server breaches.</li>
                <li>We recommend keeping your device's operating system updated and using a screen lock to further protect your data.</li>
            </ul>
        ),
    },
    {
        title: "Children's Privacy",
        content: (
            <p className="text-text-muted leading-loose">
                Spencio is not directed at children under the age of 13. We do not knowingly collect any
                personal information from children. Since the app does not collect data from any user,
                it is inherently compliant with the Children's Online Privacy Protection Act (COPPA) and
                similar regulations worldwide.
            </p>
        ),
    },
    {
        title: 'Data Retention & Deletion',
        content: (
            <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                <li>Since all data is stored locally, you have full control over your data at all times.</li>
                <li>You can delete individual records within the app, or clear all app data through your device's Settings.</li>
                <li>Uninstalling Spencio will permanently remove all associated data from your device.</li>
                <li>We do not retain any copies of your data as we never have access to it.</li>
            </ul>
        ),
    },
    {
        title: 'Your Rights',
        content: (
            <>
                <p className="text-text-muted leading-loose mb-3">
                    Because Spencio does not collect or process personal data on any server, traditional data
                    subject rights (access, rectification, erasure, portability) are automatically fulfilled — your
                    data never leaves your device, and you have direct control over it at all times.
                </p>
                <p className="text-text-muted leading-loose">
                    This applies regardless of your jurisdiction, including under the GDPR (EU), CCPA (California),
                    and other applicable data protection regulations.
                </p>
            </>
        ),
    },
    {
        title: 'Changes to This Policy',
        content: (
            <p className="text-text-muted leading-loose">
                We may update this Privacy Policy from time to time to reflect changes in our practices
                or for legal, operational, or regulatory reasons. When we make changes, we will update the
                "Last updated" date at the top of this page. We encourage you to review this policy
                periodically. Your continued use of Spencio after any changes constitutes your acceptance
                of the updated policy.
            </p>
        ),
    },
    {
        title: 'Contact Us',
        content: (
            <>
                <p className="text-text-muted leading-loose mb-3">
                    If you have any questions, concerns, or requests regarding this Privacy Policy
                    or our data practices, please contact us:
                </p>
                <ul className="text-text-muted leading-loose list-none pl-0 space-y-1">
                    <li><strong className="text-text-primary">Developer:</strong> Avenzis Studios</li>
                    <li>
                        <strong className="text-text-primary">Email:</strong>{' '}
                        <a href="mailto:support@avenzis.studios.com" className="text-emerald-accent hover:underline">
                            support@avenzis.studios.com
                        </a>
                    </li>
                </ul>
            </>
        ),
    },
]

export default function Privacy() {
    return (
        <>
            <Seo
                title="Privacy Policy - Spencio Expense Manager"
                description="Privacy policy for Spencio - Expense Manager. Privacy-first design with no data collection, no ads, no tracking, and no selling of personal data."
            />

            <article className="max-w-[880px] animate-fade-in-up">
                <h1 className="text-[clamp(34px,4vw,52px)] font-bold tracking-tight mb-3">
                    Privacy Policy
                </h1>
                <p className="text-text-muted text-sm mb-1">
                    Last updated: February 14, 2026
                </p>
                <p className="text-text-muted text-sm mb-6">
                    Effective date: February 14, 2026
                </p>

                {sections.map((section, i) => (
                    <section key={i} className="mb-6">
                        <h2 className="text-[22px] font-bold mt-6 mb-2.5">{section.title}</h2>
                        {section.content}
                    </section>
                ))}
            </article>
        </>
    )
}
