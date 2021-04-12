import { GiHomeGarage, GiBed } from "react-icons/gi";
import Tooltip from "react-tooltip";
import { AiOutlinePlus } from "react-icons/ai";
import { BsHouse } from "react-icons/bs";
import Link from "next/link";
import { Estates } from "@prisma/client";

interface PropertyCardProps {
    isRow?: boolean;
    isNew?: boolean;
    active?: boolean;
    estate: Estates | any;
    isMap?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
    isRow = false,
    isNew = true,
    estate,
    active = false,
    isMap = false,
}) => {
    return (
        <Link href="/listing/3">
            <a>
                <div
                    className={`bg-white flex-1 mx-3 relative my-3 flex ${
                        isRow ? "flex-row" : "flex-col"
                    } ${active ? "bg-primary" : ""}`}
                >
                    {isNew && (
                        <div className="absolute top-5 left-5 py-2 px-4 rounded-3xl bg-primary flex items-center justify-center">
                            <p className="text-sm font-bold text-white">NEW</p>
                        </div>
                    )}
                    <div className="flex-1">
                        <img
                            src={
                                `${estate.pictures.split(",")[0]}.jpg` ||
                                "/images/banner.jpg"
                            }
                            height={isRow ? 300 : 196}
                            className="object-cover w-full"
                        />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="flex-none flex border-b-2 border-card items-center justify-between w-full py-2 px-4">
                            <div className="flex-none">
                                <p className="text-base text-cardGray1">
                                    {/* @ts-ignore */}
                                    {estate.status.status_name}
                                </p>
                            </div>
                            <div className="flex-none">
                                <p className="text-base text-cardGray1">
                                    {/* @ts-ignore */}
                                    {estate.type.type_name}
                                </p>
                            </div>
                        </div>
                        <div className="flex-2 py-2 px-4 flex flex-col justify-center">
                            <h3 className="text-2xl font-semibold text-black222">
                                {estate.estate_name}
                            </h3>
                            <h4 className="text-cardGray2 text-xl font-semibold">
                                {estate.city.city_name},{" "}
                                {estate.city.country.country_name}
                            </h4>

                            <h5 className="mt-3 text-2xl font-bold text-primary">
                                € {estate.price}
                            </h5>
                        </div>
                        <div className="flex-none flex border-t-2 border-card items-center justify-evenly w-full pl-4 relative">
                            <div
                                className="flex-none p-2 flex items-center"
                                data-for="garageAmount"
                                data-tip="Garage available space"
                            >
                                <GiHomeGarage size={25} />
                                <p className="font-semibold text-xl text-cardGray2 ml-2">
                                    {estate.number_of_garage}
                                </p>
                                <Tooltip
                                    id="garageAmount"
                                    place="right"
                                    effect="solid"
                                />
                            </div>
                            <div
                                className="flex-none p-2 flex items-center"
                                data-for="roomsAmount"
                                data-tip="Rooms available"
                            >
                                <GiBed size={25} />
                                <p className="font-semibold text-xl text-cardGray2 ml-2">
                                    {estate.number_of_bedroom}
                                </p>
                                <Tooltip
                                    id="roomsAmount"
                                    place="right"
                                    effect="solid"
                                />
                            </div>
                            <div
                                className="flex-none p-2 flex items-center"
                                data-for="areaAmount"
                                data-tip="Area available"
                            >
                                <BsHouse size={25} />
                                <p className="font-semibold text-xl text-cardGray2 ml-2">
                                    {estate.total_area} m²
                                </p>
                                <Tooltip
                                    id="areaAmount"
                                    place="right"
                                    effect="solid"
                                />
                            </div>
                            {/* <div className="relative flex-1 bottom-0 right-0 p-2 bg-primary flex items-center justify-center hover:bg-primaryHover cursor-pointer">
                                <AiOutlinePlus size={27} color="#fff" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};
export default PropertyCard;
