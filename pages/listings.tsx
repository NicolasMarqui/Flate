import { useState } from "react";
import Meta from "@components/Meta";
import FilterContainer from "@components/FilterContainer";
import PropertyCard from "@components/PropertyCard";
import dynamic from "next/dynamic";
import useWindowSize from "@hooks/useWindowSize";
import { BsMap } from "react-icons/bs";
import Title from "@components/Typography/Title";
import { FaTimes } from "react-icons/fa";
import prisma from "@utils/prisma";
import { GetServerSideProps } from "next";
import { Estates } from "@prisma/client";
import EmptyAnimation from "@components/EmptyAnimation";
import { useRouter } from "next/router";

interface ListingProps {
    listings: Estates[] | [];
}

const Listings: React.FC<ListingProps> = ({ listings }) => {
    const router = useRouter();
    const { width } = useWindowSize();
    const MapWithNoSSR = dynamic(() => import("../src/components/Map"), {
        ssr: false,
    });
    const isRow = width > 755;
    const [showMap, setShowMap] = useState(null);

    return (
        <div className="listings relative">
            <Meta
                title="Listings"
                description="Rent or Buy your new home on Flate, the leading accommodation marketplace for nacionals and internationals."
                keywords="buy, rent, house, locations, worlds"
            />
            <FilterContainer amount={listings.length} location="" />
            <div className="listing__wrapper relative">
                <div className="listing__results">
                    <div
                        className={`mt-3  relative ${
                            isRow ? "" : " md:px-16 flex flex-wrap"
                        }`}
                    >
                        {listings && listings.length > 0 ? (
                            listings.map((list: Estates) => (
                                <PropertyCard
                                    key={list.id}
                                    isRow={isRow}
                                    estate={list}
                                />
                            ))
                        ) : (
                            <EmptyAnimation />
                        )}
                    </div>
                </div>
                <div
                    className={`listings__map ${
                        showMap ? "visible" : "not__visible"
                    }`}
                >
                    <div className="help">
                        <MapWithNoSSR markers={listings} />
                    </div>
                </div>
                {width < 992 && (
                    <div
                        className="fixed bottom-8 right-20 left-20 py-3 px-10 bg-primary rounded-2xl flex items-center justify-center z-20"
                        onClick={() => setShowMap(true)}
                    >
                        <BsMap size={22} color="#fff" className="mr-2" />
                        <p className="text-white font-bold">Show Map</p>
                    </div>
                )}
            </div>
            {showMap && (
                <div className="fixed inset-0 bg-black222 z-30">
                    <div className="absolute text-white top-0 right-0 left-0 bottom-20">
                        <div className="flex items-center justify-between">
                            <Title classes="text-center py-8 px-2 text-5xl md:text-7xl ml-3">
                                Map <span className="text-primary">Italy</span>
                            </Title>
                            <div
                                className="bg-bg rounded-full mr-4 p-4"
                                onClick={() => setShowMap(false)}
                            >
                                <FaTimes size={30} color="#fff" />
                            </div>
                        </div>
                        <MapWithNoSSR markers={listings} />
                    </div>
                </div>
            )}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const listings = await prisma.estates.findMany({
        where: {
            city: { city_name: (query.location as string) || undefined },
            type: { type_name: (query.type as string) || undefined },
            status: { status_name: (query.status as string) || undefined },
            number_of_bathroom: Number(query.bathroom) || undefined,
            number_of_bedroom: Number(query.bedroom) || undefined,
            number_of_floors: Number(query.floors) || undefined,
            number_of_garage: Number(query.garage) || undefined,
        },
        include: {
            city: {
                select: { city_name: true, country: true },
            },
            type: { select: { type_name: true } },
            employee: { select: { first_name: true, last_name: true } },
            status: { select: { status_name: true } },
        },
        orderBy: { id: "asc" },
    });

    return {
        props: {
            listings,
        },
    };
};

export default Listings;
