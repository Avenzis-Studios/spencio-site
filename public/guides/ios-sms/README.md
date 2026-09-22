# iOS bank-SMS setup guide screenshots

Screenshots for `/guides/ios-sms-setup` (src/routes/IosSmsGuide.tsx). The page
already links to these paths — drop a file in and it replaces the
"coming soon" placeholder automatically, no code changes needed.

## File naming

    public/guides/ios-sms/<version>/step-<n>.png

- `<version>` is one of `27`, `18`, `17`.
- `<n>` is the step number **within Part 2 (the Shortcuts automation
  steps)** only — Part 1 (in-app setup) has no screenshots, since it's
  identical across iOS versions.

Steps 1–15, per version, matching `shortcutSteps` in IosSmsGuide.tsx:

 1. Open the Shortcuts app
 2. Tap "Automation"
 3. Tap the + button
 4. Tap "Create Personal Automation"
 5. Scroll down and tap "Message"
 6. Turn on "Message Contains" and type your bank's name
 7. Leave "Sender" as "Any Sender"
 8. Tap "Next"
 9. Tap "Add Action"
10. Search for "Process Bank Message"
11. Fill in "Message"
12. Fill in "Sender" the same way
13. Tap "Next"
14. Turn OFF "Ask Before Running"
15. Tap "Done"

## Format

- Portrait screenshots straight from the simulator/device (`xcrun simctl io
  booted screenshot`, or the device's own screenshot).
- PNG. No manual cropping needed — the page frames them in a rounded phone
  outline automatically.
- Keep the status bar in each shot (time/battery) — cosmetic, but makes the
  page look like a real phone at a glance.
