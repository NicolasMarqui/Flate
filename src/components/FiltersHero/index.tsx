import { Country, Estates } from ".prisma/client";
import Dropdown from "@components/Dropdown";
import FDropdownLocation from "@components/Filters/FDropdownLocation";
import FDropdownStatus from "@components/Filters/FDropdownStatus";
import FDropdownType from "@components/Filters/FDropdownType";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

interface FiltersHeroProps {
    estates: Estates[];
    countries: Country[];
}

const FiltersHero: React.FC<FiltersHeroProps> = ({ estates, countries }) => {
    const router = useRouter();

    const [locationOpen, setLocationOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedType, setSelectedType] = useState(null);

    const handleSearch = () => {
        const queryValues = {};

        if (selectedLocation) queryValues["location"] = selectedLocation;
        if (selectedStatus) queryValues["status"] = selectedStatus;
        if (selectedType) queryValues["type"] = selectedType;

        router.push(
            {
                pathname: "/listings",
                query: { ...queryValues },
            },
            undefined,
            { shallow: false }
        );
    };

    return (
        <div className="mt-10 flex flex-col md:flex-row">
            {/* First Filter */}
            <div
                className="bg-white mt-4 md:mt-0 md:mr-4 rounded-2xl py-4 px-10 md:px-4 lg:px-10 flex flex-row items-center justify-center cursor-pointer relative"
                onClick={() => setLocationOpen(!locationOpen)}
            >
                <div className="flex-none mr-3">
                    <h3 className="text-gray-400 text-xl md:text-base lg:text-xl">
                        Location:{" "}
                    </h3>
                </div>
                <div className="flex-none flex items-center">
                    <h4 className="text-lg text-black">
                        {selectedLocation || "Everywhere"}
                    </h4>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>

                <Dropdown
                    isOpen={locationOpen}
                    handleChange={() => setLocationOpen(!locationOpen)}
                    classes="filterDrop bg-white shadow-lg max-h-56 overflow-y-auto"
                >
                    <FDropdownLocation
                        locations={estates}
                        countries={countries}
                        handleClick={(value) => setSelectedLocation(value)}
                    />
                </Dropdown>
            </div>

            {/* Second Filter */}
            <div
                className="bg-white mt-4 md:mt-0 md:mr-4 rounded-2xl py-4 px-10 md:px-4 lg:px-10 flex flex-row items-center justify-center cursor-pointer relative"
                onClick={() => setTypeOpen(!typeOpen)}
            >
                <div className="flex-none mr-3">
                    <h3 className="text-gray-400 text-xl md:text-base lg:text-xl">
                        Type:{" "}
                    </h3>
                </div>
                <div className="flex-none flex items-center">
                    <h4 className="text-lg text-black">
                        {selectedType || "All Types"}
                    </h4>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>

                <Dropdown
                    isOpen={typeOpen}
                    handleChange={() => setTypeOpen(!typeOpen)}
                    classes="filterDrop bg-white shadow-lg"
                >
                    <FDropdownType
                        handleClick={(value) => setSelectedType(value)}
                    />
                </Dropdown>
            </div>

            {/* Third Filter */}
            <div
                className="bg-white mt-4 md:mt-0 md:mr-4 rounded-2xl py-4 px-10 md:px-4 lg:px-10 flex flex-row items-center justify-center cursor-pointer relative"
                onClick={() => setStatusOpen(!statusOpen)}
            >
                <div className="flex-none mr-3">
                    <h3 className="text-gray-400 text-xl md:text-base lg:text-xl">
                        Status:{" "}
                    </h3>
                </div>
                <div className="flex-none flex items-center">
                    <h4 className="text-lg text-black">
                        {selectedStatus || "All Status"}
                    </h4>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>

                <Dropdown
                    isOpen={statusOpen}
                    handleChange={() => setStatusOpen(!statusOpen)}
                    classes="filterDrop bg-white shadow-lg"
                >
                    <FDropdownStatus
                        handleClick={(value) => setSelectedStatus(value)}
                    />
                </Dropdown>
            </div>

            {/* Search */}
            <div
                className="bg-primary mt-4 md:mt-0 md:mr-4 rounded-2xl py-4 px-10 md:px-4 lg:px-10 flex flex-row items-center justify-center cursor-pointer hover:bg-primaryHover"
                onClick={handleSearch}
            >
                <p className="text-xl md:text-base lg:text-xl text-white font-bold">
                    Search now
                </p>
            </div>
        </div>
    );
};
export default FiltersHero;
