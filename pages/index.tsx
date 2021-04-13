import Meta from "@components/Meta";
import Hero from "@components/Hero";
import Latest from "@components/Latest";
import Experience from "@components/Experience";
import Safety from "@components/Safety";
import { GetStaticProps } from "next";
import prisma from "@utils/prisma";
import { Estates } from "@prisma/client";

interface HomeProps {
    latests: Estates[];
}

const Home: React.FC<HomeProps> = ({ latests }) => {
    return (
        <>
            <Meta
                title="Home"
                description="Rent or Buy your new home on Flate, the leading accommodation marketplace for nacionals and internationals."
                keywords="buy, rent, house, locations, worlds"
            />
            <Hero />
            <Latest latests={latests} />
            <Experience />
            <Safety />
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const latests = await prisma.estates.findMany({
        take: 8,
        include: {
            city: {
                select: { city_name: true, country: true },
            },
            type: { select: { type_name: true } },
            employee: { select: { first_name: true, last_name: true } },
            status: { select: { status_name: true } },
        },
    });

    return {
        props: {
            latests,
        },
    };
};

export default Home;
