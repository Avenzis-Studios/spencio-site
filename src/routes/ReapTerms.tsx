import Seo from '../components/Seo'

const sections = [
    {
        title: 'Acceptance of Terms',
        content: (
            <p className="text-text-muted leading-loose">
                These Terms of Use ("Terms") govern your use of Reap - Kitchen &amp; Pantry Manager ("Reap",
                "we", "us", or "our"), a mobile application developed by Avenzis Studios. By creating an
                account or using Reap, you agree to these Terms. If you don't agree, please don't use the
                app.
            </p>
        ),
    },
    {
        title: 'The Service',
        content: (
            <p className="text-text-muted leading-loose">
                Reap lets you track pantry items, share a household pantry and shopping lists with other
                members, scan barcodes and receipts to add items faster, get recipe suggestions based on
                what you have, and track food waste. Some features are free; others require a Reap Plus
                subscription as described below.
            </p>
        ),
    },
    {
        title: 'Accounts & Households',
        content: (
            <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                <li>You're responsible for the accuracy of the information you provide and for keeping your login credentials secure.</li>
                <li>When you create or join a "home," the pantry items, shopping lists, and consumption/waste logs added by any member become visible to every member of that home, as described in our Privacy Policy.</li>
                <li>You're responsible for your own conduct and content within a home you belong to.</li>
            </ul>
        ),
    },
    {
        title: 'Reap Plus Subscriptions',
        content: (
            <>
                <p className="text-text-muted leading-loose mb-3">
                    Reap offers an optional auto-renewing subscription, <strong className="text-text-primary">Reap Plus</strong>,
                    which unlocks unlimited barcode/receipt scanning and AI recipe suggestions, multi-home
                    sharing, auto-consumption schedules, restock suggestions, waste analytics, and removes
                    ads.
                </p>
                <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                    <li><strong className="text-text-primary">Plans &amp; pricing:</strong> Reap Plus is offered as a Monthly plan ($2.99/month) or a Yearly plan ($19.99/year). Prices are shown in the app and may vary by region and are subject to change with notice.</li>
                    <li><strong className="text-text-primary">Free trial:</strong> new subscribers may be offered a 30-day free trial. If you don't cancel before the trial ends, your subscription automatically begins and you'll be charged the plan price.</li>
                    <li><strong className="text-text-primary">Billing &amp; auto-renewal:</strong> subscriptions are billed through your Apple App Store or Google Play account and automatically renew for the same term unless canceled at least 24 hours before the end of the current period. Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
                    <li><strong className="text-text-primary">Managing or canceling:</strong> manage or cancel your subscription any time in your Apple ID account settings (iOS) or Google Play subscriptions (Android) — not within the Reap app itself, since purchases are processed by those platforms.</li>
                    <li><strong className="text-text-primary">Refunds:</strong> refund requests are handled by Apple or Google under their own refund policies, not by us directly.</li>
                    <li><strong className="text-text-primary">Free tier:</strong> without a Reap Plus subscription, certain features (such as monthly scan and AI recipe suggestion counts) are limited as shown in the app, and the app may display ads.</li>
                </ul>
            </>
        ),
    },
    {
        title: 'Promo Codes',
        content: (
            <p className="text-text-muted leading-loose">
                We may issue promotional codes that grant Reap Plus access for a limited or unlimited time,
                independent of an App Store or Play Store purchase. Codes may be single-use, time-limited,
                or restricted in other ways at our discretion, and we may modify or discontinue a code
                program at any time.
            </p>
        ),
    },
    {
        title: 'Acceptable Use',
        content: (
            <p className="text-text-muted leading-loose">
                Don't use Reap to upload unlawful, harmful, or infringing content; attempt to disrupt or
                reverse-engineer the service; or access accounts or homes you're not a member of. We may
                suspend or terminate accounts that violate these Terms.
            </p>
        ),
    },
    {
        title: 'Intellectual Property',
        content: (
            <p className="text-text-muted leading-loose">
                Reap's app, branding, and content we provide (excluding data you add yourself) are owned by
                Avenzis Studios. You retain ownership of the content you add to your pantry, lists, and
                recipes.
            </p>
        ),
    },
    {
        title: 'Disclaimer of Warranties',
        content: (
            <p className="text-text-muted leading-loose">
                Reap is provided "as is." Nutrition estimates, recipe matches, and expiry reminders are
                provided for convenience and are not a substitute for your own judgment about food safety.
                We don't guarantee the service will be uninterrupted or error-free.
            </p>
        ),
    },
    {
        title: 'Limitation of Liability',
        content: (
            <p className="text-text-muted leading-loose">
                To the maximum extent permitted by law, Avenzis Studios is not liable for indirect,
                incidental, or consequential damages arising from your use of Reap, including reliance on
                nutrition estimates or recipe suggestions.
            </p>
        ),
    },
    {
        title: 'Changes to These Terms',
        content: (
            <p className="text-text-muted leading-loose">
                We may update these Terms from time to time. We'll update the "Last updated" date above
                when we do. Continuing to use Reap after a change means you accept the updated Terms.
            </p>
        ),
    },
    {
        title: 'Contact Us',
        content: (
            <ul className="text-text-muted leading-loose list-none pl-0 space-y-1">
                <li><strong className="text-text-primary">Developer:</strong> Avenzis Studios</li>
                <li>
                    <strong className="text-text-primary">Email:</strong>{' '}
                    <a href="mailto:support@avenzis.studios.com" className="text-emerald-accent hover:underline">
                        support@avenzis.studios.com
                    </a>
                </li>
            </ul>
        ),
    },
]

export default function ReapTerms() {
    return (
        <>
            <Seo
                title="Terms of Use - Reap"
                description="Terms of Use for Reap - Kitchen & Pantry Manager, including Reap Plus subscription terms."
            />

            <article className="max-w-[880px] animate-fade-in-up">
                <h1 className="text-[clamp(34px,4vw,52px)] font-bold tracking-tight mb-3">
                    Reap Terms of Use
                </h1>
                <p className="text-text-muted text-sm mb-1">
                    Last updated: September 20, 2026
                </p>
                <p className="text-text-muted text-sm mb-6">
                    Effective date: September 20, 2026
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
