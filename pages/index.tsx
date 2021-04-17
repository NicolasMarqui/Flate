import Meta from "@components/Meta";
import Hero from "@components/Hero";
import Latest from "@components/Latest";
import Experience from "@components/Experience";
import Safety from "@components/Safety";
import { GetStaticProps } from "next";
import prisma from "@utils/prisma";
import { Estates, Country } from "@prisma/client";
import CTA from "@components/CTA";

interface HomeProps {
    estates: Estates[];
    countries: Country[];
}

const Home: React.FC<HomeProps> = ({ estates, countries }) => {
    return (
        <>
            <Meta
                title="Home"
                description="Rent or Buy your new home on Flate, the leading accommodation marketplace for nacionals and internationals."
                keywords="buy, rent, house, locations, worlds"
            />
            <Hero estates={estates} countries={countries} />
            <Latest latests={estates.slice(0, 9)} />
            <Experience />
            <Safety />
            <CTA />
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const estates = await prisma.estates.findMany({
        include: {
            city: {
                select: { city_name: true, country: true },
            },
            type: { select: { type_name: true } },
            employee: { select: { first_name: true, last_name: true } },
            status: { select: { status_name: true } },
        },
        distinct: ["cityId"],

        orderBy: { id: "asc" },
    });

    const countries = await prisma.country.findMany({
        distinct: ["country_name"],
    });

    return {
        props: {
            estates,
            countries,
        },
    };
};

export default Home;
