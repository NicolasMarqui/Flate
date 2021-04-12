import { MdExpandMore } from "react-icons/md";

interface FilterContainerProps {
    location: string | null;
    amount: number;
}

const FilterContainer: React.FC<FilterContainerProps> = ({
    location,
    amount,
}) => {
    return (
        <div className="w-full px-10 flex items-center flex-col md:flex-row">
            <div className="flex-1 md:border-r-2 border-light py-6 md:pr-6">
                <p className="text-xl text-mediumGray text-center md:text-left">
                    The location you’re looking for
                </p>
                <div className="flex items-center justify-center md:justify-start cursor-pointer">
                    <h3 className="font-bold text-4xl text-white">
                        {location || "Everywhere"}
                    </h3>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>
            </div>
            <div className="flex-1 md:border-r-2 border-light py-6 md:px-6">
                <p className="text-xl text-mediumGray text-center md:text-left">
                    We found
                </p>
                <div className="flex items-center justify-center md:justify-start">
                    <h3 className="font-bold text-4xl text-white">
                        {amount} propertie(s)
                    </h3>
                </div>
            </div>
            <div className="flex-1 md:border-r-2 border-light py-6 md:px-6">
                <p className="text-xl text-mediumGray text-center md:text-left">
                    Sort by
                </p>
                <div className="flex items-center justify-center md:justify-start">
                    <h3 className="font-bold text-4xl text-white">Price</h3>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>
            </div>
            <div className="flex-1 py-6 md:px-6">
                <p className="text-xl text-mediumGray text-center md:text-left">
                    Filter
                </p>
                <div className="flex flex-row items-center mt-1">
                    <div className="py-2 px-4  flex items-center justify-center bg-primaryBlue mr-2 cursor-pointer">
                        <p className="text-xl font-bold text-white">Filters</p>
                    </div>
                    {/* {isRow ? (
                        <div
                            className="py-2 px-4  flex items-center justify-center bg-primaryBlue mx-2 cursor-pointer"
                            data-id="showCol"
                            onClick={() => handleRowChange(!isRow)}
                            data-tip="Display as columns"
                        >
                            <MdViewModule size={27} color="#fff" />
                            <Tooltip
                                id="showCol"
                                effect="solid"
                                place="bottom"
                            />
                        </div>
                    ) : (
                        <div
                            className="py-2 px-4  flex items-center justify-center bg-primaryBlue mx-2 cursor-pointer"
                            onClick={() => handleRowChange(!isRow)}
                            data-id="showRow"
                            data-tip="Display as rows"
                        >
                            <MdViewAgenda size={27} color="#fff" />
                            <Tooltip
                                id="showRow"
                                effect="solid"
                                place="bottom"
                            />
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
};
export default FilterContainer;
