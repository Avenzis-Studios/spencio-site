import { useEffect } from 'react'

type SeoProps = {
    title: string
    description: string
}

export default function Seo({ title, description }: SeoProps) {
    useEffect(() => {
        document.title = title

        const ensureMeta = (name: string) => {
            let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
            if (!el) {
                el = document.createElement('meta')
                el.setAttribute('name', name)
                document.head.appendChild(el)
            }
            return el
        }

        ensureMeta('description').setAttribute('content', description)

        // Optional: theme color for mobile browsers
        const theme = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null
        if (!theme) {
            const t = document.createElement('meta')
            t.setAttribute('name', 'theme-color')
            t.setAttribute('content', '#0b1220')
            document.head.appendChild(t)
        }
    }, [title, description])

    return null
}
