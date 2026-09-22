import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const IOS_VERSIONS = ['27', '18', '17'] as const
type IosVersion = (typeof IOS_VERSIONS)[number]

/** Path convention for real screenshots — drop a file at this path and it
 *  replaces the placeholder automatically, no code changes needed. */
function shotSrc(version: IosVersion, step: number) {
    return `/guides/ios-sms/${version}/step-${step}.png`
}

type Step = {
    n: number
    title: string
    body: string
    tip?: string
}

const setupSteps: Step[] = [
    {
        n: 1,
        title: 'Open Spencio',
        body: 'Tap the Spencio icon on your Home Screen.',
    },
    {
        n: 2,
        title: 'Tap the menu icon',
        body: 'In the top-left corner of the Transactions screen, tap the three lines (☰).',
    },
    {
        n: 3,
        title: 'Tap "Settings"',
        body: 'It\'s in the menu that slides out.',
    },
    {
        n: 4,
        title: 'Tap "Bank SMS recording"',
        body: 'This opens the Bank SMS setup screen.',
    },
    {
        n: 5,
        title: 'Choose a default account',
        body: 'Tap "Change" next to "Default Account" and pick any account. Spencio tries to figure out the right account and category by itself for each message — this one is just a backup for the rare case it can\'t.',
    },
    {
        n: 6,
        title: 'Turn on "Bank Import"',
        body: 'Flip the switch at the bottom to on (green). This step only needs the account picked in step 5 to be set — nothing else.',
    },
]

const shortcutSteps: Step[] = [
    {
        n: 1,
        title: 'Open the Shortcuts app',
        body: 'It comes with every iPhone. Look for a colorful icon made of overlapping shapes — or swipe down on your Home Screen and search "Shortcuts".',
    },
    {
        n: 2,
        title: 'Tap "Automation"',
        body: 'It\'s at the bottom of the screen.',
    },
    {
        n: 3,
        title: 'Tap the + button',
        body: 'It\'s in the top-right corner.',
    },
    {
        n: 4,
        title: 'Tap "Create Personal Automation"',
        body: 'A list of triggers appears.',
    },
    {
        n: 5,
        title: 'Scroll down and tap "Message"',
        body: 'This makes the automation run whenever you get a text message.',
    },
    {
        n: 6,
        title: 'Turn on "Message Contains" and type your bank\'s name',
        body: 'For example: HNB, Sampath, Commercial Bank, Peoples. This just keeps the automation from running on every text you get — it doesn\'t need to be exact.',
        tip: 'Not sure what to type? Open a text message from your bank and use a word that always appears in it, like the bank\'s name.',
    },
    {
        n: 7,
        title: 'Leave "Sender" as "Any Sender"',
        body: 'Banks usually aren\'t saved in your Contacts, so picking a specific person here won\'t work — leave this alone.',
    },
    {
        n: 8,
        title: 'Tap "Next"',
        body: 'Top-right corner of the screen.',
    },
    {
        n: 9,
        title: 'Tap "Add Action"',
        body: 'A search box appears.',
    },
    {
        n: 10,
        title: 'Search for "Process Bank Message"',
        body: 'Type it into the search box, then tap the result with the Spencio icon next to it.',
        tip: 'Don\'t see it? Open Spencio at least once from your Home Screen first, then come back and search again.',
    },
    {
        n: 11,
        title: 'Fill in "Message"',
        body: 'Tap the empty "Message" box inside the new action. A list pops up — tap the blue "Message" option at the top of it.',
    },
    {
        n: 12,
        title: 'Fill in "Sender" the same way',
        body: 'Tap the empty "Sender" box, then tap the blue "Sender" option from the list that pops up.',
    },
    {
        n: 13,
        title: 'Tap "Next"',
        body: 'Top-right corner again.',
    },
    {
        n: 14,
        title: 'Turn OFF "Ask Before Running"',
        body: 'A pop-up asks you to confirm — tap "Don\'t Ask".',
        tip: 'This is the step people miss most. Skip it, and your phone will interrupt you with a question every single time a bank text arrives.',
    },
    {
        n: 15,
        title: 'Tap "Done"',
        body: 'That\'s it — you\'re finished!',
    },
]

