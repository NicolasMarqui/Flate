import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const FiltersHero: React.FC = ({}) => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedType, setSelectedType] = useState(null);

    return (
        <div className="mt-10 flex flex-col md:flex-row">
            {/* First Filter */}
            <div className="bg-white mt-4 md:mt-0 md:mr-4 rounded-2xl py-4 px-10 flex flex-row items-center justify-center cursor-pointer">
                <div className="flex-none mr-3">
                    <h3 className="text-gray-400 text-xl">Location: </h3>
                </div>
                <div className="flex-none flex items-center">
                    <h4 className="text-lg text-black">Italy</h4>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>
            </div>

            {/* Second Filter */}
            <div className="bg-white mt-4 md:mt-0 md:mr-4 rounded-2xl py-4 px-10 flex flex-row items-center justify-center cursor-pointer">
                <div className="flex-none mr-3">
                    <h3 className="text-gray-400 text-xl">Property Type: </h3>
                </div>
                <div className="flex-none flex items-center">
                    <h4 className="text-lg text-black">House</h4>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>
            </div>

            {/* Third Filter */}
            <div className="bg-white mt-4 md:mt-0 md:mr-4 rounded-2xl py-4 px-10 flex flex-row items-center justify-center cursor-pointer">
                <div className="flex-none mr-3">
                    <h3 className="text-gray-400 text-xl">Price Range: </h3>
                </div>
                <div className="flex-none flex items-center">
                    <h4 className="text-lg text-black">House</h4>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>
            </div>

            {/* Search */}
            <div className="bg-primary mt-4 md:mt-0 md:mr-4 rounded-2xl py-4 px-10 flex flex-row items-center justify-center cursor-pointer hover:bg-primaryHover">
                <p className="text-xl text-white font-bold">Search now</p>
            </div>
        </div>
    );
};
export default FiltersHero;
