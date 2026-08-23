import DemoExperience from './_components/DemoExperience'
import { GITHUB_URL } from './content'
import {
    PACKAGE_DESCRIPTION,
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_URL,
} from './site-config'

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}#website`,
            url: SITE_URL,
            name: SITE_NAME,
            description: SITE_DESCRIPTION,
            inLanguage: 'en',
        },
        {
            '@type': 'SoftwareSourceCode',
            '@id': `${SITE_URL}#source`,
            name: '@miguel-bonifaz/react-toast-notifications',
            description: PACKAGE_DESCRIPTION,
            codeRepository: GITHUB_URL,
            programmingLanguage: 'JavaScript',
            runtimePlatform: 'React',
        },
    ],
}

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
                }}
            />
            <DemoExperience />
        </>
    )
}
