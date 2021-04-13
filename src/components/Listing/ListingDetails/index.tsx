import { useState } from "react";
import { Estates } from ".prisma/client";
import Tooltip from "react-tooltip";
import { GiHomeGarage, GiBed } from "react-icons/gi";
import { BsHouse } from "react-icons/bs";
import { BiBath } from "react-icons/bi";
import ListingContact from "../ListingContact";

interface ListingDetailsProps {
    estate: Estates | any;
}

const ListingDetails: React.FC<ListingDetailsProps> = ({ estate }) => {
    const { estate_description, price } = estate;
    const [showFullDesc, setShowFullDesc] = useState(false);

    return (
        <div className="mt-4">
            <div className="relative">
                <div className="details__det flex items-center flex-col justify-center md:items-start">
                    <p className="text-base text-mediumGray">Price</p>
                    <h3 className="text-5xl text-primary font-bold">
                        € {price}
                    </h3>

                    <div className="mt-10">
                        <p className="text-base text-mediumGray text-center md:text-left">
                            Details
                        </p>
                        <div className="flex flex-wrap items-center">
                            <div
                                className="flex-1 p-2 flex items-center"
                                data-for="areaAmount"
                                data-tip="Area available"
                            >
                                <BsHouse size={35} color="#fff" />
                                <p className="font-semibold text-xl text-white ml-2">
                                    {estate.total_area} m²
                                </p>
                                <Tooltip
                                    id="areaAmount"
                                    place="top"
                                    effect="solid"
                                />
                            </div>
                            <div
                                className="flex-none p-2 flex items-center"
                                data-for="garageAmount"
                                data-tip="Garage available space"
                            >
                                <GiHomeGarage size={35} color="#fff" />
                                <p className="font-semibold text-xl text-white ml-2">
                                    {estate.number_of_garage}
                                </p>
                                <Tooltip
                                    id="garageAmount"
                                    place="top"
                                    effect="solid"
                                />
                            </div>
                            <div
                                className="flex-none p-2 flex items-center"
                                data-for="roomsAmount"
                                data-tip="Rooms available"
                            >
                                <GiBed size={35} color="#fff" />
                                <p className="font-semibold text-xl text-white ml-2">
                                    {estate.number_of_bedroom}
                                </p>
                                <Tooltip
                                    id="roomsAmount"
                                    place="top"
                                    effect="solid"
                                />
                            </div>
                            <div
                                className="flex-none p-2 flex items-center"
                                data-for="roomsAmount"
                                data-tip="Bathrooms available"
                            >
                                <BiBath size={35} color="#fff" />
                                <p className="font-semibold text-xl text-white ml-2">
                                    {estate.number_of_bathroom}
                                </p>
                                <Tooltip
                                    id="roomsAmount"
                                    place="top"
                                    effect="solid"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <p className="text-base text-mediumGray text-center md:text-left">
                            Description
                        </p>

                        <div className="mt-2 px-5 md:px-0">
                            <p className="text-white">
                                {estate_description.length > 400 &&
                                !showFullDesc
                                    ? estate_description.substring(0, 400) +
                                      "..."
                                    : estate_description}
                            </p>

                            {estate_description.length > 400 && (
                                <h5
                                    className="text-white underline text-lg cursor-pointer mt-5"
                                    onClick={() =>
                                        setShowFullDesc(!showFullDesc)
                                    }
                                >
                                    Read {showFullDesc ? "less" : "more"}
                                </h5>
                            )}
                        </div>
                    </div>
                </div>
                <ListingContact employee={estate.employee} />
            </div>
        </div>
    );
};
export default ListingDetails;
