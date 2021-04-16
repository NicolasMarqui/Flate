import { GetServerSideProps } from "next";
import prisma from "@utils/prisma";
import { Estates } from "@prisma/client";
import EmptyAnimation from "@components/EmptyAnimation";
import Container from "@components/Container";
import ListingHeader from "@components/Listing/ListingHeader";
import ListingImages from "@components/Listing/ListingImages";
import ListingDetails from "@components/Listing/ListingDetails";
import Meta from "@components/Meta";
import dynamic from "next/dynamic";
import ListingContactMobile from "@components/Listing/ListingContactMobile";
import ListingSimilar from "@components/Listing/ListingSimilar";

interface ListingProps {
    estate: Estates | any;
    similarEstates: Estates[] | undefined;
}

const Listing: React.FC<ListingProps> = ({ estate, similarEstates }) => {
    const MapWithNoSSR = dynamic(
        () => import("../../src/components/Listing/ListingMap"),
        {
            ssr: false,
        }
    );

    if (!estate) {
        return <EmptyAnimation />;
    }

    return (
        <div className="mt-10 relative">
            <Meta
                title={`${estate.estate_name} - ${estate.city.city_name}`}
                description={estate.estate_description}
                keywords="buy, rent, house, locations, worlds"
            />
            <Container>
                <ListingHeader
                    name={estate.estate_name}
                    city={estate.city.city_name}
                />

                <ListingImages pictures={estate.pictures} id={estate.id} />
                <ListingDetails estate={estate} />
                <div className="mt-10 mb-5">
                    <p className="text-base text-mediumGray text-center md:text-left">
                        Map
                    </p>

                    <MapWithNoSSR coordinates={estate.coordinates} />

                    {similarEstates && similarEstates.length > 0 && (
                        <ListingSimilar
                            country={estate.city.country.country_name}
                            similar={similarEstates}
                        />
                    )}
                </div>
            </Container>
            <ListingContactMobile employee={estate.employee} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const estate = await prisma.estates.findUnique({
        where: { id: (params.id as string) || undefined },
        include: {
            city: {
                select: { city_name: true, country: true },
            },
            type: { select: { type_name: true } },
            employee: { select: { first_name: true, last_name: true } },
            status: { select: { status_name: true } },
        },
    });

    const similarEstates = await prisma.estates.findMany({
        where: {
            city: { country: { id: estate.city.country.id || undefined } },
            NOT: { id: estate.id },
        },
        include: {
            city: {
                select: { city_name: true, country: true },
            },
            type: { select: { type_name: true } },
            employee: { select: { first_name: true, last_name: true } },
            status: { select: { status_name: true } },
        },
        distinct: ["id"],
    });

    return {
        props: {
            estate,
            similarEstates,
        },
    };
};

export default Listing;
