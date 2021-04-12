import { GiHomeGarage, GiBed } from "react-icons/gi";
import Tooltip from "react-tooltip";
import { BsHouse } from "react-icons/bs";
import Link from "next/link";
import { Estates } from "@prisma/client";
import { GiPositionMarker } from "react-icons/gi";
import { BiBath } from "react-icons/bi";
interface PropertyCardProps {
    isRow?: boolean;
    estate: Estates | any;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
    isRow = false,
    estate,
}) => {
    return (
        <Link href="/listing/3">
            <a>
                <div
                    className={`bg-white flex-1 mx-3 relative my-3 flex rounded-xl ${
                        isRow ? "flex-row" : "flex-col"
                    }`}
                >
                    <div className="absolute top-5 left-5 py-2 px-4 rounded-3x flex items-center justify-center bg-primaryBlue">
                        <p className="text-sm font-bold text-white">
                            {/* @ts-ignore */}
                            {estate.type.type_name}
                        </p>
                    </div>
                    <div className="flex-1">
                        <img
                            src={
                                `${estate.pictures.split(",")[0]}.jpg` ||
                                "/images/banner.jpg"
                            }
                            height={isRow ? 300 : 196}
                            className={`object-cover w-full ${
                                isRow ? "m-300" : "m-196"
                            }`}
                        />
                    </div>
                    <div className="flex-1 flex flex-col mt-2">
                        <div className="flex-1 flex items-center justify-between w-full py-2 px-4">
                            <h5 className="text-2xl font-bold text-primary">
                                € {estate.price}
                            </h5>

                            <div className="py-2 px-4  flex items-center justify-center bg-primaryLight">
                                <p className="text-sm font-bold text-primary">
                                    {/* @ts-ignore */}
                                    {estate.status.status_name}
                                </p>
                            </div>
                        </div>
                        <div className="flex-2  py-2 px-4 flex flex-col justify-start">
                            <h3 className="text-2xl font-semibold text-black222">
                                {estate.estate_name}
                            </h3>
                            <div className="-mt-1 flex flex-row items-center">
                                <span>
                                    <GiPositionMarker
                                        size={13}
                                        color="#222"
                                        className="mr-2"
                                    />
                                </span>
                                <h4 className="text-cardGray2 text-xl">
                                    {estate.city.city_name},{" "}
                                    {estate.city.country.country_name}
                                </h4>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-evenly justify-self-end px-2 border-t-2 border-card">
                            <div
                                className="flex-1 p-2 flex items-center"
                                data-for="areaAmount"
                                data-tip="Area available"
                            >
                                <BsHouse size={25} color="#FF5A5F" />
                                <p className="font-semibold text-xl text-black222 ml-2">
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
                                <GiHomeGarage size={25} color="#FF5A5F" />
                                <p className="font-semibold text-xl text-black222 ml-2">
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
                                <GiBed size={25} color="#FF5A5F" />
                                <p className="font-semibold text-xl text-black222 ml-2">
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
                                <BiBath size={25} color="#FF5A5F" />
                                <p className="font-semibold text-xl text-black222 ml-2">
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
                </div>
            </a>
        </Link>
    );
};
export default PropertyCard;
