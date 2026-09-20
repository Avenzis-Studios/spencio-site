import Seo from '../components/Seo'

const sections = [
    {
        title: 'Overview',
        content: (
            <p className="text-text-muted leading-loose">
                Reap - Kitchen &amp; Pantry Manager ("Reap", "we", "us", or "our") is a mobile application
                developed by Avenzis Studios. Unlike some of our other apps, Reap requires an account and
                syncs data to our servers so that a household can share a pantry, shopping lists, and
                consumption history across multiple people and devices. This Privacy Policy explains what
                we collect, why, and how it's shared within a household. By downloading, installing, or
                using Reap, you agree to the practices described here.
            </p>
        ),
    },
    {
        title: 'Information We Collect',
        content: (
            <>
                <p className="text-text-muted leading-loose mb-3">
                    We collect the information needed to run a shared, cloud-synced pantry app:
                </p>
                <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                    <li><strong className="text-text-primary">Account information:</strong> your name and email address, and a hashed password if you register directly. If you sign in with Google or Apple, we receive your name, email, and a unique identifier from that provider instead of a password.</li>
                    <li><strong className="text-text-primary">Pantry &amp; household data:</strong> the items, quantities, categories, and expiry dates you add; the households ("homes") you create or join, including headcount and membership; shopping lists and carts; consumption and waste logs; and any photos or barcodes you scan or attach to an item.</li>
                    <li><strong className="text-text-primary">Recipes:</strong> recipes you save, and the ingredients Reap uses locally to suggest matches from a recipe catalog based on what's in your pantry.</li>
                    <li><strong className="text-text-primary">Device &amp; notification data:</strong> a push-notification token for your device (via Firebase Cloud Messaging) so we can send you expiry reminders and household activity alerts.</li>
                    <li><strong className="text-text-primary">Subscription status:</strong> if you subscribe to Reap Plus, whether your account is on a free or paid plan, trial/renewal dates, and usage counts for free-tier limits (e.g. scans and AI recipe suggestions per month). Payment itself is handled entirely by Apple's or Google's app store — we never see or store your payment card details.</li>
                </ul>
            </>
        ),
    },
    {
        title: 'How Your Data Is Shared Within a Household',
        content: (
            <>
                <p className="text-text-muted leading-loose mb-3">
                    Reap's core feature is a shared pantry, so some data is deliberately visible to other
                    members of your household ("home"):
                </p>
                <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                    <li>Pantry items, shopping lists, shopping carts, consumption logs, and waste logs added by any member are visible to every member of the same home.</li>
                    <li>Your name and avatar are visible to other members of a home you belong to, and to anyone you send or receive a home invite with.</li>
                    <li>Personal nutrition totals (calories, protein, carbs logged as consumed) are kept per-user and are not shared with other household members.</li>
                </ul>
                <p className="text-text-muted leading-loose mt-3">
                    We do not sell, rent, or share your personal information with third parties for their own
                    marketing purposes.
                </p>
            </>
        ),
    },
    {
        title: 'Third-Party Services We Use',
        content: (
            <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                <li><strong className="text-text-primary">Firebase Cloud Messaging (Google):</strong> delivers push notifications to your device. Google processes your device's push token to do so.</li>
                <li><strong className="text-text-primary">Google Sign-In / Sign in with Apple:</strong> if you choose to sign in this way, that provider authenticates you and shares your name/email with us as permitted by your settings with them.</li>
                <li><strong className="text-text-primary">Open Food Facts:</strong> a public, free barcode database we query to look up product details when you scan a barcode. The barcode you scan is sent to this service; no personal account information is included in that request.</li>
                <li><strong className="text-text-primary">Apple App Store / Google Play Billing:</strong> subscription purchases are processed entirely by Apple or Google under their own privacy policies. We only receive confirmation of your subscription status, never your payment details.</li>
                <li><strong className="text-text-primary">Advertising:</strong> Reap's free tier may show ads served through Google AdMob. If enabled, AdMob may collect device and advertising identifiers to serve and measure ads, subject to Google's own privacy policy. Reap Plus subscribers do not see ads.</li>
            </ul>
        ),
    },
    {
        title: 'Receipt Scanning',
        content: (
            <p className="text-text-muted leading-loose">
                When you scan a receipt, the photo is sent to our own text-recognition service solely to
                extract item names, quantities, and prices. The photo is used only to perform that
                extraction and is not retained by us afterward.
            </p>
        ),
    },
    {
        title: 'Data Retention & Deletion',
        content: (
            <ul className="text-text-muted leading-loose list-disc pl-5 space-y-1.5">
                <li>We retain your account and pantry data for as long as your account is active.</li>
                <li>You can edit your profile, leave a home, or delete individual pantry items, recipes, and lists at any time from within the app.</li>
                <li>To delete your account and associated data entirely, contact us at the email below.</li>
            </ul>
        ),
    },
    {
        title: "Children's Privacy",
        content: (
            <p className="text-text-muted leading-loose">
                Reap is not directed at children under the age of 13, and we do not knowingly collect
                personal information from children under 13.
            </p>
        ),
    },
    {
        title: 'Your Rights',
        content: (
            <p className="text-text-muted leading-loose">
                Depending on your location, you may have rights to access, correct, export, or delete your
                personal data, including under the GDPR (EU) and CCPA (California). To exercise any of
                these rights, contact us using the details below.
            </p>
        ),
    },
    {
        title: 'Changes to This Policy',
        content: (
            <p className="text-text-muted leading-loose">
                We may update this Privacy Policy from time to time. When we do, we'll update the "Last
                updated" date at the top of this page. Continuing to use Reap after a change means you
                accept the updated policy.
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

export default function ReapPrivacy() {
    return (
        <>
            <Seo
                title="Privacy Policy - Reap"
                description="Privacy policy for Reap - Kitchen & Pantry Manager: what we collect, how household data is shared, and the third-party services we use."
            />

            <article className="max-w-[880px] animate-fade-in-up">
                <h1 className="text-[clamp(34px,4vw,52px)] font-bold tracking-tight mb-3">
                    Reap Privacy Policy
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
