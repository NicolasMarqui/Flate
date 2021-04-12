import React from "react";
import { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import "leaflet/dist/leaflet.css";
import "@styles/global.scss";
import Layout from "@components/Layout";
import Router from "next/router";
import Lottie from "react-lottie";
import LOADING__ANIMATION from "../public/animations/loading.json";

Router.events.on("routeChangeStart", () => {
    document.querySelector(".loader").classList.remove("hidden");
    document.querySelector("body").classList.add("overflow-hidden");
    document.querySelector(".loader").classList.add("flex");
});
Router.events.on("routeChangeComplete", () => {
    document.querySelector("body").classList.remove("overflow-hidden");
    document.querySelector(".loader").classList.remove("flex");
    document.querySelector(".loader").classList.add("hidden");
});
Router.events.on("routeChangeError", () => {
    document.querySelector("body").classList.remove("overflow-hidden");
    document.querySelector(".loader").classList.remove("flex");
    document.querySelector(".loader").classList.add("hidden");
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <div className="loader h-screen w-screen flex-col items-center justify-center z-50 hidden overflow-hidden bg-transparent">
                <Lottie
                    options={{
                        loop: true,
                        animationData: LOADING__ANIMATION,
                    }}
                    height={300}
                    width={300}
                />

                {/* <div className="mt-4">
                    <h2 className="text-3xl text-primary font-bold">
                        Loading...
                    </h2>
                </div> */}
            </div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
