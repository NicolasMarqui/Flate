import { City, Country } from ".prisma/client";
import Container from "@components/Container";
import prisma from "@utils/prisma";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Meta from "@components/Meta";

interface LocationsProps {
    countries: Country[];
    cities: City[];
}

const Locations: React.FC<LocationsProps> = ({ countries, cities }) => {
    const router = useRouter();

    return (
        <div className="locations relative overflow-x-hidden">
            <Meta
                title="Locations"
                description="Rent or Buy your new home on Flate, the leading accommodation marketplace for nacionals and internationals."
                keywords="buy, rent, house, locations, worlds"
            />
            <div className="my-6">
                <Container classes="px-3">
                    <div className="flex justify-center flex-col items-center md:items-start">
                        {countries.map((country, idx1) => (
                            <div key={idx1} className="my-5">
                                <p
                                    className="text-xl text-gray-500 cursor-pointer"
                                    onClick={() =>
                                        router.push(
                                            {
                                                pathname: "/listings",
                                                query: {
                                                    ...router.query,
                                                    country:
                                                        country.country_name,
                                                },
                                            },
                                            undefined
                                        )
                                    }
                                >
                                    {country.country_name}
                                </p>

                                {cities
                                    .filter(
                                        (cFil: any) =>
                                            cFil.country.country_name ===
                                            country.country_name
                                    )
                                    .map((city: City, idx: number) => (
                                        <motion.div
                                            whileHover={{ scale: 1.2, x: 100 }}
                                            whileTap={{ scale: 0.7 }}
                                            key={idx}
                                            className="rounded-sm py-2 cursor-pointer my-3"
                                            onClick={() =>
                                                router.push(
                                                    {
                                                        pathname: "/listings",
                                                        query: {
                                                            ...router.query,
                                                            location:
                                                                city.city_name,
                                                        },
                                                    },
                                                    undefined
                                                )
                                            }
                                        >
                                            <h3 className="text-4xl md:text-8xl text-white font-bold">
                                                {city.city_name}
                                            </h3>
                                        </motion.div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const countries = await prisma.country.findMany({
        distinct: ["country_name"],
    });

    const cities = await prisma.city.findMany({
        distinct: ["city_name"],
        include: {
            country: { select: { country_name: true } },
        },
    });

    return {
        props: {
            cities,
            countries,
        },
    };
};

export default Locations;
