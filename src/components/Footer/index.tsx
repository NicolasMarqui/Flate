import Container from "@components/Container";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer className="mt-12 bg-black222 border-t-2 border-red-500">
            <Container classes="px-3">
                <div className="flex flex-col md:flex-row py-16">
                    <div className="flex-1.5 flex flex-col items-center md:items-start">
                        <Link href="/">
                            <a>
                                <h1 className="font-charm text-primary text-4xl md:text-6xl font-bold">
                                    Flate
                                </h1>
                            </a>
                        </Link>
                        <p className="mt-2 text-base text-gray-400 md:w-4/5 text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut.
                        </p>

                        <div className="mt-5">
                            <p className="text-sm text-white">Follow me on: </p>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://github.com/NicolasMarqui"
                                target="_blank"
                                className="mt-4 flex items-center justify-center lg:justify-start"
                            >
                                <AiFillGithub size={30} color="#fff" />
                            </motion.a>
                        </div>
                    </div>
                    <div className="flex-1.5 my-5 md:my-0">
                        <h5 className="mt-3 text-lg text-center md:text-left mb-3 underline text-white">
                            Countries
                        </h5>
                        <ul className="p-0 m-0 flex flex-col text-center md:text-left">
                            <li className="mt-1 group">
                                <Link href="/listings?country=Italy">
                                    <a className="text-base text-desc group-hover:underline text-white">
                                        Italy
                                    </a>
                                </Link>
                            </li>
                            <li className="mt-1 group">
                                <Link href="/listings?country=Spain">
                                    <a className="text-base text-desc group-hover:underline text-white">
                                        Spain
                                    </a>
                                </Link>
                            </li>
                            <li className="mt-1 group">
                                <Link href="/listings?country=United Kingdom">
                                    <a className="text-base text-desc group-hover:underline text-white">
                                        United Kingdom
                                    </a>
                                </Link>
                            </li>
                            <li className="mt-1 group">
                                <Link href="/listings?country=Portugal">
                                    <a className="text-base text-desc group-hover:underline text-white">
                                        Portugal
                                    </a>
                                </Link>
                            </li>
                            <li className="mt-1 group">
                                <Link href="/listings?country=Canada">
                                    <a className="text-base text-desc group-hover:underline text-white">
                                        Canada
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-2 my-5 md:my-0">
                        <h5 className="mt-3 text-lg text-center md:text-left mb-3 underline text-white">
                            Disclaimer
                        </h5>

                        <p className="text-white text-center lg:text-left">
                            This is a{" "}
                            <span className="text-primary font-bold">
                                PERSONAL
                            </span>{" "}
                            project, every real estate listed here is{" "}
                            <span className="text-primary font-bold">
                                FICTIONAL
                            </span>
                        </p>
                        <p className="text-white text-center lg:text-left">
                            All images were taken from{" "}
                            <a
                                href="https://www.pexels.com/pt-br/"
                                target="_blank"
                            >
                                Pexels
                            </a>{" "}
                            &{" "}
                            <a href="https://unsplash.com/" target="_blank">
                                Unsplash
                            </a>
                        </p>
                        <p className="text-white text-center lg:text-left">
                            All coordinates was{" "}
                            <span className="underline">randomly</span>{" "}
                            generated from google maps!
                        </p>
                    </div>
                </div>
            </Container>
            <div className="flex flex-col md:flex-row bg-black222 justify-center items-center py-3">
                <p className="text-base text-white md:mx-3 mb-2 md:mb-0">
                    Made with ❤ by Nicolas Marqui
                </p>
            </div>
        </footer>
    );
};
export default Footer;
