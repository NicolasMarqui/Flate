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
import { ModalContainer } from "reoverlay";
import LOADING__ANIMATION from "../public/animations/loading.json";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
    document.querySelector(".loader").classList.remove("hidden");
    document.querySelector("body").classList.add("overflow-hidden");
    document.querySelector(".loader").classList.add("flex");
});
Router.events.on("routeChangeComplete", () => {
    NProgress.done();
    document.querySelector("body").classList.remove("overflow-hidden");
    document.querySelector(".loader").classList.remove("flex");
    document.querySelector(".loader").classList.add("hidden");
});
Router.events.on("routeChangeError", () => {
    NProgress.done();
    document.querySelector("body").classList.remove("overflow-hidden");
    document.querySelector(".loader").classList.remove("flex");
    document.querySelector(".loader").classList.add("hidden");
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <ModalContainer />
            <div className="loader flex-col items-center justify-center z-100 hidden overflow-hidden bg-bg fixed inset-0">
                <Lottie
                    options={{
                        loop: true,
                        animationData: LOADING__ANIMATION,
                        autoplay: true,
                    }}
                    height={300}
                    width={300}
                />
            </div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
