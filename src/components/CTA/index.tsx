import Container from "@components/Container";
import Section from "@components/Section";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA: React.FC = ({}) => {
    return (
        <Section>
            <Container classes="px-4">
                <div className="p-20 rounded-3xl bg-primary flex flex-col items-center justify-center">
                    <h4 className="text-white text-2xl md:text-4xl font-bold text-center">
                        Ready to book a place?
                    </h4>
                    <Link href="/listings">
                        <motion.div
                            className="bg-white w-full mt-5 md:w-1/5 mx-10 rounded-2xl py-4 px-10 flex flex-row items-center justify-center cursor-pointer hover:bg-gray-100 "
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <a className="text-xl text-black222 font-bold">
                                Let's go
                            </a>
                        </motion.div>
                    </Link>
                </div>
            </Container>
        </Section>
    );
};
export default CTA;
