import { MdExpandMore } from "react-icons/md";

interface FilterContainerProps {}

const FilterContainer: React.FC<FilterContainerProps> = ({}) => {
    return (
        <div className="w-full px-10 flex items-center flex-col md:flex-row">
            <div className="flex-1 md:border-r-2 border-light py-6 md:pr-6">
                <p className="text-xl text-mediumGray text-center md:text-left">
                    The location you’re looking for
                </p>
                <div className="flex items-center justify-center md:justify-start cursor-pointer">
                    <h3 className="font-bold text-4xl text-white">Italy</h3>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>
            </div>
            <div className="flex-1 md:border-r-2 border-light py-6 md:px-6">
                <p className="text-xl text-mediumGray text-center md:text-left">
                    We found
                </p>
                <div className="flex items-center justify-center md:justify-start">
                    <h3 className="font-bold text-4xl text-white">
                        29 properties
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
                    Filters
                </p>
                <div className="flex items-center justify-center md:justify-start">
                    <div className="flex-1 flex flex-row items-center md:mr-3">
                        <h3 className="font-bold text-4xl text-white">Type</h3>
                        <MdExpandMore color="#BABABA" className="ml-2" />
                    </div>
                    <div className="flex-1 flex flex-row items-center md:mx-3">
                        <h3 className="font-bold text-4xl text-white">More</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FilterContainer;
