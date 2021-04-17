import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import useWindowSize from "@hooks/useWindowSize";
import Link from "next/link";
import { menuVariants } from "@utils/variants";
import { useRouter } from "next/router";
import { useLazyEffect } from "@utils/useLazyEffect";

interface FullMenuProps {
    handleClose: () => any;
}

const FullMenu: React.FC<FullMenuProps> = ({ handleClose }) => {
    const router = useRouter();
    const [currOpen, setCurrOpen] = useState(true);
    const [heightDone, setHeightDone] = useState(false);
    const { width } = useWindowSize();
    const isSmall = width < 992;

    const removeOverflow = () =>
        document.querySelector("body").classList.remove("overflow-hidden");

    useEffect(() => {
        document.querySelector("body").classList.add("overflow-hidden");

        return () => {
            removeOverflow();
        };
    });

    useLazyEffect(() => {
        removeOverflow();
        handleClose();
    }, [router.pathname]);

    return (
        <>
            <motion.div
                className="bg-primary z-40 fixed top-0 bottom-0 fullMenu"
                variants={menuVariants}
                initial={{ right: -500 }}
                animate={currOpen ? "openNoDelay" : "closeDelay"}
            ></motion.div>

            <motion.div
                className="fixed z-50 top-0 bottom-0 bg-bg "
                variants={menuVariants}
                initial={{ right: -500 }}
                animate={currOpen ? "open" : "close"}
                onAnimationComplete={!currOpen ? handleClose : null}
            >
                <motion.div
                    className="absolute top-10 right-5 md:right-10 cursor-pointer hover:bg-red-200 rounded-full p-2 z-30 bg-black222"
                    variants={menuVariants}
                    initial={{ right: "-100px" }}
                    animate={currOpen ? "showMenu" : "closeMenu"}
                    onClick={() => setCurrOpen(false)}
                >
                    <FaTimes size={40} color="#fff" />
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row h-full"
                    animate={!currOpen ? "parent" : "closePanels"}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div
                        initial={{ height: 0 }}
                        variants={menuVariants}
                        animate={currOpen ? "panel1" : "closePanels"}
                        onAnimationComplete={() => setHeightDone(true)}
                        className="flex-2 flex justify-center items-center bg-white overflow-y-auto"
                    >
                        <ul className="flex flex-col">
                            <motion.li
                                className="my-5 relative"
                                variants={menuVariants}
                                animate="showLinks"
                                initial={{ y: -900 }}
                                whileHover={{ scale: 1.17 }}
                            >
                                <div className="menu__number">
                                    <p className="text-lg">(1)</p>
                                </div>
                                <Link href="/">
                                    <a className="text-3xl md:text-8xl text-black222 font-bold custom__hover">
                                        Home
                                    </a>
                                </Link>
                            </motion.li>
                            <motion.li
                                className="my-5 relative"
                                variants={menuVariants}
                                animate="showLinks"
                                initial={{ y: -900 }}
                                whileHover={{ scale: 1.17 }}
                            >
                                <div className="menu__number">
                                    <p className="text-lg">(2)</p>
                                </div>
                                <Link href="/listings">
                                    <a className="text-3xl md:text-8xl text-black222 font-bold custom__hover">
                                        Listings
                                    </a>
                                </Link>
                            </motion.li>

                            <motion.li
                                className="my-5 relative"
                                variants={menuVariants}
                                animate="showLinks"
                                initial={{ y: -900 }}
                                whileHover={{ scale: 1.17 }}
                            >
                                <div className="menu__number">
                                    <p className="text-lg">(3)</p>
                                </div>
                                <Link href="/locations">
                                    <a className="text-3xl md:text-8xl text-black222 font-bold custom__hover">
                                        Locations
                                    </a>
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="flex-1 bg-banner bg-center bg-cover bg-no-repeat relative flex items-center justify-center"
                        initial={{ width: 0, opacity: 0 }}
                        variants={menuVariants}
                        animate={currOpen ? "panel2" : "closePanels"}
                    >
                        <div className="absolute inset-0 bg-overlay"></div>
                        <motion.h3
                            className="text-white underline text-2xl z-20 pb-2 cursor-pointer"
                            whileHover={{ scale: 1.3 }}
                            onClick={() => router.push("/listings")}
                        >
                            Explore
                        </motion.h3>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};
export default FullMenu;
