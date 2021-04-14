export const menuVariants = {
    open: {
        left: 0,
        transition: { delay: 0.3 },
    },
    close: {
        left: "auto",
        right: 0,
    },
    openNoDelay: {
        left: 0,
    },
    closeDelay: {
        left: "auto",
        right: 0,
        transition: {
            delay: 0.3,
        },
    },
    parent: {
        transition: {
            when: "afterChildren",
            delayChildren: 0.5,
        },
    },
    showMenu: {
        right: "35px",
        transition: { delay: 0.5 },
    },
    closeMenu: {
        right: "-100px",
    },
    showLinks: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 1.1,
        },
    },
    panel1: {
        height: "100%",
        opacity: 1,
        transition: { delay: 0.9 },
    },
    panel2: {
        width: "100%",
        opacity: 1,
        transition: { delay: 0.9 },
    },
    closePanels: {
        x: 900,
        opacity: 0,
    },
};