function StepImage({ version, step }: { version: IosVersion; step: number }) {
    const [failed, setFailed] = useState(false)

    if (failed) {
        return (
            <div className="aspect-[9/19.5] w-full max-w-[220px] mx-auto rounded-[28px] border border-white/[0.08] bg-panel-darker/60 flex flex-col items-center justify-center gap-2 p-4 text-center shrink-0">
                <div className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-lg">
                    📱
                </div>
                <div className="text-text-muted text-xs leading-snug">
                    Screenshot for iOS {version} coming soon
                </div>
            </div>
        )
    }

    return (
        <img
            src={shotSrc(version, step)}
            alt={`iOS ${version} Shortcuts app, step ${step}`}
            onError={() => setFailed(true)}
            className="w-full max-w-[220px] mx-auto rounded-[28px] border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.35)] shrink-0"
        />
    )
}

function StepList({
    steps,
    version,
    withScreenshots,
}: {
    steps: Step[]
    version?: IosVersion
    withScreenshots?: boolean
}) {
    return (
        <div className="grid gap-3.5 mt-4">
            {steps.map((step) => (
                <div
                    key={step.n}
                    className="bg-panel-dark/55 border border-white/[0.08] rounded-2xl p-4 flex gap-4 max-[640px]:flex-col"
                >
                    <div className="w-8 h-8 rounded-full bg-emerald-accent/15 border border-emerald-accent/40 text-emerald-accent font-bold flex items-center justify-center shrink-0">
                        {step.n}
                    </div>
                    <div className="flex-1 flex gap-4 max-[640px]:flex-col">
                        <div className="flex-1">
                            <div className="font-bold mb-1">{step.title}</div>
                            <div className="text-text-muted leading-relaxed">{step.body}</div>
                            {step.tip && (
                                <div className="mt-2 text-amber-accent/90 text-sm bg-amber-accent/10 border border-amber-accent/25 rounded-xl px-3 py-2">
                                    💡 {step.tip}
                                </div>
                            )}
                        </div>
                        {withScreenshots && version && <StepImage version={version} step={step.n} />}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function IosSmsGuide() {
    const [version, setVersion] = useState<IosVersion>('27')

    return (
        <>
            <Seo
                title="Set Up Automatic Bank SMS Import on iPhone - Spencio"
                description="A simple, step-by-step guide to setting up automatic bank transaction detection on iPhone using the Shortcuts app, for iOS 17, 18, and 27."
            />

            <article className="max-w-[880px]">
                <h1 className="text-[clamp(30px,4vw,46px)] font-bold tracking-tight mb-3 animate-fade-in-up">
                    Auto-import bank texts on iPhone
                </h1>
                <p className="text-text-muted text-lg leading-relaxed mb-2 animate-fade-in-up delay-100">
                    Apple doesn't let any app — including Spencio — read your text messages directly. Instead,
                    a free built-in app called <strong className="text-text-primary">Shortcuts</strong> can hand a
                    bank text to Spencio the moment it arrives, silently, in the background.
                </p>
                <p className="text-text-muted leading-relaxed mb-4 animate-fade-in-up delay-100">
                    It's a one-time setup that takes about two minutes. Follow every step in order and you can't
                    go wrong.
                </p>

                <div className="bg-panel-dark/65 border border-white/[0.08] rounded-2xl p-4 mb-6 animate-fade-in-up delay-200">
                    <div className="font-bold mb-2">Before you start, you'll need:</div>
                    <ul className="m-0 pl-4.5 text-text-muted leading-loose">
                        <li>Spencio installed and opened at least once</li>
                        <li>An iPhone running iOS 16 or later</li>
                        <li>About 2 minutes</li>
                    </ul>
                </div>

                <h2 className="text-[24px] font-bold mt-2 mb-1.5 animate-fade-in-up delay-300">
                    Part 1 — Turn on Bank Import in Spencio
                </h2>
                <p className="text-text-muted mb-1 animate-fade-in-up delay-300">
                    Do this first. It's the same on every iOS version.
                </p>
                <StepList steps={setupSteps} />

                <h2 className="text-[24px] font-bold mt-7 mb-1.5 animate-fade-in-up delay-400">
                    Part 2 — Set up the Shortcuts automation
                </h2>
                <p className="text-text-muted mb-3 animate-fade-in-up delay-400">
                    The steps below are the same on every iPhone — only a few icons and button positions look
                    slightly different between iOS versions. Pick your version to see matching screenshots.
                </p>

                <div
                    className="inline-flex rounded-xl border border-white/[0.08] bg-panel-darker/60 p-1 mb-2 animate-fade-in-up delay-400"
                    role="tablist"
                    aria-label="iOS version"
                >
                    {IOS_VERSIONS.map((v) => (
                        <button
                            key={v}
                            role="tab"
                            aria-selected={version === v}
                            onClick={() => setVersion(v)}
                            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                                version === v
                                    ? 'bg-emerald-accent/25 text-text-primary border border-emerald-accent/40'
                                    : 'text-text-muted hover:text-white'
                            }`}
                        >
                            iOS {v}
                        </button>
                    ))}
                </div>

                <StepList steps={shortcutSteps} version={version} withScreenshots />

                <div className="mt-6 p-4 rounded-2xl bg-panel-dark/45 border border-emerald-accent/30 animate-fade-in-up">
                    <div className="font-bold text-emerald-accent mb-1.5">🎉 That's it!</div>
                    <p className="text-text-muted leading-relaxed m-0">
                        From now on, whenever a bank sends you a text, Spencio quietly checks it in the
                        background. If it looks like a transaction, you'll get a notification — tap it to
                        review and save.
                    </p>
                </div>

                <h2 className="text-[22px] font-bold mt-7 mb-2.5 animate-fade-in-up">Something not working?</h2>
                <div className="grid gap-2.5 mb-6">
                    {troubleshooting.map((item, i) => (
                        <div
                            key={i}
                            className="border border-white/[0.08] rounded-2xl p-3.5 bg-panel-dark/45 hover:border-emerald-accent/50 transition-all duration-300"
                        >
                            <div className="font-bold mb-1.5">{item.q}</div>
                            <div className="text-text-muted leading-relaxed">{item.a}</div>
                        </div>
                    ))}
                </div>

                <p className="text-text-muted text-sm">
                    Still stuck? <Link className="text-emerald-accent hover:underline" to="/support">Contact support</Link> and
                    we'll help you out.
                </p>
            </article>
        </>
    )
}

const troubleshooting = [
    {
        q: "I can't find \"Process Bank Message\" when adding an action",
        a: 'Open Spencio once from your Home Screen (it just needs to launch, nothing else), then go back to Shortcuts and search again.',
    },
    {
        q: 'iOS keeps asking "Run Process Bank Message?" every time',
        a: 'You missed turning off "Ask Before Running" in step 14 of Part 2. Open the automation in Shortcuts, tap it, turn that switch off, and confirm "Don\'t Ask".',
    },
    {
        q: 'Nothing happens when my bank sends a text',
        a: 'Check that "Bank Import" is turned on in Spencio → Settings → Bank SMS recording, and that the automation in Shortcuts is turned on (not paused).',
    },
    {
        q: "A transaction was detected, but it's in the wrong account or category",
        a: 'Tap the notification to review it — you can change the account and category before saving. Spencio remembers your choice, so the same sender or merchant is correct automatically next time.',
    },
]
