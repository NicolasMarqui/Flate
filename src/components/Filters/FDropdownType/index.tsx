interface FDropdownTypeProps {
    handleClick: (value: string) => any;
}

const FDropdownType: React.FC<FDropdownTypeProps> = ({ handleClick }) => {
    return (
        <div className="mb-2">
            <p className="text-base text-gray-500">Types</p>

            <div
                className="rounded-sm py-2 hover:bg-gray-100"
                onClick={() => handleClick("House")}
            >
                <h3 className="text-2xl text-black222 font-bold">House</h3>
            </div>
            <div
                className="rounded-sm py-2 hover:bg-gray-100"
                onClick={() => handleClick("Flat")}
            >
                <h3 className="text-2xl text-black222 font-bold">Flat</h3>
            </div>
        </div>
    );
};
export default FDropdownType;
