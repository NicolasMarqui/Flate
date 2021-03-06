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
import { Country, Estates } from "@prisma/client";
import EmptyAnimation from "@components/EmptyAnimation";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { getTotalPages } from "@utils/getTotalPages";
import { motion } from "framer-motion";

interface ListingProps {
    listings: Estates[] | [];
    countries: Country[];
    allListings: Estates[];
}

const Listings: React.FC<ListingProps> = ({
    listings,
    countries,
    allListings,
}) => {
    const router = useRouter();
    const { width } = useWindowSize();
    const MapWithNoSSR = dynamic(() => import("../src/components/Map"), {
        ssr: false,
    });
    const isRow = width > 1126;
    const [page, setPage] = useState(1);
    const [showMap, setShowMap] = useState(width > 755);

    const handlePagination = (e: number) => {
        setPage(e);
    };

    return (
        <motion.div
            className="listings relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Meta
                title="Listings"
                description="Rent or Buy your new home on Flate, the leading accommodation marketplace for nacionals and internationals."
                keywords="buy, rent, house, locations, worlds"
            />
            <FilterContainer
                amount={listings.length}
                estates={allListings}
                countries={countries}
            />
            <div className="listing__wrapper relative">
                <div className="listing__results">
                    <div
                        className={`mt-3  relative ${
                            isRow ? "" : " md:px-16 flex flex-wrap"
                        }`}
                    >
                        {listings && listings.length > 0 ? (
                            <>
                                {listings
                                    .slice((page - 1) * 5, page * 5)
                                    .map((list: Estates, idx: number) => (
                                        <PropertyCard
                                            key={list.id}
                                            isRow={isRow}
                                            estate={list}
                                            idx={idx}
                                        />
                                    ))}

                                <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    containerClassName={"pagination"}
                                    activeClassName={"active"}
                                    pageCount={getTotalPages(
                                        listings.length,
                                        5
                                    )}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={(e) =>
                                        handlePagination(
                                            e.selected === 0
                                                ? 1
                                                : e.selected + 1
                                        )
                                    }
                                />
                            </>
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
                <div
                    className="fixed bottom-8 right-20 left-20 py-3 px-6 sm:px-10 bg-primary rounded-2xl flex md:hidden items-center justify-center z-10"
                    onClick={() => setShowMap(true)}
                >
                    <BsMap size={22} color="#fff" className="mr-2" />
                    <p className="text-white font-bold">Show Map</p>
                </div>
            </div>
            <div
                className={`fixed inset-0 overflow-hidden bg-black222 z-30 ${
                    showMap ? "block" : "hidden"
                }`}
            >
                <div className="absolute text-white top-0 right-0 left-0 bottom-20">
                    <div className="flex items-center justify-between">
                        <Title classes="text-center py-8 px-2 text-5xl md:text-7xl ml-3">
                            Map{" "}
                            <span className="text-primary">
                                {router.query.location || "Everywhere"}
                            </span>
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
        </motion.div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const listings = await prisma.estates.findMany({
        where: {
            city: {
                city_name: (query.location as string) || undefined,
                country: {
                    country_name: (query.country as string) || undefined,
                },
            },
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

    const countries = await prisma.country.findMany({
        distinct: ["country_name"],
    });

    const allListings = await prisma.estates.findMany({
        include: {
            city: {
                select: { city_name: true, country: true },
            },
            type: { select: { type_name: true } },
            employee: { select: { first_name: true, last_name: true } },
            status: { select: { status_name: true } },
        },
        orderBy: { id: "desc" },
    });

    return {
        props: {
            listings,
            countries,
            allListings,
        },
    };
};

export default Listings;
