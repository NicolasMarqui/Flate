import { useState } from "react";
import { useRouter } from "next/router";
import { MdExpandMore } from "react-icons/md";
import Dropdown from "@components/Dropdown";
import FDropdownLocation from "@components/Filters/FDropdownLocation";
import { Country, Estates } from ".prisma/client";
import { Reoverlay } from "reoverlay";
import ExtraFilters from "@components/Modals/ExtraFilters";
import FDropdownType from "@components/Filters/FDropdownType";

interface FilterContainerProps {
    amount: number;
    estates: Estates[];
    countries: Country[];
}

const FilterContainer: React.FC<FilterContainerProps> = ({
    amount,
    estates,
    countries,
}) => {
    const router = useRouter();
    const [openFLocation, setOpenFLocation] = useState(false);
    const [openFType, setOpenFType] = useState(false);

    return (
        <div className="w-full px-10 flex items-center flex-col md:flex-row">
            <div
                className="flex-1 md:border-r-2 border-light py-6 md:pr-6 relative"
                onClick={() => setOpenFLocation(!openFLocation)}
            >
                <p className="text-xl md:text-base lg:text-xl text-mediumGray text-center md:text-left">
                    The location you’re looking for
                </p>
                <div className="flex items-center justify-center md:justify-start cursor-pointer">
                    <h3 className="font-bold text-4xl md:text-2xl lg:text-4xl text-white hover:underline">
                        {(router.query.location as string) ||
                            (router.query.country as string) ||
                            "Everywhere"}
                    </h3>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>

                <Dropdown
                    isOpen={openFLocation}
                    handleChange={() => setOpenFLocation(!openFLocation)}
                    classes="w-auto left-0 bg-white shadow-lg max-h-56 overflow-y-auto"
                >
                    <FDropdownLocation
                        locations={estates}
                        countries={countries}
                        handleClick={(value) =>
                            router.push(
                                {
                                    pathname: "/listings",
                                    query: { ...router.query, location: value },
                                },
                                undefined
                            )
                        }
                    />
                </Dropdown>
            </div>
            <div
                className="flex-0.5 md:border-r-2 border-light py-6 md:px-6 relative"
                onClick={() => setOpenFType(!openFType)}
            >
                <p className="text-xl md:text-base lg:text-xl text-mediumGray text-center md:text-left">
                    Type
                </p>
                <div className="flex items-center justify-center md:justify-start cursor-pointer">
                    <h3 className="font-bold text-4xl md:text-2xl lg:text-4xl text-white hover:underline">
                        {(router.query.type as string) || "All"}
                    </h3>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>

                <Dropdown
                    isOpen={openFType}
                    handleChange={() => setOpenFType(!openFType)}
                    classes="w-auto left-0 bg-white shadow-lg"
                >
                    <FDropdownType
                        handleClick={(value) =>
                            router.push(
                                {
                                    pathname: "/listings",
                                    query: { ...router.query, type: value },
                                },
                                undefined
                            )
                        }
                    />
                </Dropdown>
            </div>
            <div className="flex-1 md:border-r-2 border-light py-6 md:px-6">
                <p className="text-xl md:text-base lg:text-xl text-mediumGray text-center md:text-left">
                    We found
                </p>
                <div className="flex items-center justify-center md:justify-start">
                    <h3 className="font-bold text-4xl md:text-2xl lg:text-4xl text-white">
                        {amount} propertie(s)
                    </h3>
                </div>
            </div>

            <div
                className="flex-1 py-6 md:px-6 relative"
                onClick={() => Reoverlay.showModal(ExtraFilters)}
            >
                <p className="text-xl md:text-base lg:text-xl text-mediumGray text-center md:text-left">
                    Filter
                </p>
                <div className="flex flex-row items-center mt-1">
                    <div className="flex items-center justify-center md:justify-start">
                        <h3 className="font-bold text-4xl md:text-2xl lg:text-4xl text-white hover:underline cursor-pointer">
                            All Filters
                        </h3>
                        <MdExpandMore color="#BABABA" className="ml-2" />
                    </div>
                </div>
            </div>
            {Object.keys(router.query).length > 0 && (
                <div
                    className="flex-1 md:border-l-2 border-light py-6 md:px-6"
                    onClick={() => router.push("/listings")}
                >
                    <p className="text-xl md:text-base lg:text-xl text-mediumGray text-center md:text-left">
                        Clear
                    </p>
                    <div className="flex items-center justify-center md:justify-start">
                        <h3 className="font-bold text-4xl md:text-2xl lg:text-4xl  hover:underline cursor-pointer text-red-400">
                            Clear Filters
                        </h3>
                    </div>
                </div>
            )}
        </div>
    );
};
export default FilterContainer;
