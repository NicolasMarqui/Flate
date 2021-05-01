import Tooltip from "react-tooltip";
import Link from "next/link";
import { Estates } from "@prisma/client";
import { BsHouse } from "react-icons/bs";
import { GiHomeGarage, GiBed } from "react-icons/gi";
import { GiPositionMarker } from "react-icons/gi";
import { BiBath } from "react-icons/bi";
import { motion } from "framer-motion";
import { MdFavorite } from "react-icons/md";
import { useLocalStorage } from "@hooks/useLocalStorage";
import useWindowSize from "@hooks/useWindowSize";
interface PropertyCardProps {
    isRow?: boolean;
    estate: Estates | any;
    idx: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
    isRow = false,
    estate,
    idx,
}) => {
    const [favorites, setFavorites] = useLocalStorage("favorites", []);
    const { width } = useWindowSize();

    const handleFav = () => {
        if (favorites.includes(estate.estate_name)) {
            const removeFav = favorites.filter(
                (fav) => fav !== estate.estate_name
            );
            setFavorites(removeFav);
        } else {
            setFavorites([...favorites, estate.estate_name]);
        }
    };

    return (
        <Link href="/listing/[id]" as={`/listing/${estate.id}`}>
            <a className={`${!isRow ? "flex-1" : ""}`}>
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.97 }}
                    className={`bg-white flex-1 relative m-6 flex rounded-xl ${
                        isRow ? "flex-row" : "flex-col"
                    }`}
                >
                    <div className="absolute top-5 left-5 py-2 px-4 rounded-3x flex items-center justify-center bg-primaryBlue z-10">
                        <p className="text-sm font-bold text-white">
                            {/* @ts-ignore */}
                            {estate.type.type_name}
                        </p>
                    </div>
                    <div
                        className={`absolute p-2 rounded-full flex items-center justify-center z-20 bg-white ${
                            isRow ? "bottom-5 left-5" : "top-5 right-5"
                        }`}
                        onClick={handleFav}
                    >
                        {favorites.includes(estate.estate_name) ? (
                            <MdFavorite size={25} color="red" />
                        ) : (
                            <MdFavorite size={25} color="#222" />
                        )}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <motion.img
                            whileHover={{ scale: 1.2 }}
                            src={
                                `${estate.pictures.split(",")[0]}.jpg` ||
                                "/images/banner.jpg"
                            }
                            height={196}
                            className={`object-cover w-full z-10 m-196`}
                        />
                    </div>
                    <div className="flex-1 flex flex-col mt-2 justify-between">
                        <div className="flex-none flex items-center justify-between w-full py-2 px-4">
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
                        <div className="flex-none  py-4 px-4 flex flex-col justify-start">
                            <h3 className="text-2xl xs:text-xl lg:text-2xl font-semibold text-black222">
                                {estate.estate_name.length > 19 &&
                                width < 1400 &&
                                !isRow
                                    ? estate.estate_name.substring(0, 19) +
                                      "..."
                                    : estate.estate_name}
                            </h3>
                            <div className="-mt-1 flex flex-row items-center">
                                <span>
                                    <GiPositionMarker
                                        size={13}
                                        color="#222"
                                        className="mr-2"
                                    />
                                </span>
                                <h4 className="text-cardGray2 text-xl xs:text-base lg:text-xl">
                                    {estate.city.city_name},{" "}
                                    {estate.city.country.country_name}
                                </h4>
                            </div>
                        </div>
                        <div
                            className={`flex-none flex  items-center ${
                                isRow ? "justify-evenly" : "justify-center"
                            } justify-self-end px-2 border-t-2 border-card`}
                        >
                            <div
                                className="flex-1 xs:flex-none md:flex-none lg:flex-1 p-2 flex items-center"
                                data-for={`areaAmount#${idx}`}
                                data-tip="Area available"
                            >
                                <BsHouse size={25} color="#FF5A5F" />
                                <p className="font-semibold text-base xs:text-sm lg:text-base text-black222 ml-2">
                                    {estate.total_area} m²
                                </p>
                                <Tooltip
                                    id={`areaAmount#${idx}`}
                                    place="top"
                                    effect="solid"
                                />
                            </div>
                            <div
                                className="flex-none p-2 flex items-center"
                                data-for={`garageAmount#${idx}`}
                                data-tip="Garage available space"
                            >
                                <GiHomeGarage size={25} color="#FF5A5F" />
                                <p className="font-semibold text-base xs:text-sm lg:text-base text-black222 ml-2">
                                    {estate.number_of_garage}
                                </p>
                                <Tooltip
                                    id={`garageAmount#${idx}`}
                                    place="top"
                                    effect="solid"
                                />
                            </div>
                            <div
                                className="flex-none p-2 flex items-center"
                                data-for={`roomsAmount#${idx}`}
                                data-tip="Rooms available"
                            >
                                <GiBed size={25} color="#FF5A5F" />
                                <p className="font-semibold text-base xs:text-sm lg:text-base text-black222 ml-2">
                                    {estate.number_of_bedroom}
                                </p>
                                <Tooltip
                                    id={`roomsAmount#${idx}`}
                                    place="top"
                                    effect="solid"
                                />
                            </div>
                            <div
                                className="flex-none p-2 flex items-center"
                                data-for={`bathAval#${idx}`}
                                data-tip="Bathrooms available"
                            >
                                <BiBath size={25} color="#FF5A5F" />
                                <p className="font-semibold text-base xs:text-sm lg:text-base text-black222 ml-2">
                                    {estate.number_of_bathroom}
                                </p>
                                <Tooltip
                                    id={`bathAval#${idx}`}
                                    place="top"
                                    effect="solid"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </a>
        </Link>
    );
};
export default PropertyCard;
