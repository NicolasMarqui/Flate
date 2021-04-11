import Head from "next/head";

interface MetaProps {
    title: string;
    keywords: string;
    description: string;
}

export default function Meta({ title, keywords, description }: MetaProps) {
    return (
        <Head>
            <title>Flate | {title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />
            <meta
                name="og:description"
                property="og:description"
                content={description}
            />
            <link rel="icon" type="image/png" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/favicon.ico" />
        </Head>
    );
}