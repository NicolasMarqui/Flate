// pretier-ignore
import {
    MdChevronLeft,
    MdChevronRight,
    MdFavorite,
    MdHome,
    MdShare,
} from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { motion } from "framer-motion";
import { useState } from "react";

interface ListingHeaderProps {
    name: string;
    city: string;
}

const ListingHeader: React.FC<ListingHeaderProps> = ({ name, city }) => {
    const router = useRouter();
    const [favorites, setFavorites] = useLocalStorage("favorites", []);
    const [isAdding, setIsAdding] = useState(false);

    const handleFavorites = () => {
        setIsAdding(true);

        if (favorites.includes(name)) {
            const removeFav = favorites.filter((fav) => fav !== name);
            setFavorites(removeFav);
        } else {
            setFavorites([...favorites, name]);
        }
    };

    return (
        <>
            <div
                className="py-2 w-28 flex items-center justify-center bg-primaryBlue mb-8 mx-auto md:mx-0 hover:bg-blue-800 cursor-pointer"
                onClick={() => router.back()}
            >
                <MdChevronLeft size={20} className="mr-2" color="#fff" />
                <p className="text-sm font-bold text-white">Go back</p>
            </div>
            <div className="flex flex-col md:flex-row items-center w-full md:justify-between">
                <div className="flex-1 flex flex-col items-center justify-center md:items-start">
                    <h2 className="font-bold text-4xl text-white text-center md:text-left">
                        {name}
                    </h2>
                    <div className="mt-1 flex items-center">
                        <MdHome size={30} color="#fff" />
                        <MdChevronRight
                            size={20}
                            color="#fff"
                            className="mx-2"
                        />
                        <Link href="/listings">
                            <a className="text-white text-base hover:underline">
                                Listings
                            </a>
                        </Link>
                        <MdChevronRight
                            size={20}
                            color="#fff"
                            className="mx-2"
                        />
                        <h4 className="text-white text-base">{city}</h4>
                    </div>
                </div>
                <div className="flex-none flex items-center mt-3 md:mt-0">
                    {/* <div className="mr-2 bg-white p-3 rounded-full cursor-pointer transform hover:scale-105">
                        <MdShare size={25} color="#222" />
                    </div> */}
                    <motion.div
                        className="mr-2 bg-white p-3 rounded-full cursor-pointer"
                        whileHover={{ scale: 1.15 }}
                        onClick={handleFavorites}
                    >
                        {favorites.includes(name) ? (
                            <MdFavorite size={25} color="red" />
                        ) : (
                            <MdFavorite size={25} color="#222" />
                        )}
                    </motion.div>
                </div>
            </div>
        </>
    );
};
export default ListingHeader;
