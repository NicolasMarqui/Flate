import React from 'react';
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss"
import Layout from '@components/Layout';


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
