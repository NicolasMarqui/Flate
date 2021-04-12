module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#FF5A5F",
                bg: "#293241",
                black222: "#222222",
                overlay: "rgba(0, 0, 0, 0.47)",
                lightGray: "#BABABA",
                mediumGray: "#B2B2B2",
                cardGray1: "#6B6B6B",
                cardGray2: "#AAAAAA",
                preTitle: "rgba(255, 255, 255, 0.08)",
                primaryHover: "rgba(193, 44, 49, 1)",
            },
            backgroundImage: (theme) => ({
                banner: "url('/images/banner.jpg')",
            }),
            backgroundPosition: {
                centerMobile: "67%",
                bannerInterno: "15% 35%",
            },
            fontFamily: {
                charm: ["Charmonman", "cursive"],
            },
            borderColor: (theme) => ({
                light: "rgba(255, 255, 255, 0.08)",
                card: "#F4F4F4",
            }),
            flex: {
                2: "2 2 0%",
                1.5: "1.5 1.5 0%",
            },
        },
        variant: {
            extend: {
                display: ["group-hover", "hover"],
                borderRadius: ["group-hover", "hover"],
            },
        },
        fontFamily: ["Raleway", "Charmonman", "sans-serif"],
        container: {
            center: true,
        },
        screens: {
            xs: "640px",
            sm: "768px",
            md: "1024px",
            lg: "1280px",
            xl: "1300px",
            "2xl": "1700px",
            "3xl": "2000px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    width: "100%",
                    // marginLeft: 'auto',
                    // marginRight: 'auto',
                    // paddingLeft: '2rem',
                    // paddingRight: '2rem',
                    "@screen sm": {
                        maxWidth: "80%",
                    },
                    "@screen md": {
                        maxWidth: "90%",
                    },
                    "@screen lg": {
                        maxWidth: "1024px",
                    },
                    "@screen xl": {
                        maxWidth: "1280px",
                    },
                },
            });
        },
    ],
};
